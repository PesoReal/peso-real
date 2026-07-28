# Resumen Ejecutivo — Peso Real
*Última actualización: Julio 2026*

---

# Producto
Peso Real es una Progressive Web App (PWA) de gestión financiera personal diseñada para el contexto económico argentino. Permite al usuario registrar ingresos y egresos con desglose por categoría y balance mensual automático, rastrear el historial de precios de su canasta de compras comparándolo con la inflación oficial de cada rubro, medir su bienestar financiero semanalmente sin fricción, y consultar un asistente IA que conoce su situación financiera real. Todo expresado en ARS y USD al TC MEP del día.

**Lema:** *"Empezás sin anotar nada. Avanzás tanto como querás."*

---

# Problema que resuelve
Las apps de finanzas personales globales ignoran la inflación argentina como variable central y te obligan a anotar todo desde el día uno. El usuario argentino no sabe cuánto gasta realmente por categoría en términos reales, no puede comparar su inflación personal con la oficial, y no tiene un lugar donde su situación financiera completa esté contextualizada para Argentina — sin culpa, sin fricción. Peso Real resuelve los tres problemas en un solo producto.

---

# Usuario objetivo
Argentino de entre 20 y 40 años, empleado en relación de dependencia o independiente, que cobra en pesos y quiere entender y gestionar su situación financiera real sin tecnicismos ni culpa. Empieza con el IBF semanal (sin anotar nada) y avanza hacia los Movimientos cuando quiere más control.

---

# Propuesta de valor
Es el único gestor financiero personal que habla en argentino y que no te obliga a anotar todo para darte valor. El IBF semanal (5 preguntas, sin carga de gastos) es el piso mínimo — ya ahí sabés cómo estás. Los Movimientos son el techo para quienes quieren más control: registro con referencia en USD al TC MEP, desglose por categoría, balance mensual. No compite con billeteras digitales. Compite con apps globales que ignoran la inflación y te abruman desde el día uno.

---

# Estado actual del proyecto
- **V1 completa:** IBF semanal + canasta de compras + dashboard de sueldo real (sección secundaria).
- **V2 completa:** Módulo de ingresos/egresos con balance mensual, desglose por categoría y referencia en USD al TC MEP.
- **Beta cerrada activa** con 5 a 15 personas conocidas con acceso premium gratuito.
- **Mercado Pago integrado** en sandbox. Activación en producción bloqueada por formalización fiscal.
- **Plan Duo:** código existente, congelado en marketing hasta validar el producto para 1 persona.

---

# Objetivo principal actual
Validar retención del producto completo (IBF + Movimientos) con betatesters reales antes del lanzamiento público.

---

# Métrica principal
**Retención semanal:** porcentaje de usuarios que abren la app por su cuenta en la semana siguiente sin ser empujados. Con el módulo de Movimientos, el usuario tiene su propio historial adentro — eso convierte la retención en lock-in real.

---

# Riesgos principales
1. **Fiscal:** sin monotributo activo no se puede cobrar. Es el bloqueante crítico para activar Mercado Pago en producción.
2. **Retención no validada:** la beta es el primer test real de uso sostenido.
3. **Onboarding:** el usuario nuevo no sabe que existe el módulo de Movimientos hasta que lo encuentra solo. Necesita ser comunicado en el onboarding.
4. **Fundador único con tiempo limitado:** 5-15 horas semanales.
5. **Dependencia de APIs externas:** IPC INDEC y TC MEP son datos críticos.

---

# Próximos hitos
1. Validar retención en beta con producto V2 completo
2. Actualizar onboarding para presentar IBF como primer paso y Movimientos como capa opcional
3. Formalización fiscal: monotributo → punto de venta → Mercado Pago producción
4. Lanzamiento público con lema y copy actualizados
5. V3: canasta compartida en Plan Duo, TWA Google Play, integración de tarjetas
