# Peso Real — Construcción
*Última actualización: Mayo 2026*

## Contexto de este chat
Este chat es exclusivamente para construcción técnica: vibecoding, archivos, deploys, bugs, nuevas features. No se discute estrategia ni marketing acá.

## URLs
- **App PWA:** https://peso-real-xi.vercel.app/app.html
- **Calculadora pública:** https://peso-real-xi.vercel.app/
- **Repositorio:** github.com/PesoReal/peso-real

## Stack técnico
- HTML/CSS/JS estático — un solo archivo `app.html`
- Firebase Auth + Firestore (sync multi-dispositivo, southamerica-east1)
- Vercel Functions: `api/chat.js` (asistente IA) + `api/ipc.js` (proxy IPC INDEC)
- Anthropic API: modelo `claude-sonnet-4-5`
- Fuentes: Outfit (texto) + Fraunces (títulos/números)
- Vercel env var: `ANTHROPIC_API_KEY`
- Google Analytics: G-JTF9Q7FY5K

## Protocolo de trabajo
- Claude genera archivos `.txt` → Adrián copia en GitHub (lápiz → Ctrl+A → pegar → Commit) → Vercel autodeploy
- Carpeta `api/` en GitHub para Vercel Functions (chat.js, ipc.js)
- Nunca usar caracteres especiales en JS: — " " ' ' (rompen el parser)

## Lo que está construido

### Auth
- Firebase Auth: email/contraseña + Google
- Firestore: colección `usuarios/{uid}` con todos los datos
- Sync en tiempo real multi-dispositivo
- Migración automática desde localStorage al crear cuenta
- Reglas Firestore: cada usuario solo lee/escribe sus propios datos

### Pilar 1 — Verdad financiera
- Dashboard: sueldo ARS + USD al TC MEP (dolarapi.com, caché 1h)
- Poder adquisitivo real vs IPC INDEC (proxy /api/ipc)
- Línea de tiempo (6 puntos cada 2 meses) con equivalente real
- Métricas: inflación total, variación real, peor momento / máximo
- Presupuesto ajustado mensual con delta IPC
- Mensajes emocionales (24 variantes)

### Pilar 2 — Bienestar financiero
- IBF semanal (5 preguntas, score 0-100)
- Landing con lógica de días + emergentes inline
- Acción semanal generada por IA (via /api/chat)
- Comparación anónima con pares (743 usuarios simulados)
- Historial IBF + tab historial emocional (captura respuesta Q4)
- Editor de registros IBF

### Pilar 3 — Memoria de compras
- Catálogo 258 productos en 15 categorías
- Modal 2 pasos con productos propios "MIO" primero
- Detalle por producto: sparkline, métricas, historial editable
- Alertas cuando producto sube >150% del IPC del rubro
- Canasta personalizada: "Tu inflación real" vs IPC oficial

### Asistente financiero
- Chat con system prompt completo (sueldo, IBF, canasta, perfil, contexto AR)
- Backend: /api/chat → Anthropic API (claude-sonnet-4-5)
- `const tieneAcceso = true` — cambiar a `esPremium` cuando active Mercado Pago

### Perfil
- Nombre, edad, ocupación, provincia, situación familiar
- Avatar con inicial en dashboard
- Saludo personalizado según hora

### UX
- Botón `?` contextual en todas las pantallas
- Edición de productos, precios e IBF
- Logo completo + isotipo integrados (verde #d4f060, fondo #0a0b0d)
- Favicon + PWA icons (icon-192.png, icon-512.png)

### Calculadora pública (index.html)
- IPC hardcodeado 2022-2026
- Captura emails via Brevo (sibforms.com)
- Logo 128px arriba, 72px abajo

## Deuda técnica
- IPC hardcodeado hasta 2026-03 — actualizar cuando INDEC publique abril 2026
- Comparación con pares simulada — conectar Firebase cuando haya 50+ usuarios
- `tieneAcceso = true` en asistente — cambiar a `esPremium` cuando active Mercado Pago

## Próximas construcciones
- Mercado Pago (plan Premium USD 5/mes)
- Plan familiar hasta 4 personas (V3)
- PWA Google Play / TWA (V3)
- IPC dinámico automático (V3)
