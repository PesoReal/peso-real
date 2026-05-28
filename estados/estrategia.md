# Peso Real — Estrategia
*Última actualización: Mayo 2026*

## Contexto de este chat
Este chat es para decisiones de producto, roadmap, modelo de negocio, pricing, pivots y prioridades. No se construye código acá ni se habla de campañas de marketing específicas.

## El emprendedor
- Adrián, 27 años, Lomas de Zamora, Buenos Aires
- Empleado en relación de dependencia (finanzas/administración)
- Disponibilidad: 5-15 horas semanales
- Capital inicial: hasta $500.000 ARS
- No sabe programar — construye con Claude
- Desarrolla en paralelo un SaaS de gestión para monotributistas (mismo usuario base)

## El producto
App de finanzas personales diseñada para el contexto argentino. Tres pilares:
1. **Verdad financiera** — dashboard con poder adquisitivo real vs inflación
2. **Bienestar financiero** — IBF semanal sin cargar gastos
3. **Memoria de compras** — canasta personalizada con "tu inflación real"

**Diferencial clave:** es la única app que habla en argentino — inflación real, peso MEP, IPC INDEC. No compite con Mercado Pago ni Ualá (billeteras). Compite con apps globales que ignoran la inflación.

## Estado del producto
- MVP V1 (Pilares 1 y 2): COMPLETO
- V2 (Pilar 3 + canasta): COMPLETO
- V3 (familiar, PWA, integraciones): PENDIENTE

## Modelo de negocio
- **Gratis:** IBF básico + sueldo real (sin historial)
- **Premium:** USD 5/mes en ARS — producto completo + asistente IA contextual
- **Familiar:** USD 8/mes en ARS — hasta 4 personas (V3)
- ARPU ponderado esperado: ~USD 5.5
- Churn esperado: <5% por lock-in del historial acumulado
- Cobro: Mercado Pago en ARS (pendiente de activar)
- Facturación en ARS por regulaciones argentinas

## Decisiones tomadas
- Firebase para auth y sync (seguridad > open source)
- Asistente IA solo premium (costo API ~USD 0.002/conversación)
- Comparación con pares: simulada hasta 50+ usuarios reales
- Stack estático sin frameworks (velocidad de construcción)
- Identidad: Peso Real — juego de palabras poder adquisitivo real + verdad financiera

## Pendiente estratégico
- Activar Mercado Pago cuando haya primeros usuarios orgánicos
- Formalización: monotributo cuando el negocio genere ingresos
- Definir precio en ARS actualizable con inflación
- Métricas a trackear: MRR, churn, usuarios activos semanales, conversión free→premium
- Cross-venta con SaaS de monotributistas (V3)

## Roadmap V3
- Plan familiar hasta 4 personas
- PWA Google Play (TWA, USD 25 pago único)
- Integración resúmenes de tarjeta
- Agente de reporte mensual del negocio (MRR, churn, métricas)
- MCP cross-venta con SaaS monotributistas
