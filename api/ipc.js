export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const response = await fetch(
      'https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELGENERAL_DICI_M_26&limit=60&sort=asc&format=json',
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching IPC data' });
  }
}
