# master_contexto.md — Peso Real
*Generado automáticamente. No editar manualmente.*
*Última actualización: Julio 2026*

---

## 🚦 Estado general

| Área | Estado |
|------|--------|
| Producto | ✅ V2 completa — beta cerrada activa |
| Fiscal | 🔴 Bloqueado — contador no consultado |
| Marketing | 🟡 Twitter activo, julio pendiente de cargar en Typefully |
| Ingresos | 🔴 $0 — MP en sandbox, producción bloqueada por fiscal |

---

## 🔴 Bloqueadores activos

1. **Contador no consultado** — desbloquea toda la cadena fiscal para poder cobrar
2. **Monotributo no tramitado** — sin esto no se puede activar MP producción
3. **Punto de venta AFIP no tramitado** — necesario para facturación electrónica tipo C
4. **Mercado Pago en sandbox** — no se puede cobrar hasta resolver monotributo + PV
5. **IPC hardcodeado y desactualizado** — afecta funcionalidad core del producto (no solo precisión)

---

## 📌 Últimas decisiones tomadas

- **Lema oficial definido** *(jul 2026):* *"Empezás sin anotar nada. Avanzás tanto como querás."*
- **Plan Duo congelado en marketing** *(jul 2026):* código completo pero no se comunica ni vende hasta validar producto para 1 persona
- **Canasta compartida removida del código** *(jul 2026):* era funcionalidad falsa — copy y selector eliminados; queda para V3
- **Posicionamiento resuelto** *(jul 2026):* IBF = piso sin fricción; Movimientos = techo opcional; son un funnel de engagement, no una contradicción
- **Dashboard reorganizado** *(jul 2026):* Movimientos como protagonista, poder adquisitivo como sección secundaria
- **Onboarding reordenado** *(jul 2026):* IBF se presenta antes que Movimientos — 5 pasos, presupuesto manual eliminado

---

## 🔨 Construcción

**Estado:** v0.3.2 — beta cerrada. Sesión larga completada: Movimientos completo (gastos fijos, presupuesto de gasto, navegación de meses), sueldo editable con selector de mes, reset de contraseña, limpieza de Duo, onboarding reordenado. Validado solo estáticamente — **QA en navegador real pendiente.**

**Próxima tarea:** Actualizar IPC con datos recientes de INDEC (máxima prioridad técnica — afecta funcionalidad, no solo precisión)

**Deuda técnica (máx 3 items):**
- IPC hardcodeado y desactualizado — INDEC datos nuevos requeridos
- Editar movimientos manuales (hoy solo se borran y recargan — inconsistente con sueldo)
- Exportar datos (CSV/PDF) y borrar cuenta — obligatorios antes del lanzamiento público

**Pendiente bloqueado:** Pasar MP a producción — espera resolución fiscal (monotributo + PV AFIP)

---

## 🎯 Estrategia

**Estado:** Producto validado internamente. Beta cerrada activa. Foco total en 1 persona antes de escalar Plan Duo. Invitaciones a primeros betatesters pendientes de envío.

**Señales a observar en beta:**
- Retención semanal (¿vuelven al IBF?)
- Completitud IBF semana a semana
- Carga espontánea de Movimientos
- Momentos de fricción detectados

**Pendientes estratégicos:**
- Enviar invitaciones beta a primeros 5 contactos
- Esperar 2-3 semanas de uso antes de activar cuestionario de feedback (8 preguntas, Google Forms)
- Definir criterio formal de lanzamiento público (implícito: retención satisfactoria + cobro habilitado)
- Términos y condiciones formales antes de cobrar (formato mínimo no definido)

---

## 📣 Marketing

**Twitter (@PesoRealAR):** Activo. Junio cargado completo (posts #1–#20 + hilos #1–#4). Julio (40 posts + 4 hilos, PDF listo) **pendiente de cargar en Typefully** antes de fin de junio.

**Reddit:** Post activo en r/AskArgentina. Sábado de Clasificados de r/argentina pendiente (age-gated — requiere antigüedad de cuenta; esperando que abra el thread).

**Email:** Brevo capturando emails desde calculadora pública — funcional.

**Próxima acción urgente:** Cargar contenido de julio en Typefully (schedulear 6–31 julio, lunes a viernes) — no dejar días sin contenido.

---

## 💰 Finanzas

**MRR actual:** $0 (pre-revenue, beta sin cobro)

**Costos actuales:** ~$0/mes (Vercel Free, Firebase Free, Brevo Free, Anthropic ~USD 0.50 solo pruebas). Break-even: 1 usuario premium cubre meses de costos de API.

**Precios:** Premium ARS 7.000/mes · Duo ARS 12.000/mes (congelado en marketing) · Revisión anual en enero por IPC acumulado.

**Cadena fiscal pendiente (en orden):**
1. Consultar contador — confirmar monotributo, actividad, categoría estimada, dos proyectos o uno
2. Completar perfil Mercado Pago con CUIT y datos bancarios reales
3. Inscribirse en monotributo online (AFIP) — actividad: "Servicios de tecnología de la información"
4. Tramitar punto de venta AFIP (junto con monotributo, ~1-2 semanas)
5. Activar Mercado Pago en producción (cambiar `sandbox_init_point` → `init_point` + token `APP_USR-`)
6. Test transaccional con usuario beta real antes de promocionar públicamente

---

## 🗂️ Archivos de referencia

| Archivo | Contenido |
|---------|-----------|
| `estado_actual.md` | Resumen operativo general del proyecto |
| `construccion.md` | Stack, features construidas, deuda técnica, lecciones |
| `estrategia.md` | Producto, roadmap, modelo de negocio, beta |
| `marketing.md` | Canales, copies, calendario de contenido |
| `finanzas.md` | Costos, proyecciones, guía fiscal |
| `master_contexto.md` | Este archivo — sincronización entre chats |

---

## 👤 Instrucción por chat

| Chat | Instrucción |
|------|-------------|
| **Construcción** | Usá `construccion.md` como contexto principal. Solo código, deploys, bugs, features. No estrategia ni marketing. |
| **Estrategia** | Usá `estrategia.md` como contexto principal. Solo decisiones de producto, roadmap, pricing, pivots. No código ni campañas. |
| **Marketing** | Usá `marketing.md` como contexto principal. Solo canales, copies, contenido, comunidades. No código ni decisiones de producto. |
| **Finanzas** | Usá `finanzas.md` como contexto principal. Solo costos, ingresos, fiscal, monotributo. No código ni producto. |
| **Sincronización** | Usá los 4 archivos fuente para regenerar `master_contexto.md`. Seguir estructura y reglas estrictas del prompt. |