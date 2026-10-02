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

### ✅ Acciones

- [ ] Tomar fotos del local.
- [ ] Fotografiar el menú físico.
- [ ] Fotografiar los productos.
- [ ] Fotografiar detalles característicos del establecimiento.
- [ ] Analizar la identidad visual.
- [ ] Analizar la paleta de colores.
- [ ] Analizar el *lore*: historia, valores y estilo del negocio.
- [ ] Definir qué puede editar el usuario/cliente.
- [ ] Definir la estructura completa del sitio.

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

### ⚙️ Procedimiento

1. [ ] Entrar en **Claude Design**.
2. [ ] Crear un nuevo proyecto asignándole el **nombre del negocio**.
3. [ ] En la sección **Design System**, seleccionar `none`.
4. [ ] Adjuntar las fotos del local.
5. [ ] Adjuntar las fotos de referencia.
6. [ ] Introducir el prompt de diseño.
7. [ ] Comprobar que existe diseño para **Desktop**.
8. [ ] Comprobar la adaptación **responsive para móvil**.

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

### ✅ Acciones

- [ ] Abrir la terminal.
- [ ] Situarse en la carpeta vacía del nuevo proyecto.
- [ ] Ejecutar Claude Code.
- [ ] Invocar la skill automatizada de la agencia.
- [ ] Conectar Convex.
- [ ] Configurar producción.
- [ ] Desplegar en Cloudflare.
- [ ] Comprobar que el dueño puede editar los ítems del menú.

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

### ⚙️ Preparación

- [ ] Mantener abierta una pestaña en **Kie AI (Nano Banana Pro)**.
- [ ] Abrir una nueva terminal secundaria en Claude Code.
- [ ] Mantener la terminal principal ocupada con el despliegue anterior.
- [ ] Analizar los ítems existentes en la base de datos.
- [ ] Generar primero varias muestras.
- [ ] Esperar la selección del cliente.
- [ ] Generar posteriormente todas las imágenes con el estilo elegido.

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

### 🔄 Flujo

1. [ ] Revisar las imágenes de prueba generadas en Kie AI.
2. [ ] Mostrar las opciones al cliente.
3. [ ] Registrar la opción elegida.
4. [ ] Comunicar la selección al agente.
5. [ ] Aplicar el patrón elegido al resto de productos.

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

### ✅ Acciones

- [ ] Revisar las imágenes originales.
- [ ] Identificar las imágenes por el patrón acordado.
- [ ] Integrarlas creativamente en la landing.
- [ ] Crear fondos coherentes con la estética del negocio.
- [ ] Ajustar la opacidad.
- [ ] Mantener la legibilidad del texto.
- [ ] Valorar el uso de una fotografía original como fondo.
- [ ] Comprobar Desktop y móvil.

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
