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
- Reglas Firestore: cada usuario solo lee/escribe sus propios datos; `beta_users` lectura pública; `duo_invites` lectura/escritura por email autenticado

### Mercado Pago
- `api/mp-create.js` — crea preferencia de pago en MP Checkout Pro (Premium + Duo)
- `api/mp-webhook.js` — recibe notificación de pago aprobado → activa premium en Firestore; para Duo guarda invitación en `duo_invites`
- Planes: Premium $7.000 ARS/mes · Duo $12.000 ARS/mes
- En sandbox (`sandbox_init_point`). Para producción: cambiar a `init_point` + token `APP_USR-` (bloqueado hasta inscripción en monotributo)
- `esPremium()` lee `state.premium.activo` desde Firestore en tiempo real

### Plan Duo
- Modal en teaser: ingreso de email del segundo usuario
- `api/duo-invite.js` — envía email de invitación via Brevo al segundo usuario
- Segundo usuario activa su acceso entrando a `app.html?duo_invite={uidInvitador}`
- **Confirmado por revisión de código:** hoy son dos cuentas 100% independientes (Firestore docs separados). Solo se comparte el acceso Premium — nada de Sueldo, Movimientos o Compras se comparte entre los dos usuarios.
- **Limpieza de feature falsa:** existía un selector "Compartir / Separada" (canasta de compras) en el modal de invitación que no hacía nada funcional — se guardaba en una variable nunca usada. Se sacó todo (HTML, función, variable), junto con el texto de marketing "canasta compartida opcional". Queda como feature real de V3 cuando se construya.

### Beta privada
- `beta.html` — landing de registro/login para betatesters
- Colección `beta_users` en Firestore — colección raíz, ID = email en minúsculas
- **Lección aprendida:** `beta_users` debe ser colección raíz, no anidada dentro de `usuarios`

### PWA
- `sw.js` — nunca cachea `.html` (garantiza actualizaciones inmediatas en todos los dispositivos)
- Instalable desde Safari en iPhone y Chrome en Android. Chrome en iOS no soporta PWA (limitación de Apple)

### Onboarding — reordenado (5 pasos)
1. Bienvenida
2. Sueldo (actual, de referencia, mes de referencia, moneda)
3. Hábito de ahorro
4. **Presenta el IBF** — chequeo semanal liviano, sin cargar gastos
5. **Presenta Movimientos** — explícitamente como capa opcional para quien quiera más control
- El orden importa: IBF se presenta antes que Movimientos, por pedido explícito de Estrategia.
- Ya no pregunta presupuesto manual (se eliminó, ver módulo de Movimientos).

### Pilar 1 — Verdad financiera
- **Sueldo real (pantalla propia):** sueldo ARS + USD al TC MEP, poder adquisitivo real vs IPC INDEC, línea de tiempo, métricas y mensaje emocional por IA
- **Sueldo editable con selector de mes:** modal con desplegable de los últimos 12 meses. Si el mes elegido ya tiene sueldo cargado, se autocompleta para poder corregirlo.
  - Si el mes elegido es el **mes real actual**, también actualiza el "sueldo vigente" (usado para poder adquisitivo)
  - Si es un **mes pasado**, solo actualiza ese movimiento puntual, sin tocar el sueldo vigente de hoy
  - **Checkbox "no sumar al balance"** (solo visible en meses pasados): permite cargar un sueldo histórico como referencia sin inflar el balance de ese mes viejo
- El dashboard principal **no** muestra la card grande de poder adquisitivo — queda un indicador chico bajo "Sueldo ARS", el detalle completo vive en la pantalla Sueldo

### Ingresos y egresos (Movimientos)
- Pantalla propia, accesible desde nav inferior y desde la card "Balance del mes" del dashboard
- Carga de movimientos: tipo, categoría, concepto, monto, fecha
- Categorías egreso: comida, transporte, entretenimiento, salud, educación, servicios, otros
- Categorías ingreso: extra, otro (sueldo se sincroniza solo, no se carga a mano)
- Balance del mes = ingresos − egresos = "tu presupuesto disponible este mes" (reemplaza al presupuesto manual eliminado del onboarding)
- **Presupuesto de gasto (meta opcional):** límite de gasto mensual definido por el usuario, con barra de progreso. Valor único persistente, no por mes
- **Navegación entre meses:** flechitas ‹ › para revisar meses anteriores (no deja ir al futuro). Se resetea al mes actual al reentrar a la pantalla
- **Desglose por categoría colapsable:** botón con flecha, cerrado por defecto
- **Gastos fijos:** plantillas de gastos recurrentes (alquiler, luz, etc). Banner ámbar avisa pendientes del mes; se cargan en bloque con checkboxes + montos editables
- **Decisión de arquitectura:** `state.movimientos[]` y `state.gastosFijos[]` dentro del mismo doc `usuarios/{uid}`, no subcolecciones separadas (simplicidad; revisar si el volumen crece mucho)
- **Gap conocido:** los movimientos manuales (no-sueldo) solo se pueden borrar y recargar, no editar directamente — inconsistente con el sueldo, que sí tiene edición completa

### Pilar 2 — Bienestar financiero
- IBF semanal (5 preguntas, score 0-100)
- Comparación con pares: los 3 recuadros (Promedio / Tu grupo / Percentil) tienen la misma estructura de 3 líneas (etiqueta / valor / subtexto) — fix de alineación aplicado
- Historial IBF + tab historial emocional, sin cambios

