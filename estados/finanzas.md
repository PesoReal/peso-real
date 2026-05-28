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
- **Premium:** USD 5/mes en ARS
- **Familiar:** USD 8/mes en ARS (V3)
- ARPU ponderado esperado: ~USD 5.5
- Cobro: Mercado Pago en ARS (pendiente de activar)
- Facturación en ARS por regulaciones argentinas

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

### Pendiente
- Definir precio en ARS de Premium (actualizable con inflación)
- Activar Mercado Pago cuando haya primeros usuarios
- Consultar contador cuando se acerque el primer ingreso
- Evaluar monotributo vs autónomo según proyección de ingresos
