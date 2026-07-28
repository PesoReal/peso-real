# Estado Actual — Peso Real
*Documento operativo para retomar trabajo entre sesiones*

---

# Resumen general
V1 y V2 completas y en producción. Beta cerrada activa. El producto es un gestor financiero personal con dos niveles de uso: IBF semanal sin fricción (piso) y módulo de Movimientos con balance mensual (techo opcional). Lema definido. Plan Duo congelado en marketing. Foco total en validar el producto para 1 persona.

---

# Completado

**Producto — V1**
- IBF semanal (5 preguntas, puntaje 1-100, acción concreta, historial)
- Canasta de compras con historial de precios y comparación vs. IPC por rubro
- Dashboard de sueldo real ajustado por IPC INDEC y TC MEP (sección secundaria)
- Asistente IA contextual (Premium) vía Anthropic API proxeada en Vercel Function
- Autenticación Firebase (email/password + Google OAuth)
- Integración Mercado Pago en sandbox (checkout Premium y Duo)
- PWA instalable (Safari iOS + Chrome Android)
- Calculadora pública: https://peso-real-xi.vercel.app
- App: https://peso-real-xi.vercel.app/app.html
- Fix botón "Avisarme cuando esté lista" — fetch directo a Brevo con mode:no-cors

**Producto — V2**
- Módulo de ingresos/egresos: tipo, categoría predeterminada, concepto libre, monto ARS, fecha, referencia USD al TC MEP del día
- Balance mensual automático: ingresos - egresos = resultado del mes
- Desglose porcentual por categoría
- System prompt del asistente IA actualizado con datos de Movimientos
- Dashboard reorganizado: Movimientos como protagonista, poder adquisitivo como sección secundaria

**Plan Duo — código completo, marketing congelado**
- Modal de upgrade con ingreso de email del segundo usuario
- `api/duo-invite.js` — envío de email de invitación via Brevo
- Activación automática del segundo usuario vía `app.html?duo_invite={uid}`
- Cada cuenta es 100% independiente (sueldo, IBF, Movimientos, todo separado)
- Canasta compartida: NO existe en el código — copy removido hasta construirla

**Beta cerrada**
- beta.html independiente construida
- Colección `beta_users` en Firestore con acceso premium manual
- Form de registro beta (nombre + email) — Google Forms
- Cuestionario de feedback post-beta (8 preguntas) — Google Forms

**Decisiones de producto**
- Lema oficial: *"Empezás sin anotar nada. Avanzás tanto como querás."*
- Plan Duo congelado en marketing — foco en producto para 1 persona y Plan Premium
- Precios: Premium $7.000 ARS/mes · Duo $12.000 ARS/mes (congelado)
- Revisión anual de precios en enero por IPC acumulado

**Documentación**
- Documento de Requerimientos Técnicos PDF v2.0
- Notas de Parche v0.2.0 PDF
- resumen_ejecutivo.md
- estado_actual.md
- master_contexto.md
- estados/estrategia.md

---

# En progreso

- Beta cerrada: invitaciones a primeros betatesters pendientes de envío
- Observación de 4 señales: retención semanal, completitud IBF, carga de Movimientos, momentos de fricción

---

# Pendiente

**Producto**
- Actualizar onboarding: presentar IBF como primer paso (sin fricción) y Movimientos como capa opcional disponible cuando el usuario quiera más control
- Modal de Novedades en la app con notas de parche v0.2.0 (copy listo en PDF)

**Fiscal (bloqueante para cobrar)**
1. Consultar contador
2. Inscripción en monotributo en AFIP
3. Obtener punto de venta en AFIP
4. Activar Mercado Pago en producción

**Lanzamiento público (post-beta)**
- Lanzamiento en Reddit (r/argentina, r/personalfinance_es)
- Activación de Twitter/X (@PesoRealAR) con copy actualizado al nuevo lema
- Términos y condiciones formales

**V3 (post-lanzamiento)**
- Canasta compartida en Plan Duo (decisión de arquitectura pendiente)
- PWA en Google Play vía TWA
- Integración de resúmenes de tarjeta
- Vínculo entre egresos de supermercado e historial de canasta
- Agente de reporte mensual del negocio

---

# Próximas acciones recomendadas

1. **Consultar contador** — desbloquea toda la cadena fiscal
2. **Enviar invitaciones beta** a los primeros 5 contactos
3. **Actualizar onboarding** para comunicar los dos niveles de uso → chat de Construcción
4. **Esperar 2-3 semanas** de uso antes de pedir feedback con el cuestionario

---

# Decisiones recientes

- **Lema oficial definido:** *"Empezás sin anotar nada. Avanzás tanto como querás."* — refleja los dos niveles de uso y la promesa emocional del producto.
- **Plan Duo congelado en marketing:** el código existe pero no se comunica ni se vende hasta validar el producto para 1 persona. La canasta compartida no existe en el código — copy removido.
- **Posicionamiento resuelto:** IBF es el piso (sin fricción, sin anotar), Movimientos es el techo (control total opcional). No son contradictorios — son un funnel de engagement.
- **Reenfoque de producto aprobado:** Peso Real es un gestor financiero personal contextualizado para Argentina, no solo una app de poder adquisitivo.
- **Dashboard reorganizado:** Movimientos como protagonista, poder adquisitivo como sección secundaria.

---

# Bloqueos

1. **Formalización fiscal:** sin monotributo no se puede cobrar. Cadena: contador → monotributo → punto de venta AFIP → MP producción.
2. **Reddit:** age-gated, requiere antigüedad de cuenta.

---

# Riesgos abiertos

1. **Retención no validada:** la beta es el primer test real de uso sostenido.
2. **Onboarding desactualizado:** el usuario nuevo no sabe que existe el módulo de Movimientos hasta que lo encuentra solo.
3. **Fundador único con tiempo limitado:** 5-15 horas semanales.
4. **Dependencia de APIs externas:** IPC INDEC y TC MEP. Un cambio en su estructura rompe features centrales.
5. **Depreciación del precio en ARS:** erosión real entre revisiones anuales de enero.
6. **Costo API Anthropic a escala:** ~USD 0.002/conversación. Requiere monitoreo al escalar.

---

# Preguntas abiertas

- **¿Cuándo y cómo construir la canasta compartida del Duo?** Decisión de arquitectura pendiente para V3.
- **¿Mecanismo de actualización de precios en enero?** No definido si aplica a usuarios existentes automáticamente o con período de gracia.
- **¿Criterio formal de lanzamiento público?** Implícito: retención de beta satisfactoria + cobro habilitado.
- **¿Términos y condiciones?** Obligatorios antes de cobrar. Formato mínimo no definido.
- **¿Cross-venta con SaaS de monotributistas?** Planificado para V3, sin detalle.

---

# Última actualización
Julio 2026 — post definición de lema y congelamiento de Plan Duo en marketing.
