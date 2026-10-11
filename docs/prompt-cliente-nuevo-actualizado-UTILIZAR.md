# 🚀 MANUAL OPERATIVO ROWE
## Despliegue de webs y menús digitales

> [!IMPORTANT]
> **Este documento contiene el flujo de trabajo estándar de ROWE** para automatizar la creación, diseño, configuración de base de datos y despliegue en vivo de proyectos web para clientes utilizando herramientas de IA y Claude Code.

---

## 📚 Índice

- [📸 Paso 1 — Recogida de materiales y briefing inicial](#-paso-1--recogida-de-materiales-y-briefing-inicial)
- [🎨 Paso 2 — Generación del concepto y diseño](#-paso-2--generación-del-concepto-y-diseño-claude-design)
- [💻 Paso 3 — Inicialización y despliegue estructural](#-paso-3--inicialización-y-despliegue-estructural-claude-code)
- [🖼️ Paso 4 — Generación masiva de recursos gráficos](#-paso-4--generación-masiva-de-recursos-gráficos)
- [🔍 Paso 5 — Validación de estilos con el cliente](#-paso-5--validación-de-estilos-con-el-cliente)
- [🪄 Paso 6 — Estética, fondos y pulido de la landing](#-paso-6--estética-fondos-y-pulido-de-la-landing-page)
- [🔗 Paso 7 — Vinculación, optimización y entrega final](#-paso-7--vinculación-optimización-y-entrega-final)
- [💡 Notas de cierre y mantenimiento](#-notas-de-cierre-y-mantenimiento)

---

## 🧭 Cómo utilizar este manual

### 🟨 Leyenda de campos

| Elemento | Significado |
|---|---|
| 🟨 **[RELLENAR: ...]** | **Dato que debes sustituir** por la información real del cliente/proyecto. |
| 💡 *Ejemplo:* | Texto **orientativo** para entender qué debes introducir. |
| 📝 **Prompt** | Texto preparado para **copiar y pegar** en la herramienta correspondiente. |
| 💻 `código` | Comando, ruta, variable, archivo o elemento técnico. |
| ✅ **Checklist** | Tarea que debes comprobar antes de continuar. |
| ⚠️ **Importante** | Punto que requiere especial atención. |

> [!TIP]
> **Regla principal:** todo lo que aparezca como `[RELLENAR: ...]` debe sustituirse antes de utilizar el prompt. Los ejemplos son únicamente orientativos.

### 📋 Ficha rápida del proyecto

| Campo | Información |
|---|---|
| **Nombre del negocio** | 🟨 **[RELLENAR]** |
| **Tipo de establecimiento** | 🟨 **[RELLENAR]** |
| **Estilo / vibra deseada** | 🟨 **[RELLENAR]** |
| **Qué puede editar el cliente** | 🟨 **[RELLENAR]** |
| **Estructura del sitio** | 🟨 **[RELLENAR]** |
| **Idiomas** | 🟨 **[RELLENAR: ej. es,en]** |
| **Worker de Cloudflare** | 🟨 **[RELLENAR]** |
| **Ruta del proyecto** | 🟨 **[RELLENAR]** |
| **Ruta de recursos** | 🟨 **[RELLENAR]** |
| **Archivo/ruta del diseño** | 🟨 **[RELLENAR]** |

---

# 📸 Paso 1 — Recogida de materiales y briefing inicial

### 🎯 Objetivo

Recopilar la máxima información posible sobre el negocio para dotar a la IA y al diseñador de **contexto real**.

### 🧭 Cómo hacer este paso

Sigue este recorrido **en orden**. En este paso todavía no estás construyendo la web: estás preparando toda la información que necesitarán el diseñador y Claude.

1. **Ve al negocio y recopila material visual.** Haz fotos del local, del menú físico, de los productos y de cualquier detalle característico del establecimiento.
2. **Revisa el material recopilado.** Busca elementos que definan visualmente al negocio: colores, materiales, decoración, iluminación, tipografías, presentación de los productos, etc.
3. **Analiza la identidad del negocio.** Define su historia, valores, personalidad y *lore*.
4. **Decide el alcance del proyecto.** Define exactamente qué podrá editar el cliente y qué partes serán estáticas.
5. **Define la estructura del sitio.** Especifica qué tendrá la landing y qué tendrá el menú digital.
6. **Rellena la información del prompt** utilizando los datos reales del negocio.
7. **Copia el prompt completo** y utilízalo para obtener el brief y las instrucciones del diseñador.

> [!IMPORTANT]
> **No pases al diseño sin tener este material preparado.** El objetivo es que Claude y el diseñador reciban contexto real del negocio y no tengan que inventar su identidad.

### 📝 Prompt de referencia

~~~text
Ok, ahora quiero hacer lo mismo que hicimos para el otro negocio, pero para este nuevo: [RELLENAR: Nombre del negocio / Tipo de establecimiento]

(Ejemplo: un nuevo restaurante italiano tradicional).

Solo que para este no vamos a hacer lo de generar las imágenes con IA. Vamos a dejarlo simple: [RELLENAR: Qué puede editar el usuario/cliente]

(Ejemplo: solo puede editar el menú), o sea, no te lo sobrecargues.

Entonces, dame las dos cosas: el brief y el prompt para el diseñador. Para este último, por favor, indícale al diseñador que enfoque su trabajo desde una perspectiva creativa, buscando un diseño original, de alta calidad y con una identidad propia, evitando por completo un resultado genérico, con una estética orientada a transmitir [RELLENAR: Estilo o vibra deseada]

(Ejemplo: la vibra tradicional de un típico restaurante italiano).

Para este proyecto, el alcance incluye tanto una landing page completa como un menú digital interactivo. Por lo tanto, asegúrate de reflejar claramente en el brief y en las instrucciones que se trata de un sitio web completo compuesto por [RELLENAR: Estructura específica del sitio, ej: una landing y, aparte, el menú digital].

Además, ten muy en cuenta la estructura técnica de visualización: para el menú digital, los mockups de diseño no deben limitarse únicamente a dispositivos móviles; el proceso debe contemplar el diseño inicial para Desktop (escritorio) y, a partir de ahí, adaptarlo de forma responsiva para móvil.
~~~

> [!IMPORTANT]
> El resultado de este paso debe dejar perfectamente claro **qué se va a construir**, **qué podrá editar el cliente** y **qué identidad visual debe transmitir**.

---

# 🎨 Paso 2 — Generación del concepto y diseño (Claude Design)

### 🎯 Objetivo

Obtener los lineamientos visuales y prototipos iniciales adaptados tanto a **Desktop** como a **móvil**.

### 🧭 Cómo hacer este paso

1. **Entra en Claude Design.**
2. **Crea un proyecto nuevo** y ponle el nombre del negocio.
3. **Ve a `Design System`** y selecciona `none`.
4. **Adjunta las fotos del local y las fotografías de referencia** que preparaste en el Paso 1.
5. **Pega el prompt de diseño** generado en el Paso 1.
6. **Espera a que Claude genere el concepto y los mockups.**
7. **Revisa primero la versión Desktop.** Esta será la referencia principal para la composición del menú digital.
8. **Comprueba después la adaptación responsive a móvil.** El móvil debe derivarse del diseño de escritorio y mantener la identidad visual.
9. **Guarda o conserva la referencia del diseño generado**, porque la necesitarás en el Paso 3 para que Claude Code implemente el diseño.

> [!IMPORTANT]
> **Orden obligatorio para el menú digital:** `Desktop → adaptación responsive → móvil`. No plantees el menú únicamente como un diseño móvil.

### 📝 Prompt de referencia

~~~text
Ok, ahora quiero hacer lo mismo que hicimos para el otro negocio, pero para este nuevo: [RELLENAR: Nombre del negocio / Tipo de establecimiento]

(Ejemplo: un nuevo restaurante italiano tradicional).

Solo que para este no vamos a hacer lo de generar las imágenes con IA. Vamos a dejarlo simple: [RELLENAR: Qué puede editar el usuario/cliente]

(Ejemplo: solo puede editar el menú), o sea, no te lo sobrecargues.

Entonces, dame las dos cosas: el brief y el prompt para el diseñador. Para este último, por favor, indícale al diseñador que enfoque su trabajo desde una perspectiva creativa, buscando un diseño original, de alta calidad y con una identidad propia, evitando por completo un resultado genérico, con una estética orientada a transmitir [RELLENAR: Estilo o vibra deseada]

(Ejemplo: la vibra tradicional de un típico restaurante italiano).

Para este proyecto, el alcance incluye tanto una landing page completa como un menú digital interactivo. Por lo tanto, asegúrate de reflejar claramente en el brief y en las instrucciones que se trata de un sitio web completo compuesto por [RELLENAR: Estructura específica del sitio, ej: una landing y, aparte, el menú digital].

Además, ten muy en cuenta la estructura técnica de visualización: para el menú digital, los mockups de diseño no deben limitarse únicamente a dispositivos móviles; el proceso debe contemplar el diseño inicial para Desktop (escritorio) y, a partir de ahí, adaptarlo de forma responsiva para móvil.
~~~

### ⚠️ Requisito de diseño responsive

> **Desktop → diseño base → adaptación responsive → móvil**

El menú digital **no debe diseñarse únicamente pensando en móvil**. La propuesta inicial debe contemplar escritorio y después adaptarse correctamente a pantallas pequeñas.

---

# 💻 Paso 3 — Inicialización y despliegue estructural (Claude Code)

### 🎯 Objetivo

Automatizar la creación del entorno, conectar la base de datos **Convex** y desplegar la primera versión funcional en **Cloudflare**.

### 🧭 Cómo hacer este paso

1. **Abre una terminal** y asegúrate de tener una carpeta vacía preparada para el nuevo cliente.
2. **Entra en la carpeta del proyecto** utilizando `cd`.
3. **Ejecuta Claude Code** con `claude`.
4. **Dentro de Claude Code, utiliza la skill de la agencia** escribiendo `/menu-digital`.
5. **Responde a las 4 preguntas que te hará la skill:** nombre del negocio, *worker name*, idiomas y contraseña de administración.
6. **Pasa a Claude la referencia del diseño** creado por el diseñador y los recursos disponibles.
7. **Deja que la skill prepare el scaffold**, configure la conexión con Convex, haga el build local y prepare las variables de producción.
8. **Deja que configure Convex en producción y haga el deploy a Cloudflare.**
9. **Comprueba la URL pública y el panel `/admin`.**
10. **Comprueba que el dueño puede editar los ítems del menú** antes de pasar al siguiente paso.

> [!NOTE]
> **Este es el Claude Code principal del proyecto.** Aquí se realiza la implementación estructural, la conexión con Convex y el despliegue.

### 💻 Preparar el proyecto

~~~bash
cd [RELLENAR: Ruta del workspace del nuevo proyecto]
claude
~~~

💡 *Ejemplo:*

~~~bash
cd ~/Documents/clientes/la-gallega
claude
~~~

### 📝 Prompt de referencia

~~~text
Ok perfecto. Te doy un poco de contexto.

Estoy haciendo un proyecto para [RELLENAR: Tipo de negocio / Establecimiento, ej: un restaurante gallego], que es básicamente una landing page, un menú digital y un panel de administración con Convex donde la persona pueda editar ese menú digital. Mi diseñador me generó todos los conceptos. Lo que quiero que hagas ahora es dejar todo funcional. Todavía no generemos las imágenes definitivas, pero ahorita quiero que dejes todo funcional.

Para esto vamos a usar Convex (ya tienes el CLI autenticado) y vamos a usar Cloudflare para hacer deploy. El primer paso es que dejemos todo ya listo en vivo y bien conectado, de modo que el dueño pueda editar los ítems del menú.

Igual te voy a pasar [RELLENAR: Origen de los recursos gráficos, ej: el link de algunas fotos que saqué del menú y de los lugares del negocio] para que las integres a la landing page. ¿No? Si tienes alguna pregunta, házmela.

- Fetch this design file, read its readme, and implement the relevant aspects of the design:

  [RELLENAR: URL o ruta del archivo de diseño del nuevo proyecto]

- Implement:

[RELLENAR: Nombre del archivo o componente principal, ej: La Gallega.html]

Las imágenes las encuentras en [RELLENAR: Ubicación de las imágenes o recursos, ej: mi carpeta de descargas y empiezan con "Img"].

Mira, igual te sirve: había creado un skill con la automatización de la agencia ROWE, pero tienes que seguir el diseño de mi diseñador. Tal vez te puedes apoyar del skill para ver cómo hice la conexión a la base de datos y demás, pero principalmente el diseño de mi diseñador.

✅ Skill menu-digital listo en ~/.claude/skills/menu-digital/

Compila out of the box con soporte para variables de entorno de producción y codificación limpia de acentos.

Cómo usarla desde otra carpeta:

cd [RELLENAR: Ruta del workspace del nuevo proyecto] # carpeta vacía
claude # abre Claude Code

Luego, en el prompt:

/menu-digital

o conversacional:

"armar menú digital para [RELLENAR: Nombre del negocio]"

Claude leerá SKILL.md, te preguntará 4 cosas clave (nombre del negocio, worker name, idiomas en formato ej: es,en, y contraseña de admin), correrá el scaffold con reemplazo seguro de variables, hará el build local, configurará Convex en producción y desplegará automáticamente a Cloudflare. URL final + admin pass al final.
~~~

> [!WARNING]
> **El diseño del diseñador tiene prioridad visual.** La skill puede utilizarse como referencia para scaffold, Convex y despliegue, pero no debe sustituir el diseño aprobado.

---

# 🖼️ Paso 4 — Generación masiva de recursos gráficos

### 🎯 Objetivo

Producir de forma masiva y en paralelo las imágenes de los productos del menú utilizando una plataforma externa de IA.

### 🧭 Cómo abrir el chat correcto para las imágenes

> [!IMPORTANT]
> **Este paso NO se realiza en el mismo chat de Claude Code que está haciendo el despliegue.**
>
> Sigue siendo **Claude Code**, pero debes abrir **un subchat/terminal nuevo dentro de Claude Code Web** para trabajar con las imágenes y no mezclar este trabajo con el chat principal.

1. **Mantén abierto el chat principal de Claude Code** que está realizando el despliegue del proyecto.
2. **En Claude Code Web, mira la parte superior de la interfaz** y pulsa el botón **`+`**.
3. **Selecciona la opción `Terminal`** en el menú que aparece.
4. Se abrirá **una nueva terminal/subchat de Claude Code** independiente del chat principal.
5. **Ponle un nombre identificativo**, por ejemplo: `NOMBRE EMPRESA (IMÁGENES)`.
6. **No cierres ni sustituyas el chat principal.** Ese chat continúa siendo el encargado del proyecto y del despliegue.
7. **En la nueva Terminal de imágenes**, pega el prompt de este paso.
8. **Mantén abierta una pestaña de Kie AI (Nano Banana Pro)** para realizar la generación.
9. Primero pide **varias pruebas de estilo**.
10. Una vez aprobado el estilo, genera las imágenes restantes **en paralelo**, sin modificar ni borrar archivos que pertenezcan a otros procesos.

### 🖥️ Diferencia entre las dos sesiones

| Sesión | Para qué sirve | Qué debes hacer |
|---|---|---|
| 💻 **Claude Code — chat principal** | Implementación, Convex, Cloudflare y web | **No lo cambies de tarea** mientras se realiza el despliegue. |
| 🖼️ **Claude Code — `NOMBRE EMPRESA (IMÁGENES)`** | Generación y gestión de imágenes | Se abre desde **`+ → Terminal`** en Claude Code Web. |
| 🤖 **Kie AI** | Generación de las imágenes | Mantén abierta la plataforma para producir los recursos. |

> [!TIP]
> **La clave:** no tienes que abrir otro Claude diferente. Desde el **`+` de Claude Code Web**, selecciona **`Terminal`** y utiliza esa nueva sesión como subchat específico para las imágenes.

🔗 **Plataforma:** [Kie AI](https://kie.ai/)

### 📝 Prompt de referencia

~~~text
¿Qué onda Claude?

Para contexto, estoy haciendo una página web para [RELLENAR: Tipo de negocio/Establecimiento, ej: una clínica dental / una cafetería / un restaurante], que incluye tanto landing page como un catálogo o menú digital interactivo. Quiero que analices todo el proyecto, especialmente la base de datos, y que veas todos los ítems que hay. Quiero que generemos imágenes para esos ítems.

Para generar las imágenes, me gustaría usar el servicio Kie AI, que es un proveedor de imágenes. Me permite generar hasta 100 imágenes en paralelo. Quiero que generes todas las imágenes en una corrida para que no se tarde.

Antes de generarlas, quiero que hagas varias pruebas con varios prompts para que yo elija el mejor estilo de imágenes. Una vez que elija el estilo, deberás proceder a generar todas las imágenes con ese estilo para ponerlas en la página.

No tienes que revisar las imágenes cuando termines. Sólo quiero que las guardes en una carpeta [RELLENAR: projects/nombre-cliente/assets/images/] para que mi gente las agregue a mi aplicación.

Tú solo las tienes que guardar.

Cuidado porque hay otra gente corriendo en paralelo en otra sesión, entonces no vayas a borrar nada de lo que hago.

Puedes consultar más detalles en la plataforma:
https://kie.ai/
~~~

> [!CAUTION]
> **No borrar ni sobrescribir archivos de otros procesos.** Trabaja exclusivamente dentro de la carpeta del proyecto indicada.

---

# 🔍 Paso 5 — Validación de estilos con el cliente

### 🎯 Objetivo

Definir el estilo gráfico definitivo con el cliente **antes de lanzar la producción masiva**.

### 🧭 Cómo hacer este paso

1. **Ve a la sesión `NOMBRE EMPRESA (IMÁGENES)`** que abriste en el Paso 4 mediante `+ → Terminal`.
2. **Revisa las imágenes de prueba** que generó el agente.
3. **Muestra las diferentes opciones al cliente.**
4. **Pregunta qué estilo prefiere** y espera una elección clara.
5. **Anota exactamente la opción elegida**, utilizando el nombre de archivo o el prefijo que haya generado Claude.
6. **Vuelve al subchat `NOMBRE EMPRESA (IMÁGENES)`.**
7. **Indícale a Claude qué opción ha elegido el cliente.**
8. **Espera a que utilice ese patrón visual para generar el resto de productos.**

> [!NOTE]
> **Esta comunicación se realiza en el subchat de imágenes**, no en el chat principal de implementación.

💡 Claude puede nombrar las muestras utilizando prefijos por letras.

| Archivo | Uso |
|---|---|
| `a-carbonara.png` | 💡 *Ejemplo de estilo A* |
| `b-carbonara.png` | 💡 *Ejemplo de estilo B* |
| `c-carbonara.png` | 💡 *Ejemplo de estilo C* |

### 🟨 Selección del cliente

**[RELLENAR: "Le ha gustado el estilo de la opción X"]**

💡 *Ejemplo:*  
**"Le ha gustado el estilo de la opción b-carbonara."**

> [!IMPORTANT]
> La elección del cliente debe quedar identificada claramente antes de generar el resto de imágenes.

---

# 🪄 Paso 6 — Estética, fondos y pulido de la landing page

### 🎯 Objetivo

Integrar creativamente las fotos originales del local y dotar a la landing de fondos optimizados mediante IA visual.

### 🧭 Cómo hacer este paso

1. **Vuelve al chat principal de Claude Code Web**, es decir, al que está trabajando en la implementación de la web.
2. **Indícale que ahora quieres trabajar específicamente en la landing page.**
3. **Dile dónde están las fotografías originales** del negocio.
4. **Indica el patrón de nombres** que deben buscarse, por ejemplo, imágenes que comienzan por `IMG`.
5. **Pide a Claude que distribuya las fotografías creativamente** dentro de la landing respetando el diseño aprobado.
6. **Pide que genere o prepare fondos** siguiendo la estética concreta del negocio mediante Higgs Field.
7. **Solicita que ajuste la opacidad y el contraste** para que el texto siga siendo perfectamente legible.
8. **Indica que puede utilizar una fotografía original como fondo** si encaja con la composición.
9. **Si una fotografía necesita mejora**, puede hacerle *upscale* con Higgs Field antes de utilizarla.
10. **Revisa el resultado en Desktop y móvil** antes de continuar.

> [!IMPORTANT]
> **Este paso vuelve al chat principal de Claude Code.** El subchat de imágenes se utiliza para generar recursos; el chat principal se encarga de integrarlos en la web.

### 📝 Prompt de referencia

~~~text
Ok mira, por ahorita enfoquémonos en definir la landing page.

- Quiero que cheques las imágenes en

[RELLENAR: Ubicación de las imágenes, ej: mi carpeta de descargas / la carpeta assets/images del proyecto] (que te digo que son las que inician con IMG) y las acomodes creativamente en la landing.

- Para los fondos quiero que generes imágenes que sigan la estética de

[RELLENAR: Tipo de negocio / Nombre del establecimiento, ej: este restaurante / esta cafetería] utilizando Higgs Field. Ponles una opacidad adecuada para que el texto no se pierda porque ahorita los fondos que están en la landing están muy genéricos.

- Si puedes, pon una de las imágenes que te di de fondo. Tal vez hazle upscale con inteligencia artificial con Higgs Field y ponla de fondo.

Entonces sí, hagamos eso. Por ahorita enfoquémonos en el diseño de la landing.
~~~

> [!TIP]
> Los fondos deben **aportar identidad**, pero nunca perjudicar la legibilidad. La opacidad y el contraste deben comprobarse también en móvil.

---

# 🔗 Paso 7 — Vinculación, optimización y entrega final

### 🎯 Objetivo

Conectar automáticamente los archivos gráficos generados con los registros de la base de datos de **Convex**, comprimir los recursos para garantizar velocidad de carga y consolidar el despliegue definitivo.

### 🧭 Cómo hacer este paso

1. **Espera a que el subchat `NOMBRE EMPRESA (IMÁGENES)` haya terminado de generar las imágenes.**
2. **Localiza la carpeta exacta** donde el agente guardó los archivos finales.
3. **Cuenta cuántas imágenes se han generado** y, si procede, indica cuántas de las esperadas están disponibles.
4. **Comprueba la convención de nombres.** Cada archivo debe utilizar el `<slug>` correspondiente al registro de Convex.
5. **Vuelve al chat principal de Claude Code.**
6. **Indícale la ruta exacta de las imágenes finales** y el número de archivos generados.
7. **Pide que haga el matching por slug** y conecte las imágenes con los productos correspondientes.
8. **Pide que optimice/comprima los recursos** si es necesario para mantener una buena velocidad de carga.
9. **No le pidas que regenere las imágenes:** en este paso el objetivo es **conectar, optimizar y desplegar** las que ya existen.
10. **Comprueba finalmente que las imágenes aparecen en los productos correctos y que la web sigue funcionando.**

### 📋 Información que debes proporcionar

| Dato | 🟨 Valor a rellenar |
|---|---|
| Imágenes finales | **[RELLENAR: número]** |
| Ruta de las imágenes | **[RELLENAR: carpeta exacta]** |
| Tamaño total | **[RELLENAR: MB]** |
| Convención de nombres | **[RELLENAR: <slug>.png]** |
| Estado | **[RELLENAR: completo/parcial]** |

💡 *Ejemplo:*

~~~text
Listo. 67/67 imágenes generadas en estilo cinematográfico oscuro.
~~~

### 📝 Prompt de referencia

~~~text
Perfecto. Ahora mi otro agente de imágenes ya generó todas las imágenes, o por lo menos creo que la mayoría de los productos que había en la base de datos.

Te voy a dar la información sobre dónde las guardó. Lo que quiero que hagas es que las conectes. Él sólo las generó y las guardó; tú tienes que encargarte de conectarlas para que ya salgan en el sitio web y todo.

[RELLENAR: Resumen de generación]

Ubicaciones para tu equipo:

- Finales ([RELLENAR: Número de imágenes]): [RELLENAR: Ruta o carpeta donde están guardadas las imágenes] ([RELLENAR: Tamaño total aproximado])
- Nombre = <slug>.png (matchea el slug de Convex, p. ej. carbonara.png, pizza-margherita.png).

Igual si es necesario, usa Cloudflare para optimizarlas o no sé cómo le vas a hacer. No tienes que revisar. Hazlo rápido. Simplemente machéalas por el nombre.

Es importante que el sitio cargue rápido, entonces comprime las imágenes igual si tienes que hacerlo.
~~~

### ⚠️ Regla de matching

El nombre del archivo debe corresponder al **slug de Convex**.

💡 *Ejemplo:*

| Archivo | Slug Convex |
|---|---|
| `carbonara.png` | `carbonara` |
| `pizza-margherita.png` | `pizza-margherita` |

> [!WARNING]
> **No asumas coincidencias incorrectas.** Si falta una imagen o un slug no coincide, debe identificarse antes de dar la entrega por finalizada.

---

# 💡 Notas de cierre y mantenimiento

> [!SUCCESS]
> **Estado final:** con el último paso ejecutado, la página web está oficialmente finalizada y funcional en línea.

### 🔧 Gestión posterior

Es recomendable realizar pruebas de control accediendo al panel de administración:

`/admin`

para verificar:

- [ ] Fluidez en la edición de menús.
- [ ] Lectura correcta de la base de datos.
- [ ] Actualización de productos.
- [ ] Visualización correcta de imágenes.
- [ ] Funcionamiento responsive.
- [ ] Carga correcta de la landing.

### 🔄 Modificaciones solicitadas por el cliente

Si el cliente solicita cambios o ajustes posteriores tras la entrega:

1. Entrar en el directorio correspondiente:

~~~text
projects/[nombre-cliente]/
~~~

2. Abrir el entorno de trabajo.
3. Comentar directamente a Claude los cambios específicos solicitados.
4. Aplicar los cambios sobre el código base.
5. Comprobar el proyecto.
6. Actualizar el despliegue.

> [!IMPORTANT]
> **Mantén siempre el proyecto del cliente aislado y trabaja sobre su directorio correspondiente.** No modifiques recursos de otros clientes ni procesos paralelos.

---

# 🧾 Checklist final de entrega

## 🌐 Web

- [ ] Landing page terminada.
- [ ] Menú digital funcional.
- [ ] Diseño Desktop revisado.
- [ ] Diseño móvil revisado.
- [ ] Responsive comprobado.
- [ ] Navegación comprobada.

## 🗄️ Convex

- [ ] Base de datos conectada.
- [ ] Productos cargando correctamente.
- [ ] Categorías cargando correctamente.
- [ ] Edición del menú funcionando.
- [ ] Datos de producción comprobados.

## 🖼️ Imágenes

- [ ] Imágenes generadas.
- [ ] Estilo aprobado por el cliente.
- [ ] Imágenes vinculadas mediante slug.
- [ ] Imágenes faltantes identificadas.
- [ ] Recursos optimizados.
- [ ] Carga comprobada.

## ☁️ Cloudflare

- [ ] Build correcto.
- [ ] Deploy realizado.
- [ ] URL pública funcionando.
- [ ] Variables de entorno configuradas.
- [ ] Panel `/admin` comprobado.

## 📦 Entrega

- [ ] Cliente ha recibido la URL.
- [ ] Cliente ha recibido el acceso administrativo por un canal seguro.
- [ ] Se ha comprobado la edición del menú.
- [ ] Se ha realizado la revisión final.
- [ ] Se han documentado posibles tareas pendientes.

---

## 🎨 Convenciones visuales utilizadas en este manual

GitHub Markdown permite utilizar **negritas**, *cursivas*, tablas, listas, checkboxes, código, enlaces, separadores, emojis y bloques de aviso. Para diferenciar visualmente la información se utilizan especialmente:

> [!NOTE]
> **Información:** contexto o explicación.

> [!TIP]
> **Consejo:** recomendación práctica.

> [!IMPORTANT]
> **Importante:** requisito que debe respetarse.

> [!WARNING]
> **Advertencia:** posible problema que requiere atención.

> [!CAUTION]
> **Precaución:** acción que puede provocar pérdida o modificación no deseada.

---

<div align="center">

### 🚀 ROWE
**Manual operativo — Despliegue de webs y menús digitales**

*Documento interno de trabajo*

</div>
