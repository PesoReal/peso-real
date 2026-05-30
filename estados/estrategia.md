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
- V2 (Pilar 3 + canasta): EN DESARROLLO FINAL
- V3 (familiar, PWA, integraciones): PENDIENTE

## Modelo de negocio
- **Gratis:** IBF básico + sueldo real (sin historial)
- **Premium:** USD 5/mes en ARS — producto completo + asistente IA contextual
- **Familiar:** USD 8/mes en ARS — hasta 4 personas (V3)
- ARPU ponderado esperado: ~USD 5.5
- Churn esperado: <5% por lock-in del historial acumulado
- Cobro: Mercado Pago en ARS — YA INTEGRADO
- Facturación en ARS por regulaciones argentinas

## Decisiones tomadas
- Firebase para auth y sync (seguridad > open source)
- Asistente IA solo premium (costo API ~USD 0.002/conversación)
- Comparación con pares: simulada hasta 50+ usuarios reales
- Stack estático sin frameworks (velocidad de construcción)
- Identidad: Peso Real — juego de palabras poder adquisitivo real + verdad financiera
- Beta cerrada con conocidos antes de lanzamiento público
- Sin Mercado Pago activo durante la beta — acceso premium manual vía Firebase

## Beta cerrada — estructura definida
**Objetivo:** validar retención y UX antes de salir al público, sin presión de conversión.

**Perfil:** 5 a 15 personas conocidas, mezcla de perfiles (financieros y no financieros).

**Acceso:** premium gratis, sin fecha de vencimiento fija. Cierre cuando haya feedback suficiente.

**4 comportamientos a observar:**
1. Retorno semanal sin empuje externo
2. Completitud del IBF semanal
3. Carga real de productos en la canasta
4. Momento de fricción / abandono

**Al cierre de la beta — 4 preguntas clave:**
1. ¿Qué usaste más?
2. ¿Qué no entendiste o te costó?
3. ¿Hubo algún momento en que cerraste la app sin terminar lo que ibas a hacer?
4. ¿La usarías si fuera paga?

**Herramientas armadas:**
- Form de registro beta: nombre + email (ya creado en Google Forms)
- Cuestionario de feedback post-beta: 8 preguntas informales (ya creado en Google Forms)

**Brief técnico para Construcción:**
- Página `beta.html` independiente (no toca `app.html` ni `index`)
- Colección `beta_users` en Firestore con emails autorizados
- Al loguearse, se chequea el email → si está, activa `premium: true` y `beta: true` en el documento del usuario sin pasar por Mercado Pago
- Desactivación: flag global `beta_active: false` o eliminar colección
- Identidad visual Peso Real

## Pendiente estratégico
- Activar Mercado Pago cuando lleguen los primeros usuarios orgánicos post-beta
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
