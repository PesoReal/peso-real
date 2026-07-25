# Peso Real — Construcción
*Última actualización: Julio 2026*

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
- Diseño: DM Sans (pesos 300–700), verde lima `#d4f060` sobre negro `#0a0b0d`
- Vercel env vars: `ANTHROPIC_API_KEY`, `MP_ACCESS_TOKEN`, `APP_BASE_URL`, `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, `BREVO_API_KEY`

## Protocolo de trabajo
- Claude genera archivos → Adrián copia en GitHub (lápiz → Ctrl+A → pegar → Commit) → Vercel autodeploy
- Carpeta `api/` en GitHub para Vercel Functions
- Nunca usar caracteres especiales sin escapar en JS: comillas simples/dobles anidadas rompen el parser (ver Lecciones aprendidas)

## Lo que está construido

### Auth
- Firebase Auth: email/contraseña + Google
- Firestore: colección `usuarios/{uid}` con todos los datos del usuario, incluyendo movimientos (ver más abajo)
- Sync en tiempo real multi-dispositivo vía `saveState()`
- Migración automática desde localStorage al crear cuenta
- Pantalla de confirmación de sesión activa ("Continuar como [nombre]" / "Usar otra cuenta")
- Reset de contraseña: no hay flujo "olvidé mi contraseña" dentro de la app todavía — se hace manualmente desde Firebase Console (Authentication → Users → ⋮ → Restablecer contraseña)
- Reglas Firestore: cada usuario solo lee/escribe sus propios datos; `beta_users` lectura pública; `duo_invites` lectura/escritura por email autenticado

### Mercado Pago
- `api/mp-create.js` — crea preferencia de pago en MP Checkout Pro (Premium + Duo)
- `api/mp-webhook.js` — recibe notificación de pago aprobado → activa premium en Firestore; para Duo guarda invitación en `duo_invites`
- Planes: Premium $7.000 ARS/mes · Duo $12.000 ARS/mes
- En sandbox (`sandbox_init_point`). Para producción: cambiar a `init_point` + token `APP_USR-` (bloqueado hasta inscripción en monotributo)
- `esPremium()` lee `state.premium.activo` desde Firestore en tiempo real

### Plan Duo
- Modal en teaser: ingreso de email del segundo usuario + elección de canasta (compartida/separada)
- `api/duo-invite.js` — envía email de invitación via Brevo al segundo usuario
- Segundo usuario activa su acceso entrando a `app.html?duo_invite={uidInvitador}`

### Beta privada
- `beta.html` — landing de registro/login para betatesters
- Colección `beta_users` en Firestore — colección raíz, ID = email en minúsculas
- **Lección aprendida:** `beta_users` debe ser colección raíz, no anidada dentro de `usuarios`

### PWA
- `sw.js` — nunca cachea `.html` (garantiza actualizaciones inmediatas en todos los dispositivos)
- Instalable desde Safari en iPhone y Chrome en Android. Chrome en iOS no soporta PWA (limitación de Apple)

### Pilar 1 — Verdad financiera
- **Sueldo real (pantalla propia, ya no en el dashboard principal):** sueldo ARS + USD al TC MEP, poder adquisitivo real vs IPC INDEC, línea de tiempo (6 puntos), métricas y mensaje emocional por IA
- **Sueldo editable mes a mes:** botón "Actualizar sueldo de este mes" en la pantalla Sueldo. Antes solo se cargaba una vez en el onboarding y no había forma de actualizarlo — ahora sí, y cada actualización recalcula la variación real automáticamente
- El dashboard principal ya **no** muestra la card grande de poder adquisitivo — quedó solo un indicador chico ("+X% poder adquisitivo") bajo el mini-card de Sueldo ARS, que lleva a la pantalla de Sueldo para el detalle completo
- Presupuesto ajustado por IPC (el campo manual del onboarding) fue **eliminado** — ver módulo de Ingresos y egresos

### Ingresos y egresos (módulo nuevo)
- Pantalla propia (`screen-movimientos`), accesible desde el nav inferior y desde la card "Balance del mes" del dashboard
- Carga de movimientos: tipo (ingreso/egreso), categoría, concepto, monto, fecha
- Categorías egreso: comida, transporte, entretenimiento, salud, educación, servicios, otros
- Categorías ingreso: extra, otro (la categoría "sueldo" fue sacada del alta manual — ver siguiente punto)
- **Sueldo sincronizado automáticamente:** cada vez que se actualiza el sueldo en la pantalla Sueldo (o al abrir el dashboard por primera vez con el sueldo del onboarding), se refleja como un ingreso automático del mes en curso en Movimientos, sin duplicarse. En la lista aparece marcado "sincronizado desde Sueldo" y no tiene botón de eliminar ahí
- Balance del mes = ingresos − egresos = se muestra explícitamente como "tu presupuesto disponible este mes" (reemplaza al viejo presupuesto ajustado manual)
- Desglose por categoría de egresos con barras de porcentaje
- **Presupuesto de gasto (meta opcional):** el usuario puede definir un límite de gasto para el mes (ej: cobra $1.000.000, quiere ahorrar $250.000 → pone $750.000 de presupuesto). Se muestra barra de progreso, % usado, y cuánto resta o cuánto se excedió. Es un valor único persistente (no se resetea solo cada mes, el usuario lo ajusta cuando quiere)
- **Decisión de arquitectura:** los movimientos se guardan como array `state.movimientos[]` dentro del mismo doc `usuarios/{uid}` (mismo mecanismo de sync que el resto del state), no como subcolección Firestore separada. Se eligió así por simplicidad; si el volumen de movimientos crece mucho, evaluar migrar a subcolección `usuarios/{uid}/movimientos/{id}`

### Pilar 2 — Bienestar financiero
- IBF semanal (5 preguntas, score 0-100), sin cambios esta sesión
- Historial IBF + tab historial emocional, sin cambios

### Pilar 3 — Memoria de compras
- Sin cambios esta sesión. Pendiente a futuro: carga masiva de compra que combine el registro de productos con el egreso de dinero en un solo paso (ver Próximas construcciones)

### Asistente financiero (Premium)
- Reencuadrado como **asistente de economía familiar**, no solo calculadora de sueldo vs inflación
- Contexto ampliado: ahora recibe también el balance de ingresos/egresos del mes, las categorías con más gasto, y el presupuesto de gasto definido (si existe)

### UX / Responsive
- Bottom nav: 7 ítems (Inicio, Sueldo, Bienestar, Movimientos, Compras, Asistente, Historial)
- **Desktop:** el layout mobile ahora se centra en pantallas grandes (max-width 500px, con borde y sombra tipo "frame de app") en vez de estirarse a todo el ancho. Aplica a `#app`, `#bottom-nav` y los modales de fondo completo

