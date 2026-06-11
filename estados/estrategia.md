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
- Beta cerrada: EN CURSO (5–15 contactos conocidos, acceso premium gratuito)
- V3 (Plan Duo, PWA, integraciones): PENDIENTE

## Modelo de negocio
- **Gratis:** IBF básico + sueldo real (sin historial)
- **Premium:** ARS 7.000/mes — producto completo + asistente IA contextual
- **Duo:** ARS 12.000/mes — 2 personas
- Precios se revisan anualmente cada enero en base al IPC acumulado
- Churn esperado: <5% por lock-in del historial acumulado
- Cobro: Mercado Pago en ARS — integrado en sandbox, producción pendiente de setup fiscal
- Facturación en ARS por regulaciones argentinas

## Plan Duo — decisión tomada
- Máximo 2 personas (no plan familiar — target: parejas jóvenes, hermanos, amigos)
- Nombre: **Duo** (no Familiar, no Pareja)
- Precio: ARS 12.000/mes por los dos (ARS 6.000 c/u vs ARS 7.000 individual)
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
- Fuente tipográfica: DM Sans (migrada desde Outfit + Fraunces en junio 2026)

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
- Form de registro beta: nombre + email (Google Forms)
- Cuestionario de feedback post-beta: 8 preguntas informales (Google Forms)
- beta.html: página independiente con acceso vía Firestore

## Canales de adquisición activos
- **Twitter/X (@PesoRealAR):** activo, junio completo publicando, julio preparado
- **Reddit:** post en r/AskArgentina activo; Sábado de Clasificados de r/argentina pendiente
- **Email:** captura vía Brevo desde calculadora pública (funcional)

## Documentación técnica
- Documento de Requerimientos Técnicos generado en PDF (v2.0)
- Incluye: descripción del producto, arquitectura, RF, RNF, modelo de datos, modelo de negocio, endpoints, integraciones, roadmap

## Pendiente estratégico
- Activar Mercado Pago producción cuando llegue setup fiscal (contador + monotributo + PV AFIP)
- Formalización: monotributo antes de cobrar el primer peso
- Métricas a trackear: MRR, churn, usuarios activos semanales, conversión free→premium
- Cross-venta con SaaS de monotributistas (V3)
- Post-beta: recolectar y analizar feedback para definir roadmap V3

## Roadmap V3
- Plan Duo (2 personas, canasta compartida opcional)
- PWA Google Play (TWA, USD 25 pago único)
- Integración resúmenes de tarjeta
- Agente de reporte mensual del negocio (MRR, churn, métricas)
- Cross-venta con SaaS de monotributistas

## Tareas pendientes
1. Notas de parche — definir texto y features a comunicar → pasar a chat de Construcción para implementar badge + modal
2. Definir criterio de cierre de beta (¿cuánto feedback es suficiente?)
3. Activar MP producción cuando el bloqueador fiscal se resuelva
4. Definir contenido de agosto en Twitter basado en métricas de julio
