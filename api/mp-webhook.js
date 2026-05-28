import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Inicializar Firebase Admin solo una vez
function getDb() {
  if (getApps().length === 0) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }
  return getFirestore();
}

export default async function handler(req, res) {
  // MP envia GET para validar y POST con notificaciones
  if (req.method === 'GET') return res.status(200).send('OK');
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { type, data } = req.body;

    // Solo procesar pagos
    if (type !== 'payment') {
      return res.status(200).json({ received: true });
    }

    const paymentId = data?.id;
    if (!paymentId) return res.status(200).json({ received: true });

    // Consultar el pago en MP para verificar su estado
    const mpRes = await fetch('https://api.mercadopago.com/v1/payments/' + paymentId, {
      headers: {
        'Authorization': 'Bearer ' + process.env.MP_ACCESS_TOKEN,
      },
    });

    if (!mpRes.ok) {
      console.error('Error consultando pago MP:', paymentId);
      return res.status(200).json({ received: true });
    }

    const pago = await mpRes.json();

    // Solo procesar pagos aprobados
    if (pago.status !== 'approved') {
      console.log('Pago no aprobado:', pago.status, paymentId);
      return res.status(200).json({ received: true });
    }

    // external_reference = "uid|plan"
    const externalRef = pago.external_reference || '';
    const partes = externalRef.split('|');
    if (partes.length !== 2) {
      console.error('external_reference invalido:', externalRef);
      return res.status(200).json({ received: true });
    }

    const [uid, plan] = partes;

    // Actualizar Firestore
    const db = getDb();
    const ref = db.collection('usuarios').doc(uid);

    const ahora = new Date().toISOString();

    await ref.set({
      premium: {
        activo: true,
        plan: plan,
        fechaActivacion: ahora,
        ultimoPago: ahora,
        paymentId: String(paymentId),
        monto: pago.transaction_amount,
      }
    }, { merge: true });

    console.log('Premium activado:', uid, plan, paymentId);
    return res.status(200).json({ received: true, uid, plan });

  } catch (error) {
    console.error('mp-webhook error:', error);
    // Siempre devolver 200 a MP para evitar reintentos
    return res.status(200).json({ received: true });
  }
}
