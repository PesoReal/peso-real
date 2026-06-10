# Peso Real — Estrategia
*Última actualización: Junio 2026*

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
- Beta cerrada: EN CURSO
- V3 (Plan Duo, PWA, integraciones): PENDIENTE

## Modelo de negocio
- **Gratis:** IBF básico + sueldo real (sin historial)
- **Premium:** $7.000 ARS/mes — producto completo + asistente IA contextual
- **Duo:** $12.000 ARS/mes — 2 personas
- Precios se revisan anualmente cada enero en base al IPC acumulado
- Churn esperado: <5% por lock-in del historial acumulado
- Cobro: Mercado Pago en ARS — integrado, pendiente de activar post-beta
- Facturación en ARS por regulaciones argentinas

## Plan Duo — decisión tomada
- Máximo 2 personas (no 4 — target: parejas jóvenes, hermanos, amigos)
- Nombre: **Duo** (no Familiar, no Pareja)
- Precio: $12.000 ARS/mes por los dos ($6.000 c/u vs $7.000 individual)
- Cada usuario mantiene perfil, IBF y dashboard individual
- Opción al activar el Duo: **"Compartir canasta"** (sí / no, modificable después)
  - Sí: ambos cargan precios y ven el mismo historial de compras
  - No: canastas separadas, simplemente pagan juntos más barato
- Cubre todos los escenarios: pareja que convive, hermanos que no conviven, amigos

## Decisiones tomadas
- Firebase para auth y sync (seguridad > open source)
- Asistente IA solo premium (costo API ~USD 0.002/conversación)
- Comparación con pares: simulada hasta 50+ usuarios reales
- Stack estático sin frameworks (velocidad de construcción)
- Identidad: Peso Real — juego de palabras poder adquisitivo real + verdad financiera
- Beta cerrada con conocidos antes de lanzamiento público
- Sin Mercado Pago activo durante la beta — acceso premium manual vía Firebase

## Beta cerrada — estado actual
**Objetivo:** validar retención y UX antes de salir al público, sin presión de conversión.

**Perfil:** 5 a 15 personas conocidas, mezcla de perfiles.

**Acceso:** premium gratis, sin fecha de vencimiento fija. Cierre cuando haya feedback suficiente.

**4 comportamientos a observar:**
1. Retorno semanal sin empuje externo
2. Completitud del IBF semanal
3. Carga real de productos en la canasta
4. Momento de fricción / abandono

**Herramientas armadas:**
- Form de registro beta: nombre + email (creado en Google Forms)
- Cuestionario de feedback post-beta: 8 preguntas informales (creado en Google Forms)
- beta.html: página independiente con acceso vía Firestore (construida)

**Brief técnico para Construcción (ya entregado):**
- Colección `beta_users` en Firestore con emails autorizados
- Al loguearse, activa `premium: true` y `beta: true` sin pasar por Mercado Pago
- Desactivación: flag global `beta_active: false` o eliminar colección

## Documentación técnica
- Documento de Requerimientos Técnicos generado en PDF (v2.0)
- Incluye: descripción del producto, arquitectura, RF, RNF, modelo de datos, modelo de negocio, endpoints, integraciones, roadmap
- Destinado a terceros técnicos (ingenieros, socios potenciales)

## Bugs conocidos
- Botón "Avisarme cuando esté lista" en la calculadora pública no envía el email a Brevo — pendiente de fix en chat de Construcción

## Pendiente estratégico
- Activar Mercado Pago cuando lleguen los primeros usuarios orgánicos post-beta
- Formalización: monotributo cuando el negocio genere ingresos
- Definir mecanismo de actualización del precio ARS con inflación
- Métricas a trackear: MRR, churn, usuarios activos semanales, conversión free→premium
- Cross-venta con SaaS de monotributistas (V3)

## Roadmap V3
- Plan Duo (2 personas, canasta compartida opcional)
- PWA Google Play (TWA, USD 25 pago único)
- Integración resúmenes de tarjeta
- Agente de reporte mensual del negocio (MRR, churn, métricas)
- Cross-venta con SaaS de monotributistas
