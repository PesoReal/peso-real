export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { emailDuo, nombreInvitador, uidInvitador } = req.body;

    if (!emailDuo || !uidInvitador) {
      return res.status(400).json({ error: 'Faltan parametros' });
    }

    const baseUrl = process.env.APP_BASE_URL || 'https://peso-real-xi.vercel.app';
    const linkInvitacion = baseUrl + '/app.html?duo_invite=' + encodeURIComponent(uidInvitador);

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: 'Peso Real', email: 'no-reply@pesoreal.app' },
        to: [{ email: emailDuo }],
        subject: (nombreInvitador || 'Alguien') + ' te invito a Peso Real Duo',
        htmlContent: `
          <div style="background:#0a0b0d;color:#f0f0f0;font-family:sans-serif;padding:40px 24px;max-width:480px;margin:0 auto;border-radius:16px">
            <div style="font-size:28px;font-weight:700;color:#d4f060;margin-bottom:8px">Peso Real</div>
            <div style="font-size:16px;color:#9a9a9a;margin-bottom:32px">Finanzas que entienden el peso argentino</div>
            <div style="font-size:18px;font-weight:600;margin-bottom:12px">
              ${nombreInvitador || 'Un usuario'} te invito al Plan Duo
            </div>
            <div style="font-size:14px;color:#9a9a9a;line-height:1.7;margin-bottom:28px">
              Con Peso Real Duo van a poder ver su poder adquisitivo real, registrar el IBF semanal y llevar juntos la memoria de precios del hogar.<br><br>
              Tu acceso premium esta activado automaticamente.
            </div>
            <a href="${linkInvitacion}" style="display:block;background:#d4f060;color:#0a0b0d;text-decoration:none;text-align:center;font-weight:700;font-size:15px;padding:16px 24px;border-radius:12px;margin-bottom:24px">
              Activar mi acceso Duo
            </a>
            <div style="font-size:12px;color:#555;text-align:center;line-height:1.6">
              Si no esperabas este email, podes ignorarlo.<br>
              Peso Real - Finanzas argentinas reales.
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Brevo error:', err);
      return res.status(500).json({ error: 'Error al enviar el email' });
    }

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error('duo-invite error:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
