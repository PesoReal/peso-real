# Peso Real — Finanzas
*Última actualización: Junio 2026*

## Contexto de este chat
Este chat cubre dos capas: finanzas del negocio (costos, MRR, proyecciones) y finanzas personales de Adrián como emprendedor (monotributo, facturación, impuestos). No se construye código acá ni se toman decisiones de producto.

## Perfil fiscal del emprendedor
- Adrián, 27 años, Lomas de Zamora, Buenos Aires
- Actualmente: empleado en relación de dependencia (finanzas/administración)
- Situación: desarrollando emprendimiento digital en paralelo
- **Etapa:** transición pre-revenue → pre-launch (integración MP lista, pasos fiscales pendientes)
- Proyectos: Peso Real (app finanzas personales) + SaaS para monotributistas (en desarrollo)

## Finanzas del negocio

### Costos actuales (fase pre-revenue)
| Servicio | Plan | Costo mensual |
|----------|------|---------------|
| Vercel | Free | $0 |
| Firebase | Free tier | $0 |
| Anthropic API | Pay-per-use | ~USD 0.50 (solo pruebas) |
| Google Analytics | Free | $0 |
| Brevo | Free tier | $0 |
| Dominio | Pendiente | ~USD 12/año |
| Mercado Pago | Pay-per-use | ~1-2% + comisión fija por transacción (aplicará cuando haya ingresos) |
| **Total** | | ~$0 hasta escalar |

### Límites de los planes gratuitos
- **Vercel:** 100k requests/mes (Serverless Functions)
- **Firebase:** 50k reads + 20k writes/día (Firestore), 10k auth/mes
- **Brevo:** 300 emails/día, contactos ilimitados
- **Anthropic:** sin límite (pago por uso, créditos prepagos — saldo inicial USD 5)
- **Mercado Pago:** sin límite (comisión por transacción)

### Proyecciones de costos al escalar
- 100 usuarios activos (10 msgs/día al asistente): ~USD 6/mes en API
- 20 usuarios premium pagando ARS 7.000/mes = ARS 140.000 MRR → costo API < ARS 1.000
- Break-even: 1 usuario premium ya cubre meses de costos de API

### Modelo de ingresos
- **Gratis:** IBF básico + sueldo real
- **Premium:** ARS 7.000/mes
- **Duo:** ARS 12.000/mes (2 personas — parejas, hermanos, amigos)
- ARPU ponderado esperado: ~ARS 9.000
- Cobro: Mercado Pago en ARS (integración LISTA, sandbox ACTIVO, producción PENDIENTE)
- Facturación: en ARS por regulaciones argentinas
- **Política de ajuste:** revisión anual en enero, según IPC acumulado del año anterior

## Finanzas personales / Impositivo

### Situación actual
- Empleado en relación de dependencia: aportes ya cubiertos por empleador
- Ingresos del emprendimiento: $0 (pre-revenue)
- **Obligación inmediata:** inscripción en monotributo ANTES de cobrar el primer peso
- Integración Mercado Pago: LISTA (sandbox), producción bloqueada hasta resolver fiscal

### Monotributo — guía básica
- **Cuándo inscribirse:** ANTES de cobrar el primer peso (no después)
- **Dónde:** AFIP.gob.ar → Monotributo → Alta (tramite online, ~30 minutos)
- **Categorías:** se define por ingresos brutos anuales y parámetros físicos
- **Actividad para el rubro:** "Servicios de desarrollo de software" o "Servicios de tecnología de la información"
- **Punto de venta (PV):** tramitar junto con monotributo para facturación electrónica tipo C
- **Facturación:** emitir desde AFIP con el PV habilitado (Mercado Pago integra automáticamente)
- **Vencimientos:** pago mensual entre el 20 y el último día hábil de cada mes
- **Impuestos estimados:** ~ARS 1.500-3.000/mes según categoría (a confirmar con contador)

### Consideraciones para emprendimiento digital
- Los ingresos en ARS vía Mercado Pago simplifican la facturación (no hay conversión USD)
- Mercado Pago como procesador: retiene según categoría de monotributo, acredita en cuenta bancaria
- Con ambos proyectos (Peso Real + SaaS monotributistas): evaluar si conviene una sola actividad o dos (preguntar a contador)

---

## Estado actual
- ✅ **Precios finalizados en ARS:** Premium ARS 7.000/mes, Duo ARS 12.000/mes (2 personas)
- ✅ **Política de ajuste definida:** revisión anual según IPC acumulado
- ✅ **Integración Mercado Pago:** COMPLETADA (sandbox activo)
- ✅ **Costos operacionales:** $0 hasta escalar (planes gratuitos sostenibles)
- ✅ **Beta cerrada activa:** 5–15 contactos con acceso premium gratuito
- 🔲 **Contador:** no consultado — BLOQUEADOR (necesario para pasos siguientes)
- 🔲 Monotributo: no inscripto (espera consulta con contador)
- 🔲 Punto de venta AFIP: no tramitado (se hace junto con monotributo)
- 🔲 Mercado Pago producción: no activado (espera inscripción monotributo + PV)

---

## Prioridades inmediatas (jun 2026)

### SEMANA 1: Consultar contador
**Qué llevar:**
- Descripción de Peso Real (SaaS, suscripción mensual en ARS)
- Mencionar SaaS monotributistas (proyecto paralelo)
- Situación actual (empleado en dependencia)

**Lo que pedirle:**
- Confirmación: ¿monotributo sí o sí?
- ¿Una o dos actividades? (los dos proyectos)
- ¿Cuál es la categoría estimada?
- ¿Impuesto mensual estimado?

### SEMANA 1-2: Completar Mercado Pago
Con info del contador:
- Agregar CUIT a cuenta MP
- Completar perfil real
- Agregar datos bancarios

### SEMANA 2-3: Inscribirse en monotributo + tramitar PV
- Alta online en AFIP
- Punto de venta para facturas tipo C
- ~1-2 semanas de trámite

### SEMANA 4: Activar producción en Mercado Pago
- Verificar que MP detecte monotributo
- Cambiar configuración de sandbox a producción en código (chat de Construcción)
- **TEST EN VIVO CON USUARIO BETA** antes de promocionar públicamente

---

## Tareas pendientes (ordenadas por urgencia)
1. **[BLOQUEADOR]** Consultar contador esta semana (determina todo lo demás)
2. **[BLOQUEADOR]** Completar Mercado Pago con datos reales (CUIT, bancarios)
3. **[BLOQUEADOR]** Inscribirse en monotributo online (AFIP)
4. **[BLOQUEADOR]** Tramitar punto de venta (junto con monotributo)
5. Activar Mercado Pago en producción (una vez MP detecte monotributo)
6. Test transaccional con usuario beta real
7. Documentar proceso para replicar (segunda cuenta si SaaS monotributistas también factura)

---

## Notas operacionales
- **Timing crítico:** no cobrar un peso sin estar inscripto en monotributo (AFIP puede sancionar)
- **Mercado Pago retenciones:** automáticas según categoría, no hay que hacer nada
- **Cambio de precios anual:** implementar en código (revisión enero de cada año) — coordinar con chat de Construcción
- **Segunda facturación:** SaaS monotributistas puede usar misma cuenta o crear otra (definir con contador)

---
*Próxima revisión: post-consulta con contador (decisiones se aceleran de ahí).*
