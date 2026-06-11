# Peso Real — Construcción
*Última actualización: Junio 2026*

## Contexto de este chat
Este chat es exclusivamente para construcción técnica: vibecoding, archivos, deploys, bugs, nuevas features. No se discute estrategia ni marketing acá.

## URLs
- **App PWA:** https://peso-real-xi.vercel.app/app.html
- **Calculadora pública:** https://peso-real-xi.vercel.app/
- **Beta:** https://peso-real-xi.vercel.app/beta.html
- **Repositorio:** github.com/PesoReal/peso-real

## Stack técnico
- HTML/CSS/JS estático — un solo archivo `app.html`
- Firebase Auth + Firestore (sync multi-dispositivo, southamerica-east1)
- Vercel Functions: `api/chat.js` + `api/ipc.js` + `api/mp-create.js` + `api/mp-webhook.js` + `api/duo-invite.js`
- Anthropic API: modelo `claude-sonnet-4-5`
- Fuente: DM Sans (pesos 300/400/500/600/700) — Google Fonts
- Vercel env vars: `ANTHROPIC_API_KEY`, `MP_ACCESS_TOKEN`, `APP_BASE_URL`, `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, `BREVO_API_KEY`
- Google Analytics: G-JTF9Q7FY5K

## Protocolo de trabajo
- Claude genera archivos → Adrián copia en GitHub (lápiz → Ctrl+A → pegar → Commit) → Vercel autodeploy
- Carpeta `api/` en GitHub para Vercel Functions
- Nunca usar caracteres especiales en JS: — " " ' ' (rompen el parser)

## Lo que está construido

### Auth
- Firebase Auth: email/contraseña + Google
- Firestore: colección `usuarios/{uid}` con todos los datos
- Sync en tiempo real multi-dispositivo
- Migración automática desde localStorage al crear cuenta
- Pantalla de confirmación de sesión activa ("Continuar como [nombre]" / "Usar otra cuenta")
- Reglas Firestore: cada usuario solo lee/escribe sus propios datos; `beta_users` lectura pública; `duo_invites` lectura/escritura por email autenticado

### Mercado Pago
- `api/mp-create.js` — crea preferencia de pago en MP Checkout Pro (Premium + Duo)
- `api/mp-webhook.js` — recibe notificación de pago aprobado → activa premium en Firestore; para Duo guarda invitación en `duo_invites`
- Planes: Premium ARS 7.000/mes · Duo ARS 12.000/mes (2 personas)
- En sandbox (`sandbox_init_point`). Para producción: cambiar a `init_point` + token `APP_USR-`
- `esPremium()` lee `state.premium.activo` desde Firestore en tiempo real
- Badge de plan en pantalla de perfil + toast de bienvenida al activar

### Plan Duo
- Máximo 2 personas (parejas, hermanos, amigos — no plan familiar)
- Modal en teaser: ingreso de email del segundo usuario + elección de canasta (compartida/separada)
- `api/duo-invite.js` — envía email de invitación via Brevo al segundo usuario
- Segundo usuario activa su acceso entrando a `app.html?duo_invite={uidInvitador}`
- `activarInvitadoDuo()` lee colección `duo_invites`, activa premium y marca invitación como aceptada
- Toast "Plan Duo activado" para el invitado

### Beta privada
- `beta.html` — landing de registro/login para betatesters
- Colección `beta_users` en Firestore — colección raíz, ID = email en minúsculas
- Al registrarse chequea `beta_users` → activa `premium.activo: true` + `beta: true`
- Desactivación: borrar colección `beta_users` desde Firestore
- **Lección aprendida:** `beta_users` debe ser colección raíz, no anidada dentro de `usuarios`

### PWA
- `manifest.json` — sin cambios
- `sw.js` — nunca cachea `.html` (garantiza actualizaciones inmediatas en todos los dispositivos); cachea solo iconos y manifest
- Instalable desde Safari en iPhone y Chrome en Android
- Chrome en iOS no soporta PWA (limitación de Apple)

### Open Graph / Twitter Cards
- Meta tags OG y Twitter en `index.html` y `app.html`
- `og-image.png` (1200x630) en raíz del repo
- Verificado con Twitter Card Validator

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
- Historial IBF + tab historial emocional
- Editor de registros IBF

### Pilar 3 — Memoria de compras
- Catálogo 258 productos en 15 categorías
- Modal 2 pasos con productos propios "MIO" primero
- Detalle por producto: sparkline, métricas, historial editable
- Alertas cuando producto sube >150% del IPC del rubro
- Canasta personalizada: "Tu inflación real" vs IPC oficial

### Asistente financiero (Premium)
- Chat con system prompt completo
- Backend: /api/chat → Anthropic API (claude-sonnet-4-5)
- `enterkeyhint="send"` → teclado mobile muestra botón Enviar
- Input se limpia y mantiene foco después de enviar
- Acceso controlado por `esPremium()`
- Flag `asistenteInicializado` evita doble mensaje de bienvenida

### Perfil
- Nombre, edad, ocupación, provincia, situación familiar
- Avatar con inicial en dashboard
- Saludo personalizado según hora
- Badge de plan (Premium / Duo / Beta / gratuito)

### UX
- Bottom nav `position: fixed` — siempre visible por encima de las pantallas
- Pantallas con `padding-bottom: 70px` para no quedar tapadas por el nav
- Botón `?` contextual en todas las pantallas
- Logo completo + isotipo integrados
- Favicon + PWA icons

### Calculadora pública (index.html)
- IPC hardcodeado 2021-2026
- Input tipo `text` con formato argentino (punto miles, coma decimal, max 8 dígitos)
- En mobile: input y botón en columna
- Brevo: fetch directo con `mode: no-cors` (sin script externo)
- OG tags configurados

## Reglas Firestore actuales
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /usuarios/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /beta_users/{email} {
      allow read: if true;
    }
    match /duo_invites/{email} {
      allow read, write: if request.auth != null && request.auth.token.email == email;
    }
  }
}
```

## Versión actual
**v0.2.0** — beta cerrada

## Deuda técnica
- IPC hardcodeado hasta 2026-03 — actualizar con datos recientes de INDEC
- Comparación con pares simulada — conectar Firebase cuando haya 50+ usuarios
- Nombre de app en pantalla de redirección de MP no aparece (cosmético)

## Próximas construcciones
- **Notas de parche** — badge en nav + modal de novedades (pendiente texto del chat de Estrategia)
- Pasar MP a producción cuando llegue setup fiscal (contador + monotributo + PV AFIP)
- PWA Google Play / TWA (V3)
- IPC dinámico automático (V3)

## Estado actual
Todo en producción. Beta cerrada activa. PWA funcionando. SW actualizado para garantizar deploys inmediatos en todos los dispositivos. Fuente migrada a DM Sans en app.html e index.html.

## Tareas pendientes
1. Recibir texto de notas de parche del chat de Estrategia → implementar badge + modal
2. Actualizar IPC con datos recientes de INDEC
3. Cuando llegue setup fiscal: pasar MP a producción + activar monotributo
