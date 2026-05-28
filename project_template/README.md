# Tu primer proyecto con Gemini CLI

Esta carpeta es un **kit base**. Copiala, completala con tu caso, y arrancale al agente.

## 3 pasos para empezar

### 1. Hacé una copia con el nombre de tu proyecto

Desde la terminal:

```bash
cp -r project_template mi-proyecto
cd mi-proyecto
```

(En Windows con PowerShell: `Copy-Item project_template mi-proyecto -Recurse` y después `cd mi-proyecto`.)

O, simplemente, copiá la carpeta en Finder/Explorer y renombrala.

### 2. Completá `GEMINI.md`

Abrí `GEMINI.md` en VSCode. Vas a ver tres bloques con comentarios `<!-- ... -->` que te dicen qué reemplazar:

- **What this project is** → qué estás tratando de hacer.
- **What I want to produce** → qué querés que el agente te entregue.
- **Output language** → en qué idioma escribe.

Tres frases. Eso es todo lo que necesitás antes de arrancar.

### 3. (Opcional) Metele tus fuentes en `docs/`

Si tu proyecto trabaja con documentos, papers, notas, o cualquier texto base, copialos en `docs/`. El agente los va a leer cuando le pidas que los use.

Hay un `ejemplo-fuente.md` ahí para que veas el formato. Borralo o reemplazalo con lo tuyo.

### 4. Hablale al agente

Abrí la terminal integrada de VSCode (Ctrl/Cmd + `` ` ``), parate en la carpeta del proyecto, y corré:

```bash
gemini
```

Cuando entre, mandale tu primera instrucción. Algo como:

> *"Leé GEMINI.md y los archivos de docs/. Antes de empezar, proponeme un plan corto de cómo encararías esto."*

---

## ¿Qué hace la carpeta `output/`?

Ahí va lo que el agente escribe. `GEMINI.md` ya le dice que ese es el lugar — no tenés que pedírselo cada vez.

## ¿Cómo sigo después?

Si esta forma de trabajar te gustó, mirá `advanced/` en el repo principal. Hay material sobre **skills** (recetas reusables que el agente puede invocar) y **MCP** (conectar al agente con herramientas externas como filesystem, GitHub, etc).

## Si algo no funciona

Lo más común:
- **El agente no encuentra `GEMINI.md`** → asegurate de haber corrido `gemini` desde *adentro* de la carpeta del proyecto.
- **El agente "inventa" cosas** → en tu prompt pedile explícitamente que se ciña a `docs/` y que diga "no sé" si no tiene fuente.
- **Te quedaste sin requests** → mirá la nota sobre API key gratis en las guías de setup.
