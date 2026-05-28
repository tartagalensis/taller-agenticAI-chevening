# Setup de Gemini CLI — macOS

Guía para instalar Gemini CLI en Mac. ~10 minutos. Solo se hace una vez.

**Requisitos previos:**
- Una Mac donde puedas instalar software.
- Una cuenta **personal** de Google (las cuentas de Workspace/universidad no suelen calificar para el free tier).
- Internet.

**Free tier (a mayo 2026):** 60 requests/min y 1.000 requests/día sobre Gemini 2.5 Pro. Más que suficiente para el taller.

---

## 1. Instalar Node.js

Gemini CLI necesita **Node.js 20 o superior**.

Abrí **Terminal** (Spotlight → "Terminal") y corré:

```bash
node --version
```

- Si ves algo como `v20.x.x` o superior, listo. Pasá al paso 2.
- Si no aparece nada o la versión es menor a 20, instalalo así:

**Opción A — con Homebrew (si ya lo tenés):**
```bash
brew install node
```

**Opción B — sin Homebrew:**
1. Andá a [nodejs.org](https://nodejs.org/) y descargá la versión **LTS** para macOS.
2. Abrí el `.pkg` y seguí las instrucciones.

Volvé a verificar:
```bash
node --version
```

## 2. Instalar Gemini CLI

En Terminal:

```bash
npm install -g @google/gemini-cli
```

Si te aparece un error de permisos (`EACCES`), **no uses sudo**. En lugar de eso, configurá npm para usar tu carpeta personal:

```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

Después volvé a correr el `npm install` de arriba.

Verificá la instalación:

```bash
gemini --version
```

## 3. Login con tu cuenta de Google

Iniciá Gemini CLI:

```bash
gemini
```

La primera vez te va a pedir autenticarte. Elegí **"Login with Google"** (esa es la opción que desbloquea el free tier). Se va a abrir tu navegador — entrá con tu cuenta **personal** de Google y aprobá el acceso. El token queda guardado localmente.

## 4. Probá que funciona

Una vez dentro de Gemini CLI, escribí algo simple:

```
Hola, contame brevemente cuánto uso gratis tengo y qué pasa si me lo agoto.
```

Si te responde, está todo bien.

Para salir: escribí `/quit` o apretá `Ctrl+C` dos veces.

---

## Comandos útiles dentro del CLI

- `/help` — lista los comandos
- `/quit` — salir
- `Ctrl+C` — cancelar la acción actual

## Cuidados y límites

- **1.000 requests/día**, se resetea cada 24 hs.
- **No pegues datos privados, secretos, ni info personal sensible.** Google puede usar inputs del free tier para mejorar modelos.
- Si te agotás los requests, podés generar una API key gratis en [aistudio.google.com](https://aistudio.google.com/) y agregarla al shell:
  ```bash
  echo 'export GEMINI_API_KEY="tu-key-aca"' >> ~/.zshrc
  source ~/.zshrc
  ```

## ¿Algo no funciona?

Abrí un issue en este repo describiendo qué paso falló y qué mensaje viste. Si es antes del taller, mejor — lo resolvemos sin presión.
