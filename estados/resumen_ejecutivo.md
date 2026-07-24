# Resumen Ejecutivo — Peso Real
*Última actualización: Julio 2026*

---

# Producto
Peso Real es una Progressive Web App (PWA) de gestión financiera personal diseñada para el contexto económico argentino. Permite al usuario registrar ingresos y egresos con desglose por categoría y balance mensual automático, rastrear el historial de precios de su canasta de compras comparándolo con la inflación oficial de cada rubro, medir su bienestar financiero semanalmente sin fricción, y consultar un asistente IA que conoce su situación financiera real. Todo expresado en ARS y USD al TC MEP del día.

---

# Problema que resuelve
Las apps de finanzas personales globales ignoran la inflación argentina como variable central. El usuario argentino no sabe cuánto gasta realmente por categoría en términos reales, no puede comparar su inflación personal con la oficial, y no tiene un lugar donde su situación financiera completa esté contextualizada para Argentina. Peso Real resuelve los tres problemas en un solo producto.

---

# Usuario objetivo
Argentino de entre 20 y 40 años, empleado en relación de dependencia o independiente, que cobra en pesos y quiere entender y gestionar su situación financiera real sin tecnicismos. Perfil secundario: parejas jóvenes que gestionan las finanzas del hogar en conjunto (target del Plan Duo).

---

# Propuesta de valor
Es el único gestor financiero personal que habla en argentino: registra ingresos y egresos con referencia en USD al TC MEP del día, muestra el desglose porcentual por categoría, y conecta los gastos con la inflación real de cada rubro. No compite con billeteras digitales (Mercado Pago, Ualá). Compite con apps globales que ignoran la realidad inflacionaria y las supera por diseño.

---

# Estado actual del proyecto
- **V1 completa:** Dashboard de sueldo real (reconvertido a sección secundaria) + IBF semanal.
- **V2 en construcción activa:** Módulo de ingresos/egresos con balance mensual, desglose por categoría y referencia en USD al TC MEP. Es el núcleo del reenfoque de producto.
- **Beta cerrada activa** con 5 a 15 personas conocidas con acceso premium gratuito.
- **Mercado Pago integrado** en sandbox. Activación en producción bloqueada por formalización fiscal pendiente.
- **Asistente IA:** mismo backend, system prompt a actualizar con los nuevos datos del módulo de egresos.

---

# Objetivo principal actual
Construir y lanzar en beta el módulo de ingresos/egresos — el núcleo del reenfoque de producto. Mientras se construye, Twitter, Reddit y la calculadora pública capturan audiencia orgánica. No hay presión de lanzar rápido.

---

# Métrica principal
**Retención semanal:** porcentaje de usuarios que abren la app por su cuenta en la semana siguiente sin ser empujados. Con el módulo de egresos, el usuario tiene su propio historial adentro — eso convierte la retención en lock-in real.

---

# Riesgos principales
1. **Fiscal:** sin monotributo activo no se puede cobrar. Es el bloqueante crítico para activar Mercado Pago en producción.
2. **Retención no validada:** la beta es el primer test real de uso sostenido.
3. **Reposicionamiento del pitch:** el diferencial "sin cargar gastos" del IBF desaparece con el módulo de egresos. El discurso de venta necesita actualizarse.
4. **Fundador único con tiempo limitado:** 5-15 horas semanales. Cualquier imprevisto puede retrasar el roadmap.
5. **Dependencia de APIs externas:** IPC INDEC y TC MEP son datos críticos. Un cambio en su estructura rompe features centrales.

---

# Próximos hitos
1. Construir módulo de ingresos/egresos (V2 — núcleo del cambio)
2. Balance mensual + desglose porcentual por categoría
3. Actualizar system prompt del asistente IA con datos de egresos
4. Reconectar dashboard de poder adquisitivo como sección secundaria
5. Formalización fiscal: monotributo → punto de venta → Mercado Pago producción
6. Lanzamiento público post-beta
7. V3: vínculo entre egresos de supermercado e historial de canasta de compras
