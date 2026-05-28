# Peso Real — Finanzas
*Última actualización: Mayo 2026*

## Contexto de este chat
Este chat cubre dos capas: finanzas del negocio (costos, MRR, proyecciones) y finanzas personales de Adrián como emprendedor (monotributo, facturación, impuestos). No se construye código acá ni se toman decisiones de producto.

## Perfil fiscal del emprendedor
- Adrián, 27 años, Lomas de Zamora, Buenos Aires
- Actualmente: empleado en relación de dependencia (finanzas/administración)
- Situación: desarrollando emprendimiento digital en paralelo
- Pendiente: inscripción en monotributo cuando el negocio genere ingresos
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
| **Total** | | ~$0 hasta escalar |

### Límites de los planes gratuitos
- **Vercel:** 100k requests/mes (Serverless Functions)
- **Firebase:** 50k reads + 20k writes/día (Firestore), 10k auth/mes
- **Brevo:** 300 emails/día, contactos ilimitados
- **Anthropic:** sin límite (pago por uso, créditos prepagos — saldo inicial USD 5)

### Proyecciones de costos al escalar
- 100 usuarios activos (10 msgs/día al asistente): ~USD 6/mes en API
- 20 usuarios premium pagando USD 5/mes = USD 100 MRR → costo API < USD 1
- Break-even: 1 usuario premium ya cubre meses de costos de API

### Modelo de ingresos
- **Gratis:** IBF básico + sueldo real
- **Premium:** ARS 7.000/mes
- **Familiar:** ARS 12.000/mes (V3)
- ARPU ponderado esperado: ~ARS 9.000
- Cobro: Mercado Pago en ARS (pendiente de activar)
- Facturación: en ARS por regulaciones argentinas
- **Política de ajuste:** revisión anual en enero, según IPC acumulado del año anterior

## Finanzas personales / Impositivo

### Situación actual
- Empleado en relación de dependencia: aportes ya cubiertos por empleador
- Ingresos del emprendimiento: por ahora $0 (pre-revenue)
- Obligación de inscribirse en monotributo: cuando el emprendimiento genere ingresos

### Monotributo — guía básica
- **Cuándo inscribirse:** cuando se empiece a facturar, antes del primer cobro
- **Dónde:** AFIP.gob.ar → Monotributo → Alta
- **Categorías:** se define por ingresos brutos anuales y parámetros físicos
- **Facturación:** emitir factura electrónica tipo C desde el punto de venta AFIP
- **Vencimientos:** pago mensual entre el 20 y el último día hábil de cada mes
- **Actividad para el rubro:** "Servicios de desarrollo de software" o "Servicios de tecnología de la información"

### Consideraciones para emprendimiento digital
- Los ingresos en USD (del exterior o en dólares) tienen tratamiento especial — consultar contador
- Mercado Pago como procesador: retiene y acredita en ARS — simplifica la facturación
- Con ambos proyectos (Peso Real + SaaS monotributistas): evaluar si conviene una sociedad o seguir como persona física

---

## Estado actual
- ✅ **Precios finalizados en ARS:** Premium ARS 7.000/mes, Familiar ARS 12.000/mes
- ✅ **Política de ajuste definida:** revisión anual según IPC acumulado
- ✅ **Costos operacionales:** $0 hasta escalar (planes gratuitos sostenibles)
- 🔲 Mercado Pago: no activado (espera primeros usuarios)
- 🔲 Monotributo: no inscripto (espera ingresos reales)
- 🔲 Contador: no consultado (pendiente para primer ingreso)

## Tareas pendientes
1. **Activar Mercado Pago** cuando haya primeros usuarios beta/pagos
2. **Inscribirse en monotributo** antes del primer cobro (llevar documentación AFIP)
3. **Consultar contador** cuando se acerque el primer ingreso (tratamiento fiscal, categoría)
4. **Evaluar estructura legal** si ambos proyectos escalan (persona física vs sociedad)
5. **Implementar política de ajuste de precios** en app (revisión anual, notificación a usuarios)

---
*Próxima revisión: cuando haya tracción de usuarios o cambio significativo en MEP/inflación.*
