# master_contexto.md — Peso Real
*Generado automáticamente. No editar manualmente.*
*Última actualización: Julio 2026*

---

## 🚦 Estado general

| Área | Estado |
|------|--------|
| Producto | ✅ V2 completa — beta cerrada activa |
| Fiscal | 🔴 Bloqueado — monotributo no tramitado |
| Marketing | 🟡 Twitter activo, Julio pendiente cargar en Typefully |
| Ingresos | 🔴 $0 — MP en sandbox, producción bloqueada por fiscal |

---

## 🔴 Bloqueadores activos

1. **Contador no consultado** — desbloquea toda la cadena fiscal (monotributo → PV AFIP → MP producción)
2. **Monotributo no inscripto** — no se puede cobrar un peso sin estar inscripto antes del primer ingreso
3. **Mercado Pago en sandbox** — no puede recibir pagos reales hasta resolver fiscal
4. **Gap crítico MP:** no existe endpoint para cancelar suscripción/preapproval — si el modelo es recurrente, un usuario que borra su cuenta puede seguir siendo cobrado
5. **Reddit age-gated** — cuenta requiere antigüedad para postear en r/argentina Clasificados

---

## 📌 Últimas decisiones tomadas

- **Lema oficial definido** *(Julio 2026):* *"Empezás sin anotar nada. Avanzás tanto como querás."*
- **Plan Duo congelado en marketing** *(Julio 2026):* código funcional pero no se comunica ni vende hasta validar producto para 1 persona
- **Posicionamiento resuelto** *(Julio 2026):* IBF = piso sin fricción, Movimientos = techo opcional — son un funnel de engagement, no una contradicción
- **Dashboard reorganizado** *(Julio 2026):* Movimientos como protagonista, poder adquisitivo como sección secundaria
- **Bug IPC corregido de raíz** *(Julio 2026):* endpoint `api/ipc.js` tenía ID de serie mal escrito desde el lanzamiento — corregido y fallback hardcodeado verificado contra INDEC
- **Figma descartado** *(Julio 2026):* diseño con Claude Design, flujo brief → iteración → implementación en app.html

---

## 🔨 Construcción

**Estado:** v0.4.0 — beta cerrada. Features de cierre de deuda técnica completas. Pendiente QA en navegador real por Adrián.

**Próxima tarea:** Resolver gap de cancelación de suscripción en Mercado Pago (máxima prioridad antes de escalar usuarios) + actualizar regla Firestore de `beta_users` (agregar `allow delete` scoped por email en Firebase Console)

**Deuda técnica prioritaria:**
- ⚠️ Cancelación de suscripción MP: no existe endpoint — riesgo de cobros a cuentas borradas
- Regla Firestore `beta_users` sin permiso `delete` — borrar cuenta deja email huérfano (derecho al olvido incompleto)
- Presupuesto de gasto es valor único global, no por mes

**Pendiente bloqueado:** Pasar MP a producción — bloqueado por fiscal (monotributo)

---

## 🎯 Estrategia

**Estado:** Producto validado internamente. Beta cerrada iniciada. Esperando señales de uso real antes de decisiones de roadmap.

**Señales a observar en beta:**
- Retención semanal (IBF completado semana a semana)
- Completitud IBF (llegan a las 5 preguntas)
- Carga de Movimientos (adopción de la capa opcional)
- Momentos de fricción (dónde se cae el usuario)

**Pendientes estratégicos:**
- Actualizar onboarding: IBF como primer paso, Movimientos como capa disponible cuando el usuario quiera más
- Iniciar rediseño estético con Claude Design (empezar por dashboard de Movimientos)
- Definir criterio formal de lanzamiento público (implícito: retención beta satisfactoria + cobro habilitado)
- Términos y condiciones formales antes de cobrar (formato mínimo no definido)

---

## 📣 Marketing

**Twitter @PesoRealAR:** ✅ Activo — Junio completo publicando (posts #1-#20 + hilos #1-#4). Julio (40 posts + 4 hilos, 6-31 julio) listo en PDF, pendiente cargar en Typefully.

**Reddit:** Post activo en r/AskArgentina. Sábado de Clasificados r/argentina pendiente (cuenta age-gated).

**Email/Brevo:** Captura activa desde calculadora pública. Google Analytics activo (G-JTF9Q7FY5K).

**Próxima acción urgente:** Cargar contenido de Julio en Typefully (PESO_REAL_JULIO_2026.pdf) antes de que termine Junio para no dejar la cuenta sin publicaciones.

---

## 💰 Finanzas

**MRR actual:** $0 (pre-revenue, beta con acceso premium gratuito)

**Costos actuales:** ~$0/mes (Vercel, Firebase, Brevo en free tier — Anthropic API ~USD 0.50 solo pruebas)

**Proyección:** 20 usuarios Premium = ARS 140.000 MRR. Break-even: 1 usuario Premium ya cubre meses de costo API.

**Cadena fiscal pendiente (en orden):**
1. Consultar contador (llevar: descripción Peso Real + SaaS monotributistas + situación de dependencia)
2. Completar perfil de Mercado Pago con CUIT y datos bancarios reales
3. Inscribirse en monotributo online (AFIP.gob.ar — actividad: Servicios de tecnología de la información)
4. Tramitar punto de venta en AFIP (junto con monotributo — factura tipo C)
5. Activar Mercado Pago en producción (cambiar `sandbox_init_point` → `init_point` + token `APP_USR-`)
6. Test transaccional con usuario beta real antes de promocionar públicamente

---

## 🗂️ Archivos de referencia

| Archivo | Contenido |
|---------|-----------|
| `estado_actual.md` | Resumen ejecutivo, completado, pendiente, riesgos |
| `construccion.md` | Stack, features construidas, deuda técnica, lecciones aprendidas |
| `estrategia.md` | Producto, modelo de negocio, roadmap, decisiones |
| `marketing.md` | Canales, copies, calendario de contenido |
| `finanzas.md` | Costos, proyecciones, guía fiscal |
| `master_contexto.md` | Este archivo — sincronización entre chats |

---

## 👤 Instrucción por chat

| Chat | Instrucción de inicio |
|------|-----------------------|
| **Construcción** | "Leé construccion.md. Somos el chat técnico de Peso Real. Contexto general en master_contexto.md." |
| **Estrategia** | "Leé estrategia.md. Somos el chat de producto y roadmap de Peso Real. Contexto general en master_contexto.md." |
| **Marketing** | "Leé marketing.md. Somos el chat de canales y contenido de Peso Real. Contexto general en master_contexto.md." |
| **Finanzas** | "Leé finanzas.md. Somos el chat de finanzas y fiscal de Peso Real. Contexto general en master_contexto.md." |