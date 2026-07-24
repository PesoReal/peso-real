# Peso Real — CEO/COO/Chief of Staff
*Ultima actualizacion: Julio 2026*

## Contexto de este chat
Este chat opera como direccion ejecutiva del proyecto. No ejecuta tareas especificas de ninguna disciplina — supervisa el sistema completo, detecta contradicciones entre areas, prioriza iniciativas y transforma informacion dispersa en decisiones accionables.

---

## Estado general del proyecto

V1 y V2 completos y en produccion. Beta cerrada declarada activa pero sin invitaciones enviadas — cero usuarios reales con uso sostenido. MRR actual: $0. Bloqueador fiscal sin resolver desde hace semanas.

El proyecto tiene producto terminado, identidad consolidada, stack funcionando y contenido de marketing preparado. El unico problema es ejecucion de los pasos mas simples.

---

## Decisiones tomadas en esta sesion

### Reenfoque estrategico de producto
Peso Real evoluciona de app centrada en poder adquisitivo historico a gestor financiero personal completo y contextualizado para Argentina.

**Sale del centro:** dashboard de perdida/ganancia de poder adquisitivo historica. Pasa a seccion secundaria accesible pero no protagonista. Se conecta con la calculadora publica de forma limpia, sin el bloque de captura de emails que ve el usuario ya registrado.

**Se mantiene igual:** historial de precios de productos (Pilar 3) e IBF semanal (Pilar 2). Son el diferencial de retencion — no se tocan.

**Se profundiza:** asistente IA. Mismo asistente, mismo backend (api/chat.js), pero el system prompt se actualiza para recibir los datos nuevos como contexto. No es un asistente nuevo.

**Se construye nuevo:** modulo de ingresos y egresos con esta estructura:
- Tipo: ingreso / egreso
- Categoria predeterminada (entretenimiento, comida, transporte, salud, viaje, etc.)
- Concepto libre (texto corto)
- Monto en ARS
- Fecha
- Balance mensual automatico: ingresos - egresos = resultado del mes
- Desglose porcentual por categoria
- Referencia en USD al TC MEP del dia del registro

**Queda para despues:** vinculo entre egresos de supermercado e historial de precios del Pilar 3. Es V3 o V4.

### Carga de datos — decision tomada
La carga del historial de compras y del modulo de ingresos/egresos queda manual por ahora. No se implementa OCR, reconocimiento de voz ni procesamiento de tickets en el corto plazo. La optimizacion de UX del flujo de carga es el maximo a considerar a corto plazo. La carga automatizada queda en backlog para cuando haya usuarios reales reportando friccion con evidencia.

### Analisis competitivo — conclusiones
- **Abaco:** cubre ingresos/egresos, es gratis, esta disponible hoy. Referente de UX a superar en ese modulo.
- **Finy y AI.KESTAR:** compiten en carga de datos (voz, foto de ticket, documentos), no en analisis contextualizado. No son sustitutos directos.
- **Focus·Folio:** el competidor a seguir de cerca. Beta privada, apunta al usuario sofisticado. Puede bajar hacia el segmento de Peso Real al escalar.
- **Ventaja real:** ningún competidor tiene la combinacion de IBF + historial de precios por producto + IPC por rubro + asistente contextualizado con todo eso.
- **Riesgo principal:** no es competitivo — es velocidad de ejecucion. El mercado se esta llenando ahora.

---

## Contradicciones detectadas entre areas (vigentes)

1. Beta "activa" sin usuarios reales. Ninguna area reporta invitaciones enviadas.
2. Modal de novedades v0.2.0: Construccion espera texto de Estrategia, Estrategia espera que Construccion lo pida. El PDF con el copy ya existe. Bloqueo ficticio.
3. IPC hardcodeado a 2026-03. Dato central del Pilar 1 con 3+ meses de retraso.
4. Contador "urgente" desde hace semanas. Sin movimiento real.
5. Julio sin cargar en Typefully. PDF listo, no ejecutado.

---

## Orden de construccion del reenfoque

1. Modulo de ingresos/egresos (nucleo del cambio)
2. Balance mensual + desglose porcentual por categoria
3. Actualizacion del system prompt del asistente con los datos nuevos
4. Reconexion secundaria del poder adquisitivo historico
5. Vinculo egresos supermercado — historial de compras (V3+)

Este cambio va a V2.5 o V3. La beta cerrada actual testea lo que ya existe y no se interrumpe.

---

## Bloqueos vigentes

1. Contador no consultado — desbloquea toda la cadena fiscal. Lleva semanas pendiente.
2. Invitaciones beta no enviadas — sin usuarios reales no hay validacion. Sin bloqueante externo.

---

## Proximas acciones recomendadas

| Accion | Area | Prioridad |
|--------|------|-----------|
| Llamar al contador | Finanzas | Alta — esta semana |
| Enviar invitaciones beta (5 contactos) | Estrategia | Alta — esta semana |
| Cargar julio en Typefully | Marketing | Alta — antes del 30/6 |
| Pasar decision de reenfoque al chat de Estrategia | Estrategia | Alta — proxima sesion |
| Implementar modal de novedades v0.2.0 | Construccion | Media |
| Actualizar IPC hardcodeado con datos INDEC recientes | Construccion | Media |
| Publicar en Clasificados r/argentina (sabado) | Marketing | Media |
| Definir criterio de cierre de beta | Estrategia | Media |
| Construccion modulo ingresos/egresos | Construccion | Media — post-estrategia |
| Carga automatica de compras (OCR/voz) | Backlog | Baja — post-usuarios reales |

---

## Patrones de riesgo a monitorear

- Ejecucion vs preparacion: tendencia a llenar tiempo con tareas productivas-pero-no-desbloqueantes.
- Agregar antes de validar: nuevas features deben venir de feedback real, no de percepcion propia o analisis competitivo.
- Cross-chat sin coordinacion: decisiones tomadas en CEO deben pasarse explicitamente al chat correspondiente para ejecutarse.

---

## Estado actual
Sesion de direccion ejecutiva completada. Reenfoque de producto definido a nivel ejecutivo, pendiente de formalizacion en chat de Estrategia. Analisis competitivo realizado. Informe ejecutivo consolidado generado en PDF. Bloqueos originales siguen vigentes.

## Tareas pendientes
1. Subir este archivo a estados/ceo.md en el repositorio
2. Llevar decision de reenfoque al chat de Estrategia para formalizar en roadmap
3. Ejecutar las tres acciones de esta semana: contador, invitaciones beta, julio en Typefully
