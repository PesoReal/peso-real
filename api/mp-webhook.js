import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

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
  if (req.method === 'GET') return res.status(200).send('OK');
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { type, data } = req.body;

    if (type !== 'payment') {
      return res.status(200).json({ received: true });
    }

    const paymentId = data?.id;
    if (!paymentId) return res.status(200).json({ received: true });

    const mpRes = await fetch('https://api.mercadopago.com/v1/payments/' + paymentId, {
      headers: { 'Authorization': 'Bearer ' + process.env.MP_ACCESS_TOKEN },
    });

    if (!mpRes.ok) return res.status(200).json({ received: true });

    const pago = await mpRes.json();
    if (pago.status !== 'approved') return res.status(200).json({ received: true });

    const externalRef = pago.external_reference || '';
    const partes = externalRef.split('|');
    if (partes.length < 2) return res.status(200).json({ received: true });

    const uid = partes[0];
    const plan = partes[1];
    const emailDuo = partes[2] || null; // solo para plan duo

    const db = getDb();
    const ahora = new Date().toISOString();

    // Activar premium al usuario principal
    await db.collection('usuarios').doc(uid).set({
      premium: {
        activo: true,
        plan: plan,
        fechaActivacion: ahora,
        ultimoPago: ahora,
        paymentId: String(paymentId),
        monto: pago.transaction_amount,
        emailDuo: emailDuo || null,
      }
    }, { merge: true });

    // Si es duo, guardar invitacion pendiente para el segundo usuario
    if (plan === 'duo' && emailDuo) {
      await db.collection('duo_invites').doc(emailDuo.toLowerCase()).set({
        uidInvitador: uid,
        emailDuo: emailDuo.toLowerCase(),
        fechaInvitacion: ahora,
        estado: 'pendiente',
        paymentId: String(paymentId),
      });
    }

    console.log('Premium activado:', uid, plan, paymentId);
    return res.status(200).json({ received: true, uid, plan });

  } catch (error) {
    console.error('mp-webhook error:', error);
    return res.status(200).json({ received: true });
  }
}
