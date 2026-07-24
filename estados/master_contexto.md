# Master Contexto — Peso Real
*Generado automáticamente — no editar manualmente*
*Última actualización: Julio 2026*

---

## Qué es este archivo
Síntesis unificada de todos los contextos del proyecto. Permite a cualquier chat, IA o colaborador entender Peso Real sin leer conversaciones anteriores.

---

## El producto

**Peso Real** es una PWA de gestión financiera personal diseñada para Argentina.

**Tres pilares:**
1. **Ingresos/Egresos** *(nuevo núcleo — V2)*: registro de movimientos con categoría, concepto libre, monto ARS, fecha, referencia USD al TC MEP del día. Balance mensual automático y desglose porcentual por categoría.
2. **Bienestar Financiero (IBF)**: 5 preguntas semanales, puntaje 1-100, acción concreta. Sin carga de gastos. Diferencial de retención — no se toca.
3. **Memoria de Compras**: historial de precios por producto, comparación vs. IPC del rubro, "tu inflación real" vs. IPC oficial. Diferencial de retención — no se toca.

**Sección secundaria:**
- Dashboard de sueldo real ajustado por IPC INDEC y TC MEP — ya no es el protagonista, sigue accesible.

**Asistente IA (Premium):** mismo backend (Anthropic API via Vercel Function), system prompt a actualizar con datos del módulo de egresos.

---

## El emprendedor

- Adrián, 27 años, Lomas de Zamora, Buenos Aires
- Empleado en relación de dependencia (finanzas/administración)
- Disponibilidad: 5-15 horas semanales
- No sabe programar — construye con Claude
- Desarrolla en paralelo un SaaS de gestión para monotributistas (mismo usuario base)
- Capital inicial: hasta $500.000 ARS

---

## Stack técnico

- **Frontend:** HTML/CSS/JS estático sin frameworks (`app.html` — single file PWA)
- **Auth + DB:** Firebase Authentication + Firestore
- **Backend:** Vercel Functions (Node.js) — `api/chat.js`, `api/ipc.js`, `api/mp-create.js`, `api/mp-webhook.js`, `api/duo-invite.js`
- **IA:** Anthropic API (claude-sonnet-4-5) proxeada en Vercel
- **Pagos:** Mercado Pago Checkout Pro (sandbox activo, producción pendiente)
- **Deploy:** GitHub (pencil UI) → Vercel autodeploy
- **Email:** Brevo (captura + transaccional)
- **Automatización:** GitHub Actions regenera `master_contexto.md` en cada push a `estados/`

**URLs en producción:**
- App: https://peso-real-xi.vercel.app/app.html
- Calculadora pública: https://peso-real-xi.vercel.app
- Beta: https://peso-real-xi.vercel.app/beta.html
- Repositorio: github.com/PesoReal/peso-real

---

## Modelo de negocio

| Plan | Precio | Usuarios | Incluye |
|------|--------|----------|---------|
| Free | Gratis | 1 | IBF básico + sueldo real sin historial |
| Premium | $7.000 ARS/mes | 1 | Producto completo + asistente IA |
| Duo | $12.000 ARS/mes | 2 | 2 cuentas Premium + canasta compartida opcional |

- Precios revisados anualmente en enero por IPC acumulado
- Cobro vía Mercado Pago en ARS
- Churn esperado <5% por lock-in del historial

---

## Estado actual

| Componente | Estado |
|-----------|--------|
| V1 (Pilares IBF + Canasta + Dashboard) | COMPLETO |
| Plan Duo (invitación, canasta compartida) | COMPLETO |
| Beta cerrada (beta.html + Firestore) | ACTIVA |
| Módulo ingresos/egresos | EN CONSTRUCCIÓN (V2) |
| Mercado Pago producción | BLOQUEADO (fiscal) |
| Lanzamiento público | PENDIENTE (post-beta) |
| V3 (TWA, tarjetas, agente de reporte) | PENDIENTE |

---

## Decisiones clave tomadas

- **Reenfoque de producto:** Peso Real es un gestor financiero personal, no solo una app de poder adquisitivo. Decisión aprobada en chat CEO/COO.
- **Dashboard de poder adquisitivo:** pasa a sección secundaria.
- **IBF y canasta:** intocables — son el diferencial de retención.
- **Módulo de egresos:** carga manual primero, integración bancaria después (V3+).
- **Plan Duo:** máximo 2 personas, canasta compartida opcional activable por usuario.
- **Sin integración bancaria en V2:** se valida carga manual antes de automatizar.
- **Beta cerrada:** acceso premium manual vía Firestore (`beta:true`, `premium:true`), sin fecha de vencimiento fija.

---

## Bloqueos activos

1. **Fiscal:** sin monotributo no se puede cobrar. Cadena: contador → monotributo → punto de venta AFIP → MP producción.
2. **Reddit:** age-gated, requiere antigüedad de cuenta.

---

## Orden de construcción V2

1. Módulo de ingresos/egresos (tipo, categoría, concepto, monto ARS, fecha, ref. USD MEP)
2. Balance mensual automático + desglose porcentual por categoría
3. Actualización del system prompt del asistente IA con datos de egresos
4. Reconexión del dashboard de poder adquisitivo como sección secundaria
5. *(V3)* Vínculo entre egresos de supermercado e historial de canasta

---

## Estructura de chats

| Chat | Scope | Archivo de estado |
|------|-------|-------------------|
| Construcción | Código, archivos, deploys | `estados/construccion.md` |
| Estrategia | Producto, roadmap, decisiones | `estados/estrategia.md` |
| Marketing | Canales, copies, comunidades | `estados/marketing.md` |
| Finanzas | Negocio + fiscal personal | `estados/finanzas.md` |
| CEO/COO | Visión, decisiones ejecutivas | `estados/ceo_coo.md` |

---

## Identidad visual

- Negro: `#0a0b0d`
- Verde lima: `#d4f060`
- Fuente: DM Sans (300–700)
- Isotipo: fusión P+$+R en verde lima sobre negro
- Referencias: Stripe, Linear, Vercel, Notion dark mode