### Pilar 3 — Memoria de compras
- Sin cambios recientes. Pendiente a futuro: carga masiva de compra que combine el registro de productos con el egreso de dinero en un solo paso

### Asistente financiero (Premium)
- Reencuadrado como **asistente de economía familiar**
- Contexto: sueldo, poder adquisitivo, balance de ingresos/egresos del mes, categorías con más gasto, presupuesto de gasto definido (si existe), IBF, canasta de compras

### UX / Responsive
- Bottom nav: 7 ítems (Inicio, Sueldo, Bienestar, Movimientos, Compras, Asistente, Historial)
- **Desktop:** el layout mobile se centra en pantallas grandes (max-width 500px, con borde y sombra tipo "frame de app") en vez de estirarse a todo el ancho

## Lecciones aprendidas (importante para no repetir)

1. **Bug crítico de sintaxis:** un `font-family:'DM Sans'` con comillas simples sin escapar dentro de un string JS ya delimitado por comillas simples rompía **todo el script de la app**, no solo una pantalla. Cuidado con anidar comillas del mismo tipo en strings armados a mano.
2. **Cascada CSS y media queries:** un media query nuevo agregado *antes* en el archivo puede perder contra una regla vieja sin media query que aparece *después* — con igual especificidad gana la última en orden de aparición. Los overrides de escritorio están al final del `<style>` a propósito.
3. **`mesActual()` vs `mesRealActual()`:** `mesActual()` existe para cálculos de inflación y hace *fallback* al último mes del IPC cargado si el mes real todavía no tiene dato. Todo lo que no dependa de inflación (Movimientos, sueldo por mes) debe usar `mesRealActual()`, que siempre devuelve el mes calendario real. Mezclar estas dos funciones causó bugs reales.
4. **Validación previa a cada entrega:** siempre correr `node --check` sobre el script extraído + verificar que todos los IDs/funciones referenciados existen sin duplicados. Nunca se probó en navegador real — queda pendiente que Adrián lo haga en cada entrega.

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
**v0.3.2** — beta cerrada. Movimientos completo (gastos fijos, presupuesto de gasto, navegación de meses), sueldo editable con selector de mes, reset de contraseña, Duo limpio de funcionalidad falsa, onboarding reordenado (IBF antes que Movimientos)

## Deuda técnica
- **IPC hardcodeado y desactualizado** — actualizar con datos recientes de INDEC. Máxima prioridad: ya se demostró que afecta funcionalidad, no solo precisión
- Comparación con pares simulada — conectar Firebase cuando haya 50+ usuarios
- Nombre de app en pantalla de redirección de MP no aparece (cosmético)
- Presupuesto de gasto es un valor único persistente, no por mes
- **Filtros de Movimientos** por tipo + rango de fechas custom, con memoria permanente — pedido explícito de Adrián, no construido. Hoy solo existe navegación mes a mes
- **Editar movimientos manuales** (no-sueldo): hoy solo se pueden borrar y recargar
- **Exportar datos** (CSV/PDF): no existe ninguna forma de sacar información de la app
- **Borrar cuenta / derecho al olvido:** no hay flujo de borrado de cuenta y datos — puede ser requisito de tiendas de apps (Google Play) para apps financieras
- **Recordatorios push reales:** la app no tiene infraestructura de push (sin VAPID, sin FCM, sin backend). Proyecto de infraestructura aparte, necesita decisión de Adrián
- **Compartir datos en Plan Duo:** arquitectura actual no comparte nada entre las 2 cuentas. Si se construye la funcionalidad real (V3), es una decisión de arquitectura de datos que merece su propia conversación

## Próximas construcciones
- Editar movimientos manuales
- Exportar datos y borrar cuenta (antes del lanzamiento público)
- Filtros de Movimientos por tipo + rango de fechas custom, con memoria permanente
- Carga masiva de compra: combinar el registro de producto (Pilar 3) con el egreso de dinero (Ingresos y egresos)
- Notas de parche — badge en nav + modal de novedades (pendiente texto del chat de Estrategia)
- Pasar MP a producción cuando se resuelva el bloqueo fiscal (monotributo)
- PWA Google Play / TWA (V3)
- IPC dinámico automático (V3)
- Compartir datos en Plan Duo (V3, si se decide construir)

## Estado actual
Sesión larga con foco en Movimientos (gastos fijos, presupuesto de gasto, navegación de meses, desglose colapsable), sueldo editable con selector de mes, reset de contraseña, limpieza de Plan Duo (copy y feature falsa removidos), y reorden del onboarding (IBF antes que Movimientos, por pedido de Estrategia). Se identificaron 3 gaps nuevos en revisión: editar movimientos manuales, exportar datos, y borrar cuenta. Todo validado solo estáticamente (sintaxis + integridad de IDs/funciones), sin pruebas en navegador real.

## Tareas pendientes
1. Adrián: hacer QA completo en navegador real de todo lo acumulado (sueldo, movimientos, onboarding, auth)
2. Actualizar IPC con datos recientes de INDEC — máxima prioridad técnica
3. Decidir y construir: editar movimientos manuales, exportar datos, borrar cuenta (los dos últimos especialmente antes del lanzamiento público)
4. Construir filtros de Movimientos por tipo + rango de fechas custom con memoria permanente
5. Decidir con Adrián si vale invertir en infraestructura de push para recordatorios reales
6. Recibir texto de notas de parche del chat de Estrategia → implementar badge + modal
7. Cuando haya ingresos: pasar MP a producción + activar monotributo
