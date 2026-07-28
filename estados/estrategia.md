# Peso Real — Estrategia
*Última actualización: Julio 2026*

## Contexto de este chat
Este chat es para decisiones de producto, roadmap, modelo de negocio, pricing, pivots y prioridades. No se construye código acá ni se habla de campañas de marketing específicas.

## El emprendedor
- Adrián, 27 años, Lomas de Zamora, Buenos Aires
- Empleado en relación de dependencia (finanzas/administración)
- Disponibilidad: 5-15 horas semanales
- No sabe programar — construye con Claude
- Desarrolla en paralelo un SaaS de gestión para monotributistas (mismo usuario base)

## El producto
Gestor financiero personal diseñado para el contexto argentino.

**Lema oficial:** *"Empezás sin anotar nada. Avanzás tanto como querás."*

**Dos niveles de uso — funnel de engagement, no contradicción:**
- **Piso:** IBF semanal — sin anotar nada, ya sabés cómo estás
- **Techo:** Módulo de Movimientos — control total opcional para quien quiere más

**Tres pilares:**
1. **Movimientos** — ingresos/egresos, balance mensual, desglose por categoría, ref. USD TC MEP
2. **Bienestar Financiero (IBF)** — 5 preguntas semanales, puntaje 1-100, sin carga de gastos
3. **Memoria de Compras** — historial de precios, "tu inflación real" vs. IPC oficial

**Sección secundaria:** dashboard de sueldo real / poder adquisitivo (accesible, no protagonista)

**Diferencial clave:** única app que habla en argentino — inflación real, peso MEP, IPC INDEC. No compite con Mercado Pago ni Ualá. Compite con apps globales que ignoran la inflación y te abruman desde el día uno.

## Estado del producto
- V1 (IBF + Canasta + Dashboard): COMPLETO
- V2 (Módulo Movimientos + reorganización): COMPLETO
- Beta cerrada: ACTIVA
- V3 (Duo completo, TWA, tarjetas): PENDIENTE

## Modelo de negocio
- **Free:** IBF básico + sueldo real (sin historial)
- **Premium:** $7.000 ARS/mes — producto completo + asistente IA
- **Duo:** $12.000 ARS/mes — 2 personas — CONGELADO EN MARKETING
- Revisión anual de precios en enero por IPC acumulado
- Cobro: Mercado Pago en ARS — sandbox activo, producción bloqueada por fiscal

## Plan Duo — estado
- Código completo y funcional
- Cada cuenta es 100% independiente (Movimientos, IBF, sueldo, todo separado)
- Canasta compartida: NO existe en el código — copy removido
- Congelado en marketing hasta validar el producto para 1 persona
- Canasta compartida y dashboard conjunto → V3 (decisión de arquitectura pendiente)

## Posicionamiento resuelto
El módulo de Movimientos convive con el IBF sin contradicción porque son capas distintas:
- IBF = bienestar financiero sin fricción (no cambia)
- Movimientos = control financiero opcional (nuevo)
- El onboarding debe presentarlos en ese orden: IBF primero, Movimientos disponible cuando el usuario quiera más

## Decisiones tomadas
- Firebase para auth y sync
- Asistente IA solo Premium (~USD 0.002/conversación)
- Comparación IBF con pares: simulada hasta 50+ usuarios reales
- Stack estático sin frameworks
- Beta cerrada antes del lanzamiento público
- Sin integración bancaria automática en V2 — validar carga manual primero
- Sin Mercado Pago activo durante la beta

## Beta cerrada — estado
- Acceso premium manual vía Firestore (`beta:true`, `premium:true`)
- Sin fecha de vencimiento fija — cierre discrecional
- Form de registro: nombre + email (Google Forms)
- Cuestionario de feedback: 8 preguntas informales (Google Forms)
- 4 comportamientos a observar: retención semanal, completitud IBF, carga de Movimientos, momentos de fricción

## Pendiente estratégico
- Actualizar onboarding para comunicar los dos niveles de uso
- Activar Mercado Pago cuando haya usuarios dispuestos a pagar
- Formalización: monotributo → punto de venta → MP producción
- Lanzamiento público post-beta con copy y lema actualizados
- Términos y condiciones formales antes de cobrar
- Cross-venta con SaaS de monotributistas (V3)

## Roadmap
- **V2 (actual):** Movimientos + balance + desglose + asistente actualizado ✓
- **Post-beta:** lanzamiento público, MP producción, onboarding actualizado
- **V3:** canasta compartida Duo, TWA Google Play, integración resúmenes de tarjeta, agente de reporte mensual, cross-venta SaaS monotributistas
