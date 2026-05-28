# Setup de Visual Studio Code

Vamos a usar VSCode como "casa" del proyecto: editor + terminal en la misma ventana. ~5 minutos.

---

## 1. Instalar VSCode

Descargá desde [code.visualstudio.com](https://code.visualstudio.com/) e instalalo. Sin secretos — siguiente, siguiente, listo.

## 2. Abrir una carpeta como proyecto

VSCode trabaja con el concepto de "carpeta = proyecto". Cuando empieces tu proyecto del taller:

`File → Open Folder…` → elegí la carpeta del proyecto.

## 3. Abrir la terminal integrada

`` Ctrl + ` `` (Windows/Linux) o `` Cmd + ` `` (Mac). Aparece una terminal abajo, parada en la carpeta del proyecto. Desde acá vas a correr `gemini`.

## 4. Extensiones recomendadas

Click en el ícono de extensiones (cuadrados a la izquierda) o `Ctrl/Cmd + Shift + X`. Buscá e instalá:

| Extensión | Para qué |
|---|---|
| **Markdown All in One** | Previsualizar archivos `.md` cómodamente (los outputs del agente). |
| **Python** (Microsoft) | Por si tu proyecto involucra scripts `.py` o notebooks. |
| **R** (REditorSupport) | Equivalente para R. |

Las tres son opcionales para este taller, pero te dejan el entorno preparado por si querés ir más lejos.

## 5. ¿Y Python / R para qué?

No necesitás saber Python ni R para este taller. La razón de tenerlos a mano es esta: **Gemini CLI puede escribir y ejecutar código** en ambos lenguajes. Si más adelante querés que el agente te ayude a analizar un CSV, hacer un gráfico, limpiar datos, o cualquier tarea cuantitativa, vas a querer tener instalado el lenguaje correspondiente.

Para el taller, las extensiones alcanzan. Si después querés instalar Python o R en sí, hay buenas guías oficiales — pero eso es para "después".

## 6. Tip — desactivá otros copilots

Si ya tenés GitHub Copilot, Cursor, u otro asistente de IA integrado en VSCode, **desactivalo durante el taller**. Queremos practicar con Gemini CLI sin que se mezclen sugerencias de dos agentes simultáneos.

Para desactivar Copilot temporalmente: clic en el ícono de Copilot abajo a la derecha → "Disable Copilot".

---

## Verificación final

Antes del taller, asegurate de poder hacer estos 4 pasos seguidos sin trabarte:

1. Abrir VSCode.
2. `File → Open Folder…` y abrir cualquier carpeta de prueba.
3. Abrir la terminal integrada.
4. Escribir `gemini` y que entre al prompt del CLI.

Si los 4 funcionan, estás listo.
