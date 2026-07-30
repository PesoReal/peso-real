```markdown
# master_contexto.md — Peso Real
*Generado automáticamente. No editar manualmente.*
*Última actualización: Julio 2026*

## 🚦 Estado general

| Área | Estado |
|------|--------|
| Producto | ✅ V2 completa — beta cerrada activa |
| Fiscal | 🔴 Bloqueado — contador no consultado |
| Marketing | 🟡 Twitter activo, julio pendiente de cargar en Typefully |
| Ingresos | 🔴 $0 — MP en sandbox, producción bloqueada por fiscal |

---

## 🔴 Bloqueadores activos

1. **Contador no consultado** — desbloquea toda la cadena fiscal (monotributo → PV AFIP → MP producción → cobro real)
2. **Mercado Pago en sandbox** — no se puede cobrar hasta inscripción en monotributo + punto de venta AFIP
3. **Gap crítico de cancelación de suscripción MP** — no existe endpoint para cancelar preapproval desde la app; "Borrar cuenta" avisa pero no cancela cobros automáticos (riesgo de contracargos al escalar)
4. **Invitaciones beta no enviadas** — primeros betatesters aún sin acceso real; señales de retención/fricción sin datos todavía
5. **Regla Firestore `beta_users` sin `allow delete`** — borrar cuenta deja email huérfano en la colección (derecho al olvido incompleto)

---

## 📌 Últimas decisiones tomadas

- **Julio 2026** — Lema oficial: *"Empezás sin anotar nada. Avanzás tanto como querás."*
- **Julio 2026** — Plan Duo congelado en marketing hasta validar producto para 1 persona
- **Julio 2026** — Posicionamiento resuelto: IBF = piso sin fricción, Movimientos = techo opcional; son funnel de engagement, no contradicción
- **Julio 2026** — Dashboard reorganizado: Movimientos como protagonista, poder adquisitivo como sección secundaria
- **Julio 2026** — V0.4.0 lanzada: IPC corregido de raíz, exportar CSV/PDF, borrar cuenta, editar movimientos, filtros con memoria permanente
- **Julio 2026** — Canasta compartida del Duo no existe en el código — copy removido; decisión de arquitectura postergada a V3

---

## 🔨 Construcción

**Estado:** v0.4.0 en producción. Beta cerrada activa. QA en navegador de las últimas features pendiente de Adrián.

**Próxima tarea:** Resolver gap de cancelación de suscripción en Mercado Pago (máxima prioridad antes de escalar usuarios) + actualizar regla Firestore `beta_users` con `allow delete` en Firebase Console.

**Deuda técnica (top 3):**
1. No existe endpoint para cancelar suscripción/preapproval de MP — riesgo de cobros a usuarios que borraron cuenta
2. Presupuesto de gasto es valor único persistente, no por mes
3. `state.movimientos[]` y `state.gastosFijos[]` en mismo documento Firestore, no subcolecciones — revisar si el volumen crece

**Pendiente bloqueado:** Pasar MP a producción — bloqueado por cadena fiscal (contador → monotributo → PV AFIP)

---

## 🎯 Estrategia

**Estado:** Producto validado técnicamente, beta cerrada iniciando. Sin señales de comportamiento real todavía — las 4 métricas a observar (retención semanal, completitud IBF, carga de Movimientos, momentos de fricción) no tienen datos porque las invitaciones no se enviaron.

**Señales de beta a observar:**
- Retención semanal (¿vuelven a hacer el IBF?)
- Completitud del IBF (¿terminan las 5 preguntas?)
- Adopción de Movimientos (¿cargan egresos o solo usan el piso?)
- Momentos de fricción (¿dónde se caen?)

**Pendientes estratégicos:**
1. Enviar invitaciones a primeros 5 betatesters
2. Actualizar onboarding: IBF como primer paso, Movimientos como capa opcional explícita
3. Definir criterio formal de lanzamiento público (implícito: retención satisfactoria + cobro habilitado)
4. Términos y condiciones formales — obligatorios antes de cobrar

---

## 📣 Marketing

**Twitter (@PesoRealAR):** Activo. Junio completo cargado y publicando. Julio (40 posts + 4 hilos, 6-31 julio) listo en PDF, pendiente cargar en Typefully — hacerlo antes de que termine junio.

**Reddit:** Post activo en r/AskArgentina. Sábado de Clasificados de r/argentina pendiente (cuenta age-gated, requiere antigüedad — bloqueador parcial).

**Email/Brevo:** Captura funcional desde calculadora pública.

**Próxima acción urgente:** Cargar posts de julio en Typefully antes del 30 de junio para no quedarse sin contenido programado.

---

## 💰 Finanzas

**MRR actual:** $0 (pre-revenue, beta gratuita)

**Costos:** ~$0/mes (todos en planes gratuitos). API Anthropic ~USD 0.50 solo en pruebas. Break-even: 1 usuario Premium ya cubre meses de costo de API.

**Precios:** Premium ARS 7.000/mes · Duo ARS 12.000/mes (congelado en marketing). Revisión anual en enero por IPC acumulado.

**Cadena fiscal pendiente (en orden, todo bloqueado):**
1. Consultar contador — confirmar monotributo, actividad, categoría estimada
2. Completar perfil de Mercado Pago con CUIT y datos bancarios reales
3. Inscripción en monotributo online (AFIP)
4. Tramitar punto de venta para facturas tipo C (junto con monotributo)
5. Activar Mercado Pago en producción (una vez MP detecte monotributo)
6. Test transaccional con usuario beta real antes de promocionar públicamente

---

## 🗂️ Archivos de referencia

| Archivo | Contenido |
|---------|-----------|
| `estado_actual.md` | Resumen operativo general, completado, pendientes, riesgos |
| `construccion.md` | Stack, features, deuda técnica, lecciones aprendidas |
| `estrategia.md` | Producto, modelo de negocio, roadmap, decisiones |
| `marketing.md` | Canales, copies, calendario de contenido, métricas |
| `finanzas.md` | Costos, proyecciones, cadena fiscal, monotributo |
| `master_contexto.md` | Este archivo — sincronización entre chats |

---

## 👤 Instrucción por chat

| Chat | Instrucción |
|------|-------------|
| **Construcción** | Solo código, features, bugs, deploys. Empezar con: "Soy el chat de Construcción de Peso Real v0.4.0." Leer sección 🔨 y deuda técnica. |
| **Estrategia** | Solo producto, roadmap, pricing, pivots. Empezar con: "Soy el chat de Estrategia de Peso Real." Leer sección 🎯 y decisiones recientes. |
| **Marketing** | Solo canales, copies, contenido, comunidades. Empezar con: "Soy el chat de Marketing de Peso Real." Leer sección 📣 y estado de canales. |
| **Finanzas** | Solo costos, ingresos, fiscal, monotributo. Empezar con: "Soy el chat de Finanzas de Peso Real." Leer sección 💰 y cadena fiscal. |
```