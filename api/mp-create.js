export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { uid, plan, email, emailDuo } = req.body;

    if (!uid || !plan) {
      return res.status(400).json({ error: 'Faltan parametros: uid y plan son requeridos' });
    }

    const PLANES = {
      premium: {
        title: 'Peso Real Premium',
        description: 'Acceso completo: asistente IA, canasta personalizada, comparacion con pares',
        price: 7000,
      },
      duo: {
        title: 'Peso Real Duo',
        description: 'Todo lo de Premium para 2 personas con opcion de canasta compartida',
        price: 12000,
      },
    };

    const planData = PLANES[plan];
    if (!planData) {
      return res.status(400).json({ error: 'Plan invalido. Usar: premium o duo' });
    }

    const baseUrl = process.env.APP_BASE_URL || 'https://peso-real-xi.vercel.app';

    // Para duo, incluir email del segundo usuario en la referencia
    const externalRef = plan === 'duo' && emailDuo
      ? uid + '|' + plan + '|' + emailDuo
      : uid + '|' + plan;

    const body = {
      items: [
        {
          id: plan,
          title: planData.title,
          description: planData.description,
          quantity: 1,
          unit_price: planData.price,
          currency_id: 'ARS',
        },
      ],
      payer: {
        email: email || '',
      },
      external_reference: externalRef,
      back_urls: {
        success: baseUrl + '/app.html?pago=ok&plan=' + plan,
        failure: baseUrl + '/app.html?pago=error',
        pending: baseUrl + '/app.html?pago=pendiente',
      },
      auto_return: 'approved',
      notification_url: baseUrl + '/api/mp-webhook',
      statement_descriptor: 'PESO REAL',
    };

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.MP_ACCESS_TOKEN,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('MP error:', data);
      return res.status(response.status).json({ error: 'Error al crear preferencia', detail: data });
    }

    return res.status(200).json({
      id: data.id,
      init_point: data.init_point,
      sandbox_init_point: data.sandbox_init_point,
    });

  } catch (error) {
    console.error('mp-create error:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
