# Estado Actual — Peso Real
*Documento operativo para retomar trabajo entre sesiones*

---

# Resumen general
V1 completa y en producción. V2 en construcción activa: el producto evoluciona de app de poder adquisitivo a gestor financiero personal contextualizado para Argentina. El cambio central es el módulo de ingresos/egresos. Beta cerrada activa con acceso premium manual vía Firestore. Mercado Pago en sandbox, bloqueado por formalización fiscal pendiente.

---

# Completado

**Producto — V1**
- Pilar 1: Dashboard de sueldo real ajustado por IPC INDEC con tipo de cambio MEP (reconvertido a sección secundaria)
- Pilar 2: IBF semanal (5 preguntas, puntaje 1-100, acción concreta, historial)
- Pilar 3: Canasta de compras con historial de precios y comparación vs. IPC por rubro
- Asistente IA contextual (Premium) vía Anthropic API proxeada en Vercel Function
- Autenticación Firebase (email/password + Google OAuth)
- Integración Mercado Pago en sandbox (checkout Premium y Duo)
- PWA instalable (Safari iOS + Chrome Android)
- Calculadora pública en https://peso-real-xi.vercel.app
- App en producción en https://peso-real-xi.vercel.app/app.html
- Fix botón "Avisarme cuando esté lista" — fetch directo a Brevo con mode:no-cors

**Plan Duo — V1**
- Modal de upgrade con ingreso de email del segundo usuario y elección de canasta (compartida/separada)
- `api/duo-invite.js` — envío de email de invitación via Brevo
- Activación automática del segundo usuario vía `app.html?duo_invite={uid}`
- `activarInvitadoDuo()` lee `duo_invites` en Firestore, activa premium y marca invitación como aceptada

**Beta cerrada**
- Página beta.html independiente construida
- Colección `beta_users` en Firestore con acceso premium manual sin pasar por Mercado Pago
- Form de registro beta (nombre + email) creado en Google Forms
- Cuestionario de feedback post-beta (8 preguntas informales) creado en Google Forms

**Decisiones de producto**
- Plan Duo: 2 personas, $12.000 ARS/mes, canasta compartida opcional
- Precios: Premium $7.000 ARS/mes, Duo $12.000 ARS/mes — revisión anual en enero por IPC
- Reenfoque de producto aprobado: Peso Real es ahora un gestor financiero personal, no solo una app de poder adquisitivo

**Documentación**
- Documento de Requerimientos Técnicos PDF v2.0
- Notas de Parche v0.2.0 PDF
- resumen_ejecutivo.md
- estado_actual.md
- estados/estrategia.md

---

# En progreso

- **Módulo de ingresos/egresos (V2 — núcleo del cambio):** en construcción
- Beta cerrada: invitaciones a primeros betatesters pendientes de envío

---

# Pendiente

**Producto — V2 (orden de construcción)**
1. Módulo de ingresos/egresos con campos: tipo (ingreso/egreso), categoría predeterminada, concepto libre, monto ARS, fecha, referencia USD al TC MEP del día
2. Balance mensual automático: ingresos - egresos = resultado del mes
3. Desglose porcentual por categoría
4. Actualización del system prompt del asistente IA con datos del módulo de egresos
5. Reconexión del dashboard de poder adquisitivo como sección secundaria (desvinculado del bloque de captura de emails para usuarios registrados)

**Fiscal (bloqueante para cobrar)**
1. Consultar contador
2. Inscripción en monotributo en AFIP
3. Obtener punto de venta en AFIP
4. Activar Mercado Pago en producción

**Lanzamiento público (post-beta)**
- Lanzamiento en Reddit (r/argentina, r/personalfinance_es)
- Activación de Twitter/X (@PesoRealAR)
- Términos y condiciones formales

**V3 (después del lanzamiento)**
- Vínculo entre egresos de supermercado e historial de canasta de compras
- PWA en Google Play vía TWA
- Integración de resúmenes de tarjeta
- Agente de reporte mensual del negocio
- Cross-venta con SaaS de monotributistas

---

# Próximas acciones recomendadas

1. **Consultar contador** — desbloquea toda la cadena fiscal
2. **Pasar brief del módulo de egresos** al chat de Construcción
3. **Enviar invitaciones beta** a los primeros 5 contactos
4. **Esperar 2-3 semanas** de uso antes de pedir feedback con el cuestionario

---

# Decisiones recientes

- **Reenfoque de producto aprobado:** Peso Real evoluciona de app de poder adquisitivo a gestor financiero personal contextualizado para Argentina.
- **Dashboard de poder adquisitivo:** pasa a sección secundaria. Se mantiene accesible pero no es el protagonista.
- **IBF e historial de canasta:** se mantienen sin cambios — son el diferencial de retención.
- **Asistente IA:** mismo backend, mismo modelo. Solo se actualiza el system prompt con los nuevos datos de egresos.
- **Integración bancaria descartada para V2:** primero se valida carga manual, después se evalúa automatizar.
- **Bug de captura de email resuelto:** botón "Avisarme cuando esté lista" corregido con fetch directo a Brevo con mode:no-cors.
- **Plan Familiar descartado:** reemplazado por Plan Duo (máximo 2 personas).

---

# Bloqueos

1. **Formalización fiscal:** sin monotributo no se puede cobrar. Bloquea Mercado Pago en producción.
2. **Edad de cuenta de Reddit:** lanzamiento age-gated, no publicable hasta tener antigüedad suficiente.

---

# Riesgos abiertos

1. **Retención no validada:** la beta es el primer test real de uso sostenido.
2. **Reposicionamiento del pitch:** el diferencial "sin cargar gastos" desaparece con el módulo de egresos. El discurso de venta necesita actualizarse antes del lanzamiento público.
3. **Fundador único con tiempo limitado:** 5-15 horas semanales.
4. **Dependencia de APIs externas:** IPC INDEC y TC MEP. Un cambio en su estructura rompe features centrales.
5. **Depreciación del precio en ARS:** la inflación erosiona el valor real entre revisiones anuales.
6. **Costo de API Anthropic a escala:** ~USD 0.002/conversación. Bajo ahora, requiere monitoreo al escalar.

---

# Preguntas abiertas

- **¿Mecanismo de actualización de precios en enero?** No definido si aplica a usuarios existentes automáticamente o con período de gracia.
- **¿Cuándo lanzar públicamente?** Criterio implícito: retención de beta satisfactoria + cobro habilitado.
- **¿Términos y condiciones?** Obligatorios antes de cobrar. Formato mínimo no definido.
- **¿Cross-venta con SaaS de monotributistas?** Planificado para V3, sin detalle definido.

---

# Última actualización
Julio 2026 — post reenfoque estratégico de producto aprobado en chat CEO/COO.
