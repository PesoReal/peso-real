# master_contexto.md — Peso Real
*Generado automáticamente. No editar manualmente.*
*Última actualización: Julio 2026*

---

## 🚦 Estado general

| Área | Estado |
|------|--------|
| Producto | ✅ V2 completa y en producción — beta cerrada activa |
| Fiscal | 🔴 Bloqueado — monotributo no iniciado, contador no consultado |
| Marketing | 🟡 Twitter activo (junio live), julio pendiente cargar en Typefully |
| Ingresos | 🔴 $0 MRR — MP en sandbox, producción bloqueada por fiscal |

---

## 🔴 Bloqueadores activos

1. **Contador no consultado** — desbloquea toda la cadena fiscal y el cobro
2. **Monotributo no inscripto** — sin esto no se puede cobrar legalmente ni activar MP producción
3. **Punto de venta AFIP no tramitado** — necesario para facturación electrónica tipo C
4. **Mercado Pago en sandbox** — solo pasa a producción post-monotributo y PV
5. **IPC hardcodeado y desactualizado** — afecta cálculos centrales del producto (sueldo real, poder adquisitivo)

---

## 📌 Últimas decisiones tomadas

- **Lema oficial definido** *(julio 2026):* *"Empezás sin anotar nada. Avanzás tanto como querás."*
- **Plan Duo congelado en marketing** *(julio 2026):* código funcional pero no se comunica ni vende hasta validar producto para 1 persona
- **Canasta compartida removida del copy** — no existe en el código, va a V3
- **Dashboard reorganizado** *(julio 2026):* Movimientos como protagonista, poder adquisitivo como sección secundaria con indicador chico
- **Sueldo editable mes a mes** *(julio 2026):* selector de mes en modal; corregir mes pasado no toca el sueldo vigente
- **Posicionamiento resuelto:** IBF = piso sin fricción / Movimientos = techo opcional — funnel de engagement, no contradicción

---

## 🔨 Construcción

**Estado:** v0.3.1 — beta cerrada. Módulo de Movimientos con navegación entre meses y desglose colapsable. Sueldo con selector de mes editable. Ajustes de UI en Bienestar (3 recuadros alineados).

**Próxima tarea:** Filtros de Movimientos por tipo (ingreso/egreso) + rango de fechas custom con memoria permanente — pedido explícito pendiente de construcción.

**Deuda técnica (máx 3):**
1. IPC hardcodeado y desactualizado — urgente, afecta features centrales
2. Filtros de Movimientos (tipo + fechas custom con memoria) — no construidos todavía
3. Presupuesto de gasto es un valor único persistente, no por mes — evaluar con Adrián

**Pendiente bloqueado:** Pasar Mercado Pago a producción — bloqueado hasta resolución fiscal. Una vez desbloqueado: cambiar `sandbox_init_point` → `init_point` + token `APP_USR-` en código.

---

## 🎯 Estrategia

**Estado:** Beta cerrada activa. Invitaciones a primeros betatesters pendientes de envío. Onboarding desactualizado (no comunica los dos niveles de uso).

**Señales a observar en beta:**
- Retención semanal (¿vuelven a hacer el IBF?)
- Completitud del IBF (¿terminan las 5 preguntas?)
- Carga de Movimientos (¿adoptan la capa opcional?)
- Momentos de fricción (¿dónde abandonan?)

**Pendientes estratégicos:**
1. Actualizar onboarding: IBF primero, Movimientos disponible cuando el usuario quiera más
2. Definir criterio formal de lanzamiento público (implícito: retención beta satisfactoria + cobro habilitado)
3. Términos y condiciones formales antes de cobrar
4. Lanzamiento público post-beta: Reddit + Twitter con lema actualizado

---

## 📣 Marketing

**Twitter (@PesoRealAR):** Activo. Junio completo cargado y publicando (posts #1–#20, hilos #1–#4). Julio (40 posts + 4 hilos, 6–31 jul lunes a viernes) listo en PDF — **pendiente cargar en Typefully antes de que termine junio.**

**Reddit:** Post activo en r/AskArgentina. Sábado de Clasificados de r/argentina pendiente cuando se abra el thread. Canal age-gated — requiere antigüedad de cuenta.

**Email (Brevo):** Captura desde calculadora pública funcional. Google Analytics G-JTF9Q7FY5K activo.

**Próxima acción urgente:** Cargar posts de julio en Typefully (schedulear 6–31 julio, lunes a viernes) antes de que finalice junio.

---

## 💰 Finanzas

**MRR actual:** $0 (pre-revenue, beta sin cobro)

**Costos actuales:** ~$0/mes (todos en planes gratuitos — Vercel, Firebase, Brevo, Analytics). Anthropic API ~USD 0.50/mes solo pruebas.

**Proyección:** 1 usuario Premium (ARS 7.000/mes) ya cubre meses de costos de API. Break-even operacional es inmediato al cobrar.

**Cadena fiscal pendiente (en orden):**
1. Consultar contador — llevar descripción de ambos proyectos + situación de dependencia laboral
2. Completar perfil de Mercado Pago con CUIT y datos bancarios reales
3. Inscribirse en monotributo online (AFIP) — actividad: servicios de tecnología de la información
4. Tramitar punto de venta AFIP (facturación electrónica tipo C)
5. Activar Mercado Pago en producción (una vez MP detecte monotributo)
6. Test transaccional con usuario beta real antes de lanzamiento público

⚠️ **Crítico:** no cobrar un peso sin estar inscripto en monotributo.

---

## 🗂️ Archivos de referencia

| Archivo | Contenido |
|---------|-----------|
| `estado_actual.md` | Documento operativo general — fuente de verdad |
| `construccion.md` | Stack, features construidas, deuda técnica, lecciones aprendidas |
| `estrategia.md` | Producto, roadmap, modelo de negocio, beta |
| `marketing.md` | Canales, copies, calendario de contenido |
| `finanzas.md` | Costos, proyecciones, guía fiscal |
| `master_contexto.md` | Este archivo — sincronización entre chats |

---

## 👤 Instrucción por chat

| Chat | Instrucción |
|------|-------------|
| **Construcción** | Solo código, bugs, features, deploys. No estrategia ni marketing. Archivos fuente: `construccion.md` + `master_contexto.md` |
| **Estrategia** | Solo decisiones de producto, roadmap, pricing, pivots. No código ni campañas. Archivos fuente: `estrategia.md` + `master_contexto.md` |
| **Marketing** | Solo canales, copies, contenido, comunidades. No código ni decisiones de producto. Archivos fuente: `marketing.md` + `master_contexto.md` |
| **Finanzas** | Solo costos, MRR, fiscal, monotributo. No código ni producto. Archivos fuente: `finanzas.md` + `master_contexto.md` |