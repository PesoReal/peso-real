# Resumen Ejecutivo — Peso Real
*Última actualización: Junio 2026*

---

# Producto
Peso Real es una Progressive Web App (PWA) de finanzas personales diseñada exclusivamente para el contexto económico argentino. Permite al usuario ver su sueldo en términos reales ajustado por inflación (IPC INDEC), medir su bienestar financiero semanalmente sin cargar gastos, y rastrear el historial de precios de su canasta de compras comparándolo con la inflación oficial de cada rubro.

---

# Problema que resuelve
En Argentina, las apps de finanzas personales globales ignoran la inflación como variable central. El usuario argentino no sabe cuánto perdió de poder adquisitivo, no tiene forma de medir si su situación financiera mejoró o empeoró en términos reales, y no puede saber si lo que paga en el súper sube más o menos que la inflación oficial. Peso Real resuelve los tres problemas en un solo producto.

---

# Usuario objetivo
Argentino de entre 20 y 40 años, empleado en relación de dependencia o independiente, que cobra en pesos, hace las compras del hogar y quiere entender su situación financiera real sin tecnicismos. Perfil secundario: parejas jóvenes que gestionan las finanzas del hogar en conjunto (target del Plan Duo).

---

# Propuesta de valor
Es la única app de finanzas personales que habla en argentino: muestra el sueldo en pesos reales ajustado por IPC, usa el tipo de cambio MEP como referencia, y convierte la canasta del usuario en su inflación personal vs. la oficial. No compite con billeteras digitales (Mercado Pago, Ualá). Compite con apps globales (Fintonic, Money Manager) que ignoran la realidad inflacionaria y las pierde por diseño.

---

# Estado actual del proyecto
- **V1 y V2: completas y en producción.** Los tres pilares del producto están construidos y funcionando: dashboard de sueldo real, IBF semanal y memoria de compras.
- **Mercado Pago integrado** en modo sandbox. La activación en producción está pendiente de formalización fiscal (monotributo + AFIP).
- **Beta cerrada activa** con 5 a 15 personas conocidas con acceso premium gratuito.
- **Calculadora pública** disponible como herramienta de captación. Bug conocido: el botón de captura de email no envía a Brevo — pendiente de fix.
- **Documentación técnica generada:** Documento de Requerimientos Técnicos (PDF v2.0) y Notas de Parche v0.2.0.
- **V3 pendiente:** Plan Duo, PWA en Google Play, integración de resúmenes de tarjeta.

---

# Objetivo principal actual
Completar la beta cerrada con feedback real de usuarios antes de cualquier lanzamiento público. La prioridad es validar retención (¿vuelven solos la semana siguiente?) y fricciones de UX, no conversión ni revenue.

---

# Métrica principal
**Retención semanal de betatesters:** porcentaje de usuarios que abren la app por su cuenta en la semana siguiente sin ser empujados. Es el único indicador que importa en esta etapa. Si no vuelven solos, hay algo roto antes de salir al público.

---

# Riesgos principales
1. **Fiscal:** no se puede cobrar ningún peso antes de inscribirse en monotributo. El incumplimiento puede generar sanciones de AFIP. Es el bloqueador crítico para activar Mercado Pago en producción.
2. **Retención no validada:** el producto está construido pero no tiene usuarios reales que lo usen de forma sostenida. La beta es el primer test real — si la retención es baja, hay que iterar antes de lanzar.
3. **Fundador único con tiempo limitado:** 5 a 15 horas semanales disponibles. Cualquier complejidad técnica no planificada puede retrasar significativamente el roadmap.
4. **Dependencia de APIs externas:** IPC INDEC y tipo de cambio MEP son datos críticos proxeados. Un cambio en la estructura de esas fuentes rompe features centrales del producto.
5. **Precio en ARS vs. inflación:** el pricing en pesos se deprecia con el tiempo. La política de revisión anual en enero puede generar fricciones con usuarios si la inflación acumulada obliga a aumentos significativos.

---

# Próximos hitos
1. **Fix del botón de captura de email** en la calculadora pública (bug activo, chat de Construcción).
2. **Activación de la beta cerrada:** invitar a los primeros 5 betatesters y observar comportamiento durante 2-3 semanas.
3. **Formalización fiscal:** inscripción en monotributo + punto de venta en AFIP (prerequisito para cobrar).
4. **Activación de Mercado Pago en producción:** swap de sandbox a producción una vez resuelto el punto anterior.
5. **Lanzamiento público:** primer post en Reddit + calculadora como herramienta de captación orgánica.
6. **V3 — Plan Duo:** 2 usuarios, $12.000 ARS/mes, canasta compartida opcional. Pendiente de definir fecha según feedback de beta.
