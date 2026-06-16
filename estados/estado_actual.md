# Estado Actual — Peso Real
*Documento operativo para retomar trabajo entre sesiones*

---

# Resumen general
V1 y V2 completas y en producción. Beta cerrada activa con acceso premium manual vía Firestore. Mercado Pago integrado en sandbox, pendiente de activar en producción hasta resolver la formalización fiscal. El foco actual es ejecutar la beta, recopilar feedback real y desbloquear el cobro.

---

# Completado

**Producto**
- Pilar 1: Dashboard de sueldo real ajustado por IPC INDEC con tipo de cambio MEP
- Pilar 2: IBF semanal (5 preguntas, puntaje 1-100, acción concreta, historial)
- Pilar 3: Canasta de compras con historial de precios y comparación vs. IPC por rubro
- Asistente IA contextual (Premium) vía Anthropic API proxeada en Vercel Function
- Autenticación Firebase (email/password + Google OAuth)
- Integración Mercado Pago en sandbox (checkout Premium y Duo)
- PWA instalable (Safari iOS + Chrome Android)
- Calculadora pública en https://peso-real-xi.vercel.app
- App en producción en https://peso-real-xi.vercel.app/app.html
- Fix botón "Avisarme cuando esté lista" en calculadora pública — fetch directo a Brevo con mode:no-cors (sin script externo)

**Plan Duo**
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
- Plan Duo definido: 2 personas, $12.000 ARS/mes, canasta compartida opcional
- Nombres de planes definidos: Free / Premium / Duo (descartados: Familiar, Pareja)
- Precios definidos: Premium $7.000 ARS/mes, Duo $12.000 ARS/mes
- Política de precios: revisión anual cada enero basada en IPC acumulado

**Documentación**
- Documento de Requerimientos Técnicos PDF v2.0 generado
- Notas de Parche v0.2.0 PDF generado (incluye texto para modal, estructura de changelog y consideraciones legales)
- resumen_ejecutivo.md generado
- estados/estrategia.md actualizado

---

# En progreso

- Beta cerrada: invitaciones a primeros betatesters pendientes de envío
- Observación de 4 señales de comportamiento: retención semanal, completitud IBF, carga de canasta, momentos de fricción

---

# Pendiente

**Fiscal (bloqueante para cobrar)**
1. Consultar contador familiar con experiencia en emprendimientos digitales
2. Inscripción en monotributo en AFIP
3. Obtener punto de venta en AFIP para facturas tipo C
4. Activar Mercado Pago en producción (swap `sandbox_init_point` → `init_point` y token)

**Producto**
- Implementar sistema de notas de parche en la app (badge en nav + modal de Novedades) — copy v0.2.0 listo en PDF de Estrategia, falta construcción en chat de Construcción
- V3: PWA en Google Play vía TWA (pago único USD 25)
- V3: Integración de resúmenes de tarjeta de crédito/débito
- V3: Agente de reporte mensual del negocio (MRR, churn, métricas)

**Lanzamiento público**
- Lanzamiento en Reddit (r/argentina, r/personalfinance_es) — pendiente post-beta
- Activación de Twitter/X (@PesoRealAR) con contenido orgánico
- Términos y condiciones formales (obligatorios antes de cobrar)

---

# Próximas acciones recomendadas

1. **Implementar modal de Novedades** con las notas de parche v0.2.0 ya redactadas → chat de Construcción
2. **Enviar invitaciones beta** a los primeros 5 contactos con el link a beta.html y mensaje personalizado
3. **Consultar contador** para desbloquear la cadena fiscal (monotributo → punto de venta → MP producción)
4. **Esperar 2-3 semanas** de uso real antes de pedir feedback formal con el cuestionario de Google Forms

---

# Decisiones recientes

- **Plan Familiar descartado.** Reemplazado por Plan Duo: máximo 2 usuarios, $12.000 ARS/mes, canasta compartida opcional activable por cada usuario. Fundamento: el tercer integrante típico de un hogar (hijo menor) no es usuario relevante del producto.
- **Nombre "Duo" elegido** sobre "Pareja" (connotación limitante) y "Familiar" (scope incorrecto).
- **Canasta del Plan Duo es opcional:** cada usuario puede elegir compartirla o mantenerla separada, modificable en cualquier momento.
- **Precios fijados en ARS** con revisión anual en enero. Referencia interna: Premium ≈ USD 5/mes al TC MEP, Duo ≈ USD 8/mes entre dos.
- **Beta cerrada sin fecha de vencimiento fija:** cierre discrecional cuando haya feedback suficiente.
- **Formularios de beta simplificados:** registro solo pide nombre + email (suficiente para dar el acceso).
- **Bug de captura de email resuelto. El botón "Avisarme cuando esté lista" en la calculadora pública fue corregido — fetch directo a Brevo con mode:no-cors sin script externo.
---

# Bloqueos

1. **Formalización fiscal no resuelta:** sin monotributo activo no se puede cobrar ningún peso. Bloquea la activación de Mercado Pago en producción. Depende de una acción externa (consultar contador → inscribirse en AFIP).

---

# Riesgos abiertos

1. **Retención no validada:** el producto existe pero no tiene usuarios reales con uso sostenido. La beta es el primer test real.
2. **Fundador único con tiempo limitado:** 5-15 horas semanales. Cualquier imprevisto técnico o fiscal puede retrasar el roadmap significativamente.
3. **Dependencia de fuentes externas:** IPC INDEC y API de tipo de cambio MEP son datos críticos. Un cambio en su estructura rompe features centrales.
4. **Depreciación del precio en ARS:** la inflación erosiona el valor real del precio mensual entre revisiones anuales. Si la inflación acumulada es alta, el aumento de enero puede generar fricción con usuarios activos.
5. **Costo de la API de Anthropic a escala:** actualmente ~USD 0.002 por conversación. Bajo con pocos usuarios, pero requiere monitoreo cuando escale.

---

# Preguntas abiertas

- **¿Cuándo exactamente activar Mercado Pago en producción?** Depende del contador. Sin respuesta hasta resolver la cadena fiscal.
- **¿Mecanismo exacto de actualización de precios en enero?** No está definido si el aumento aplica a usuarios existentes automáticamente o con período de gracia.
- **¿Cuándo lanzar públicamente?** Sin criterio formal definido. Implícitamente: cuando la retención de beta sea satisfactoria y el cobro esté habilitado.
- **¿Términos y condiciones?** Obligatorios antes de cobrar. Formato y contenido mínimo no definidos aún.
- **¿Cross-venta con SaaS de monotributistas?** Producto en desarrollo paralelo. Integración con Peso Real planificada para V3 pero sin detalle definido.

---

# Última actualización
Junio 2026 — corregido por chat de Construcción.
