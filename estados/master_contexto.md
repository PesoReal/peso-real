# master_contexto.md — Peso Real
*Generado automáticamente. No editar manualmente.*
*Última actualización: Julio 2026*

---

## 🚦 Estado general

| Área | Estado |
|------|--------|
| Producto | 🟡 V2 activa — módulo ingresos/egresos construido, beta cerrada en curso |
| Fiscal | 🔴 Bloqueado — monotributo no iniciado, contador no consultado |
| Marketing | 🟢 Twitter activo, julio preparado, Reddit parcialmente activo |
| Ingresos | 🔴 MRR $0 — Mercado Pago en sandbox, producción bloqueada por fiscal |

---

## 🔴 Bloqueadores activos

1. **Contador no consultado** — desbloquea toda la cadena fiscal; sin esto no se puede cobrar
2. **Monotributo no inscripto** — obligatorio antes de cobrar el primer peso (AFIP)
3. **Punto de venta AFIP no tramitado** — necesario para facturación electrónica tipo C
4. **Mercado Pago en sandbox** — no se puede activar producción sin monotributo + PV
5. **Reddit age-gated** — cuenta sin antigüedad suficiente para publicar en r/argentina Clasificados

---

## 📌 Últimas decisiones tomadas

- **Reenfoque de producto aprobado** (jul 2026): Peso Real evoluciona de app de poder adquisitivo a gestor financiero personal contextualizado para Argentina
- **Dashboard de poder adquisitivo** pasa a sección secundaria; ya no es el protagonista del producto
- **Módulo de ingresos/egresos construido** (jul 2026): navegación entre meses, sueldo sincronizado automáticamente, presupuesto de gasto opcional, desglose colapsable por categoría
- **Sueldo con selector de mes** (jul 2026): permite corregir meses anteriores sin afectar el sueldo vigente
- **Integración bancaria descartada para V2**: se valida primero la carga manual
- **Plan Familiar descartado**: reemplazado por Plan Duo (máx. 2 personas, ARS 12.000/mes)

---

## 🔨 Construcción

**Estado:** v0.3.1 — beta cerrada activa. Módulo de ingresos/egresos completo con navegación mensual y desglose colapsable. Sueldo editable por mes. UI de Bienestar alineada.

**Próxima tarea:** Filtros de Movimientos por tipo (ingreso/egreso) + rango de fechas custom con memoria permanente de la selección (pedido explícito de Adrián, no construido aún)

**Deuda técnica (máx 3):**
1. **IPC hardcodeado y desactualizado** — urgente, afecta cálculos centrales de inflación
2. Presupuesto de gasto es valor único persistente, no por mes — evaluar cambio con Adrián
3. Comparación con pares simulada — conectar Firebase real cuando haya 50+ usuarios

**Pendiente bloqueado:** Pasar Mercado Pago a producción — bloqueado por cadena fiscal

---

## 🎯 Estrategia

**Estado:** Reenfoque de producto aprobado. Beta cerrada activa con 5-15 contactos conocidos con acceso premium gratuito. Invitaciones pendientes de envío.

**Señales de beta a observar:**
- Retorno semanal sin empuje externo
- Completitud del IBF semanal
- Carga real de productos en la canasta
- Momento de fricción / abandono

**Pendientes estratégicos:**
1. Definir criterio de cierre de beta (¿cuánto feedback es suficiente?)
2. Actualizar pitch y discurso de venta — el diferencial "sin cargar gastos" cambia con el módulo de egresos
3. Notas de parche: definir texto → pasar a Construcción para badge + modal
4. Definir contenido de agosto en Twitter basado en métricas de julio

---

## 📣 Marketing

**Twitter (@PesoRealAR):** 🟢 Activo — junio completo publicado, julio en PDF listo para cargar en Typefully (pendiente scheduling 6-31 julio, lunes a viernes)

**Reddit:** 🟡 Post activo en r/AskArgentina. Sábado de Clasificados de r/argentina pendiente (bloqueado por antigüedad de cuenta)

**Email (Brevo):** 🟢 Captura activa desde calculadora pública, funcional

**Próxima acción urgente:** Cargar posts/hilos de julio en Typefully antes de que termine junio — sin esto el canal queda sin contenido

---

## 💰 Finanzas

**MRR actual:** $0 (pre-revenue, beta gratuita)

**Costos actuales:**
- Operacionales: ~$0/mes (todos en planes gratuitos)
- Anthropic API: ~USD 0.50/mes (solo pruebas)
- Break-even: 1 usuario premium ya cubre meses de costos de API

**Precios:**
- Premium: ARS 7.000/mes
- Duo: ARS 12.000/mes (2 personas)
- Ajuste anual en enero según IPC acumulado

**Cadena fiscal pendiente (en orden):**
1. Consultar contador (lleva: descripción del producto, proyecto paralelo SaaS, situación de dependencia)
2. Completar perfil de Mercado Pago con CUIT y datos bancarios reales
3. Inscripción en monotributo — alta online en AFIP (~30 min)
4. Tramitar punto de venta AFIP para facturas tipo C
5. Activar Mercado Pago en producción (cambio en código — chat Construcción)
6. Test transaccional con usuario beta real antes de promocionar

---

## 🗂️ Archivos de referencia

| Archivo | Contenido |
|--------|-----------|
| `estado_actual.md` | Estado operativo general del proyecto |
| `construccion.md` | Stack, features construidas, deuda técnica, lecciones |
| `estrategia.md` | Producto, roadmap, modelo de negocio, decisiones |
| `marketing.md` | Canales, copies, calendarios, PDFs de contenido |
| `finanzas.md` | Costos, proyecciones, cadena fiscal, monotributo |
| `master_contexto.md` | Este archivo — sincronización entre chats |

---

## 👤 Instrucción por chat

| Chat | Instrucción al iniciar |
|------|----------------------|
| **Construcción** | "Leé construccion.md. Somos v0.3.1, beta cerrada. La próxima tarea es filtros de Movimientos por tipo + rango de fechas custom con memoria permanente." |
| **Estrategia** | "Leé estrategia.md y master_contexto.md. Estamos en beta cerrada activa, reenfoque de producto aprobado. Bloqueador principal: fiscal." |
| **Marketing** | "Leé marketing.md. Twitter activo, julio en PDF pendiente de cargar en Typefully. Reddit bloqueado por antigüedad." |
| **Finanzas** | "Leé finanzas.md. MRR $0, toda la cadena fiscal bloqueada. Primer paso: consultar contador." |
| **CEO / Contexto** | "Leé master_contexto.md completo. Resumir estado y proponer próxima decisión." |