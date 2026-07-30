# Peso Real — Construcción
*Última actualización: Julio 2026 (sesión IPC + exportar + borrar cuenta + editar movimientos + filtros)*

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
- Librería externa nueva: `jsPDF` (cdnjs), cargada bajo demanda solo al exportar PDF — no pesa en la carga inicial
- Vercel env vars: `ANTHROPIC_API_KEY`, `MP_ACCESS_TOKEN`, `APP_BASE_URL`, `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, `BREVO_API_KEY`

## Protocolo de trabajo
- Claude genera el `app.html` completo → Adrián copia en GitHub (lápiz → Ctrl+A → pegar → Commit) → Vercel autodeploy. Nunca diffs parciales.
- Carpeta `api/` en GitHub para Vercel Functions
- Nunca usar caracteres especiales sin escapar en JS: comillas simples/dobles anidadas rompen el parser (ver Lecciones aprendidas)

## Lo que está construido

### Auth
- Firebase Auth: email/contraseña + Google
- Firestore: colección `usuarios/{uid}` con todos los datos del usuario, incluyendo movimientos y gastos fijos
- Sync en tiempo real multi-dispositivo vía `saveState()`
- Migración automática desde localStorage al crear cuenta
- Pantalla de confirmación de sesión activa ("Continuar como [nombre]" / "Usar otra cuenta")
- **Reset de contraseña:** link "¿Olvidaste tu contraseña?" en el login, abre modal, usa `sendPasswordResetEmail` de Firebase Auth nativo
- **Borrar cuenta (NUEVO):** en Mi perfil, debajo de "Cerrar sesión". Flujo: explica qué se borra → reautenticación obligatoria (contraseña si es cuenta email, popup de Google si es cuenta Google — lo exige Firebase Auth para operaciones sensibles) → hay que escribir "BORRAR" para habilitar el botón → borra `usuarios/{uid}`, intenta borrar `beta_users/{email}` y `duo_invites/{email}` (best-effort, ver Deuda técnica), borra el usuario de Firebase Auth, limpia estado local y vuelve al login. Si el usuario tiene Premium activo, muestra aviso de que cancelar acá no cancela un cobro automático en Mercado Pago.
- Reglas Firestore: cada usuario solo lee/escribe sus propios datos; `beta_users` lectura pública; `duo_invites` lectura/escritura por email autenticado

### Mercado Pago
- `api/mp-create.js` — crea preferencia de pago en MP Checkout Pro (Premium + Duo)
- `api/mp-webhook.js` — recibe notificación de pago aprobado → activa premium en Firestore; para Duo guarda invitación en `duo_invites`
- Planes: Premium $7.000 ARS/mes · Duo $12.000 ARS/mes
- En sandbox (`sandbox_init_point`). Para producción: cambiar a `init_point` + token `APP_USR-` (bloqueado hasta inscripción en monotributo)
- `esPremium()` lee `state.premium.activo` desde Firestore en tiempo real
- **⚠️ GAP CRÍTICO (ver Tareas pendientes #1):** no existe ningún endpoint ni flujo para cancelar una suscripción/preapproval de Mercado Pago desde la app. "Borrar cuenta" no cancela el cobro automático si existe uno — se lo advertimos al usuario en el modal, pero es una advertencia, no una solución.

### Plan Duo
- Modal en teaser: ingreso de email del segundo usuario
- `api/duo-invite.js` — envía email de invitación via Brevo al segundo usuario
- Segundo usuario activa su acceso entrando a `app.html?duo_invite={uidInvitador}`
- **Confirmado por revisión de código:** hoy son dos cuentas 100% independientes (Firestore docs separados). Solo se comparte el acceso Premium — nada de Sueldo, Movimientos o Compras se comparte entre los dos usuarios.
- Limpio de la feature falsa de "canasta compartida" (HTML, función, variable y copy removidos en sesión anterior)

### Beta privada
- `beta.html` — landing de registro/login para betatesters
- Colección `beta_users` en Firestore — colección raíz, ID = email en minúsculas
- **Lección aprendida:** `beta_users` debe ser colección raíz, no anidada dentro de `usuarios`

### PWA
- `sw.js` — nunca cachea `.html` (garantiza actualizaciones inmediatas en todos los dispositivos)
- Instalable desde Safari en iPhone y Chrome en Android. Chrome en iOS no soporta PWA (limitación de Apple)

### Onboarding
- 5 pasos: Bienvenida → Sueldo → Hábito de ahorro → IBF (chequeo semanal liviano, sin cargar gastos) → Movimientos (presentado explícitamente como capa opcional)
- **Validado en navegador real esta sesión** (cuenta de prueba con truco `email+test@gmail.com`): orden correcto, sin pasos de más, sin menciones adelantadas fuera de orden. Sin novedades.

### Pilar 1 — Verdad financiera
- **Sueldo real (pantalla propia):** sueldo ARS + USD al TC MEP, poder adquisitivo real vs IPC INDEC, línea de tiempo, métricas y mensaje emocional por IA
- **Sueldo editable con selector de mes:** modal con desplegable de los últimos 12 meses, autocompleta si ya hay dato, checkbox "no sumar al balance" para meses pasados
- **IPC — bug de raíz corregido esta sesión (ver Lecciones aprendidas):** el endpoint `api/ipc.js` pedía un ID de serie inexistente en la API de datos.gob.ar (`148.3_INIVELGENERAL_DICI_M_26` en vez de `148.3_INIVELNAL_DICI_M_26`). Devolvía 400 en silencio y la app vivía 100% del fallback hardcodeado, que además tenía enero, febrero y abril de 2026 cargados mal (a mano, mal). Corregido el ID de la serie y los valores hardcodeados (verificados 1 a 1 contra los índices oficiales de INDEC vía la API). La app ahora trae dato real en cada carga; julio se completa solo apenas INDEC lo publique (~13-15 de agosto).
- El dashboard principal no muestra la card grande de poder adquisitivo — indicador chico bajo "Sueldo ARS", detalle completo en la pantalla Sueldo

### Ingresos y egresos (Movimientos)
- Carga de movimientos: tipo, categoría, concepto, monto, fecha. Balance del mes = ingresos − egresos
- **Presupuesto de gasto (meta opcional)** con barra de progreso
- **Navegación entre meses** con flechitas ‹ ›, se resetea al mes actual al reentrar
- **Desglose por categoría** colapsable
- **Gastos fijos:** plantillas recurrentes, banner ámbar de pendientes, carga en bloque
- **Editar movimientos manuales (NUEVO):** cada fila de la lista (salvo las sincronizadas desde Sueldo) es tappeable y abre el mismo modal de alta en modo edición, con botón "Eliminar movimiento" adentro. Al editar un movimiento que vino de un gasto fijo, se preservan `origen`/`fijoId` para no romper el tracking de pendientes del mes.
- **Exportar datos — CSV y PDF (NUEVO):** botón "Exportar datos" en Movimientos. Elegís "Este mes" o "Todo el historial". CSV con separador `;` y formato `es-AR` (estándar Excel Argentina), con BOM UTF-8. PDF con `jsPDF` cargado bajo demanda, formato blanco/negro pensado para imprimir o mandarle al contador (no el estilo neón de la app), paginado, con resumen de totales. Cubre solo Movimientos (incluye sueldo porque se sincroniza como movimiento) — no incluye IBF ni compras todavía.
- **Filtros de Movimientos — tipo + rango de fechas, con memoria permanente (NUEVO):** botón "Filtrar" junto al título de la lista. Filtro por tipo (Todos/Ingresos/Egresos) queda atado al mes navegado. Si además se define un rango de fechas, la lista deja de seguir la navegación mes a mes y muestra resultados de todo el historial que caigan en ese rango (balance/desglose/presupuesto de arriba siguen siendo del mes navegado, sin filtrar — son la verdad del mes). Selección guardada en `state.filtrosMovimientos`, persiste entre sesiones.
- **Bug corregido — formato de montos en inputs precargados (NUEVO, ver Lecciones aprendidas):** afectaba edición de sueldo, gasto fijo y presupuesto de gasto.
- **Gap conocido sin resolver:** `state.movimientos[]` y `state.gastosFijos[]` en el mismo doc `usuarios/{uid}`, no subcolecciones (revisar si el volumen crece mucho)

### Pilar 2 — Bienestar financiero
- IBF semanal (5 preguntas, score 0-100), sin cambios esta sesión
- Comparación con pares: fix de alineación de sesión anterior, sin novedades

### Pilar 3 — Memoria de compras
- Sin cambios recientes

### Asistente financiero (Premium)
- Sin cambios esta sesión

### UX / Responsive
- Bottom nav: 7 ítems. Desktop: layout mobile centrado (max-width 500px, frame de app)

## Lecciones aprendidas (importante para no repetir)

1. **Bug crítico de sintaxis (sesión anterior):** comillas simples anidadas sin escapar en `font-family:'DM Sans'` rompía todo el script de la app.
2. **Cascada CSS y media queries:** un media query agregado antes en el archivo puede perder contra una regla vieja sin media query que aparece después. Overrides de escritorio van al final del `<style>` a propósito.
3. **`mesActual()` vs `mesRealActual()`:** todo lo que no dependa de inflación (Movimientos, sueldo por mes) debe usar `mesRealActual()`.
4. **Validación previa a cada entrega:** `node --check` sobre TODOS los bloques `<script>` del archivo — incluido el bloque `type="module"` de Firebase, que necesita `node --check` en modo módulo (`.mjs`) porque usa `import`/`export`. Verificar también que todos los IDs/funciones referenciados existen sin duplicados.
5. **NUEVO — Un endpoint que falla en silencio es peor que uno que no existe:** `api/ipc.js` tenía un typo en el ID de serie de la API de datos.gob.ar desde el lanzamiento. El `try/catch` de `actualizarIPC()` absorbía el error 400 con un simple `console.log`, así que nadie lo notó — la app funcionaba "bien" mostrando datos viejos/incorrectos sin ningún síntoma visible. Cuando construyamos Soporte/Bugs, vale la pena pensar un chequeo de salud básico para las Vercel Functions críticas en vez de fallar callado.
6. **NUEVO — Precargar un input formateado no es lo mismo que dejarlo vacío:** cualquier input de monto que se precarga con un valor existente (`.value = numero`) necesita pasar por el mismo formateador que corre cuando el usuario tipea (separador de miles, coma decimal), o si no: se ve mal, y peor, si el valor tenía decimales el `parseMonto()` posterior los interpreta mal (confunde el punto decimal de JS con el separador de miles) y multiplica el monto por mil. Se armó `formatMontoParaInput()` como helper único para todos los casos de precarga (sueldo, gasto fijo, presupuesto). Si se agrega un input de monto nuevo con precarga en el futuro, usar esta función.
7. **NUEVO — Al editar, preservar campos que no se muestran en el form:** el modal de editar movimiento solo expone tipo/categoría/concepto/monto/fecha, pero un movimiento puede tener `origen` y `fijoId` (si vino de un gasto fijo) o `excluidoBalance` (si es sueldo histórico). Al guardar una edición hay que mergear sobre el objeto existente, no reconstruirlo desde cero, o se pierden esos campos y se rompe lógica downstream (en este caso, el tracking de "pendientes del mes" en gastos fijos).

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

### ⚠️ Cambio de reglas pendiente (Firebase Console, NO es parte del repo de GitHub)
Para que "Borrar cuenta" pueda limpiar también la entrada en `beta_users` (hoy solo tiene `allow read: if true`, sin `write`, así que el intento de borrado falla por permisos y queda absorbido en silencio por el `try/catch`), agregar en Firebase Console → Firestore → Reglas:
```
match /beta_users/{email} {
  allow read: if true;
  allow delete: if request.auth != null && request.auth.token.email == email;
}
```
Mismo patrón que ya se usa en `duo_invites`. Sin este cambio, "borrar cuenta" borra todos los datos financieros pero el email queda huérfano en `beta_users` — derecho al olvido incompleto.

## Versión actual
**v0.4.0** — beta cerrada. Suma sobre v0.3.2: IPC corregido de raíz (endpoint + fallback), fix de formato en inputs de monto precargados, exportar movimientos (CSV/PDF), borrar cuenta con reautenticación, editar movimientos manuales, filtros de movimientos por tipo + rango de fechas con memoria permanente. Onboarding validado en navegador real.

## Deuda técnica
- Comparación con pares simulada — conectar Firebase cuando haya 50+ usuarios
- Nombre de app en pantalla de redirección de MP no aparece (cosmético)
- Presupuesto de gasto es un valor único persistente, no por mes
- **Exportar datos** cubre solo Movimientos — no incluye historial de IBF ni compras (evaluar si algún usuario lo pide para el contador)
- **Cancelación de suscripción de Mercado Pago:** no existe endpoint. Ver Tareas pendientes #1 — es el más importante de toda esta lista
- **Regla de Firestore de `beta_users`** sin permiso de `delete` — ver sección de arriba
- **Recordatorios push reales:** sin infraestructura (sin VAPID, sin FCM, sin backend). Proyecto aparte, necesita decisión de Adrián
- **Compartir datos en Plan Duo:** arquitectura actual no comparte nada entre las 2 cuentas (V3, si se decide construir)
- `state.movimientos[]` y `state.gastosFijos[]` en el mismo doc, no subcolecciones — revisar si el volumen crece

## Próximas construcciones
- Resolver el gap de Mercado Pago (cancelación de suscripción) — máxima prioridad, ver Tareas pendientes #1
- Actualizar reglas de Firestore de `beta_users` en Firebase Console
- Carga masiva de compra: combinar registro de producto (Pilar 3) con egreso de dinero (Movimientos)
- Notas de parche — badge en nav + modal de novedades (pendiente texto del chat de Estrategia)
- Pasar MP a producción cuando se resuelva el bloqueo fiscal (monotributo)
- PWA Google Play / TWA (V3)
- IPC dinámico automático — YA RESUELTO esta sesión, sacar de la lista de V3
- Compartir datos en Plan Duo (V3, si se decide construir)

## Estado actual
Sesión enfocada en cerrar deuda técnica bloqueante para el lanzamiento público. Se corrigió un bug de raíz en el endpoint de IPC (ID de serie mal escrito desde el lanzamiento, nunca detectado porque fallaba en silencio) y se actualizaron los valores hardcodeados de fallback. Se encontró y corrigió un bug de formato en todos los inputs de monto que precargan un valor existente (sueldo, gasto fijo, presupuesto), que además podía corromper montos con decimales al guardarlos de nuevo. Se construyeron las tres features que faltaban de la lista original de deuda técnica: exportar datos (CSV/PDF), borrar cuenta (con reautenticación obligatoria por seguridad de Firebase), editar movimientos manuales, y filtros de movimientos por tipo + rango de fechas con memoria permanente. Onboarding validado end-to-end en navegador real con una cuenta de prueba nueva. Todo validado con `node --check` sobre ambos bloques de script (módulo Firebase + script principal) e integridad de IDs/funciones antes de cada entrega — falta que Adrián haga el QA en navegador real de lo construido hoy (exportar, borrar cuenta, editar movimientos, filtros).

## Tareas pendientes
1. **🔴 URGENTE — Mercado Pago: no hay forma de cancelar una suscripción/preapproval desde la app.** "Borrar cuenta" avisa al usuario pero no cancela ningún cobro automático en MP. Si el modelo de cobro actual es recurrente (hay que confirmar esto con el chat de Finanzas o revisando cómo está armado `api/mp-create.js` en el dashboard de Mercado Pago), esto puede generar cobros a usuarios que ya borraron la cuenta — riesgo de reclamos, contracargos, y problema serio de confianza antes de un lanzamiento público. Resolver antes de escalar la base de usuarios.
2. Adrián: QA en navegador real de lo construido hoy — exportar CSV/PDF, borrar cuenta (¡ojo, es irreversible, probar con la cuenta de prueba `+test`, no con la cuenta real!), editar movimientos manuales, filtros con rango de fechas
3. Actualizar reglas de Firestore de `beta_users` en Firebase Console (agregar `allow delete` scoped por email, ver sección de Reglas Firestore)
4. Confirmar con Adrián/Finanzas si Premium en Mercado Pago es suscripción recurrente o pago único mensual manual — esto determina qué tan grave es el punto 1
5. Cuando haya ingresos: pasar MP a producción + activar monotributo
6. Evaluar si vale la pena sumar IBF y compras al exportador de datos