## Lecciones aprendidas esta sesión (importante para no repetir)

1. **Bug crítico de sintaxis ya corregido:** había un `font-family:'DM Sans'` con comillas simples sin escapar dentro de un string JS ya delimitado por comillas simples (botón "Anterior" del cuestionario IBF). Esto rompía **todo el script de la app**, no solo esa pantalla — un error de sintaxis tira abajo el `<script>` completo. Cuidado con anidar comillas del mismo tipo en strings armados a mano.
2. **Cascada CSS y media queries:** un media query nuevo agregado *antes* en el archivo puede perder contra una regla vieja sin media query que aparece *después*, aunque el media query matchee — con igual especificidad gana la última en orden de aparición. Los overrides de escritorio ahora están al final del `<style>` a propósito.
3. **`mesActual()` vs `mesRealActual()`:** `mesActual()` existe para cálculos de inflación y hace *fallback* al último mes del IPC cargado si el mes real todavía no tiene dato — esto es correcto para inflación, pero causaba que Movimientos mostrara un mes viejo y que los egresos/ingresos cargados con fecha de hoy no aparecieran en el balance (no matcheaban el mes filtrado). Se creó `mesRealActual()`, que siempre devuelve el mes calendario real sin depender del IPC, y se usa en todo lo relacionado a Movimientos. **Regla general: todo lo que no dependa de inflación debe usar `mesRealActual()`, no `mesActual()`.**

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
**v0.3.0** — beta cerrada, con módulo de Ingresos y egresos

## Deuda técnica
- **IPC hardcodeado y desactualizado** (por eso apareció el bug de "mes fijo" documentado arriba) — actualizar con datos recientes de INDEC es urgente, no solo por precisión sino porque ahora sabemos que afecta funcionalidad de otras secciones
- Comparación con pares simulada — conectar Firebase cuando haya 50+ usuarios
- Nombre de app en pantalla de redirección de MP no aparece (cosmético)
- Presupuesto de gasto es un valor único persistente, no por mes — si el usuario quiere una meta distinta cada mes tiene que cambiarlo a mano

## Próximas construcciones
- Carga masiva de compra: combinar el registro de producto (Pilar 3) con el egreso de dinero (Ingresos y egresos) en un solo flujo
- Notas de parche — badge en nav + modal de novedades (pendiente texto del chat de Estrategia)
- Pasar MP a producción cuando se resuelva el bloqueo fiscal (monotributo)
- PWA Google Play / TWA (V3)
- IPC dinámico automático (V3)

## Estado actual
M�dulo de Ingresos y egresos completo y funcional (pendiente de que Adrián confirme el flujo end-to-end tras el fix del bug de fecha/mes). Bug crítico de sintaxis corregido. Responsive de escritorio corregido. Sueldo ahora editable mes a mes y sincronizado con Movimientos. Presupuesto manual del onboarding eliminado, reemplazado por balance derivado + meta de gasto opcional.

## Tareas pendientes
1. Adrián: probar en producción que los movimientos cargados con fecha de hoy aparecen correctamente en el balance (bug recién corregido)
2. Actualizar IPC con datos recientes de INDEC — ahora es más urgente porque afecta más que solo el cálculo de inflación
3. Recibir texto de notas de parche del chat de Estrategia → implementar badge + modal
4. Cuando haya ingresos: pasar MP a producción + activar monotributo
5. Evaluar con Adrián si el presupuesto de gasto debería ser por mes en vez de un valor único persistente
