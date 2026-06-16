# master_contexto.md — Peso Real
*Generado automáticamente. No editar manualmente.*
*Última actualización: Junio 2026*

---

## 🚦 Estado general

| Área | Estado |
|------|--------|
| Producto | ✅ V2 en producción, beta activa |
| Fiscal | 🔴 Bloqueado — contador pendiente |
| Marketing | 🟡 Twitter activo, julio pendiente cargar |
| Ingresos | 🔴 $0 — MP sandbox, producción bloqueada |

---

## 🔴 Bloqueadores activos

1. **Contador no consultado** → bloquea monotributo → bloquea MP producción → bloquea primer cobro
2. **Notas de parche v0.2.0** → copy listo en Estrategia, implementación pendiente en Construcción
3. **Contenido julio** → PDF listo, pendiente cargar en Typefully antes de fin de junio

---

## 📌 Últimas decisiones tomadas

- **Plan Familiar eliminado** → reemplazado por Plan Duo (máx 2 personas, ARS 12.000/mes)
- **Tipografía migrada** a DM Sans en app.html e index.html
- **Bug Brevo resuelto** → botón "Avisarme" en calculadora pública funcional
- **Beta cerrada activa** → 5-15 usuarios con premium gratuito vía `beta_users` en Firestore
- **Precios fijados** → Premium ARS 7.000/mes · Duo ARS 12.000/mes · revisión anual enero por IPC

---

## 🔨 Construcción

**Estado:** Todo en producción. V2 completa.

**Próxima tarea:** Implementar badge + modal de Novedades (notas de parche v0.2.0) — esperando texto de Estrategia

**Deuda técnica:**
- IPC hardcodeado hasta 2026-03 (actualizar con datos INDEC recientes)
- Comparación con pares simulada (conectar Firebase cuando haya 50+ usuarios)

**Pendiente bloqueado por fiscal:**
- Swap MP sandbox → producción (`sandbox_init_point` → `init_point` + token `APP_USR-`)

---

## 🎯 Estrategia

**Estado:** Beta en curso. Sin criterio formal de cierre definido.

**4 señales a observar en beta:**
1. Retorno semanal sin empuje externo
2. Completitud IBF semanal
3. Carga real de canasta
4. Momento de fricción / abandono

**Pendientes estratégicos:**
- Definir criterio de cierre de beta
- Notas de parche → pasar texto a Construcción
- Definir contenido agosto en Twitter (post-métricas de julio)
- Activar MP producción cuando se resuelva fiscal

---

## 📣 Marketing

**Twitter @PesoRealAR:** activo, junio completo publicando

**Estado por canal:**
- Twitter: ✅ Junio cargado · 🟡 Julio PDF listo, pendiente Typefully
- Reddit: 🟡 Post r/AskArgentina activo · Sábado Clasificados pendiente
- Brevo: ✅ Capturando emails desde calculadora

**Próxima acción urgente:** Cargar julio en Typefully antes de fin de junio

---

## 💰 Finanzas

**MRR actual:** ARS 0 (pre-revenue)
**Costos operativos:** ~USD 0 (todos en plan gratuito)

**Cadena fiscal pendiente (en orden):**
1. Consultar contador → 2. Alta monotributo AFIP → 3. Punto de venta → 4. Completar MP con CUIT → 5. Activar MP producción

**No cobrar un peso antes del paso 1.**

---

## 🗂️ Archivos de referencia

| Archivo | Chat dueño | Cuándo leer |
|---------|-----------|-------------|
| `construccion.md` | Construcción | Solo si necesitás stack técnico o historial de builds |
| `estrategia.md` | Estrategia | Solo si necesitás roadmap o decisiones de producto |
| `marketing.md` | Marketing | Solo si necesitás copies, canales o calendario |
| `finanzas.md` | Finanzas | Solo si necesitás costos, proyecciones o fiscal |
| `estado_actual.md` | Todos | Referencia operativa completa |
| `resumen_ejecutivo.md` | CEO/COO | Visión de conjunto |

---

## 👤 Instrucción por chat

**Construcción:** Leer sección 🔨 + Bloqueadores. Ignorar el resto.
**Estrategia:** Leer sección 🎯 + Últimas decisiones. Ignorar el resto.
**Marketing:** Leer sección 📣 + Estado general. Ignorar el resto.
**Finanzas:** Leer sección 💰 + Bloqueadores. Ignorar el resto.
**CEO/COO:** Leer todo este archivo. No leer los .md individuales.
