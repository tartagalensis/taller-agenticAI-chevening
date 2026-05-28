# Setup de Gemini CLI — Windows

Guía para instalar Gemini CLI en Windows. ~10 minutos. Solo se hace una vez.

**Requisitos previos:**
- Una PC con Windows 10 u 11 donde puedas instalar software.
- Una cuenta **personal** de Google (las cuentas de Workspace/universidad no suelen calificar para el free tier).
- Internet.

**Free tier (a mayo 2026):** 60 requests/min y 1.000 requests/día sobre Gemini 2.5 Pro.

---

## 1. Instalar Node.js

Gemini CLI necesita **Node.js 20 o superior**.

Abrí **PowerShell** (Win + R → escribí `powershell` → Enter) y corré:

```powershell
node --version
```

- Si ves algo como `v20.x.x` o superior, listo. Pasá al paso 2.
- Si no aparece nada, o aparece "comando no reconocido", o la versión es menor a 20:
  1. Andá a [nodejs.org](https://nodejs.org/) y descargá la versión **LTS** para Windows (el `.msi`).
  2. Ejecutá el instalador. Dejá todas las opciones por defecto (incluido "Add to PATH").
  3. **Importante:** cerrá y volvé a abrir PowerShell para que el cambio de PATH tome efecto.

Volvé a verificar:
```powershell
node --version
```

## 2. Instalar Gemini CLI

En PowerShell:

```powershell
npm install -g @google/gemini-cli
```

Si te aparecen errores de permisos, abrí PowerShell **como Administrador** (click derecho en PowerShell → "Ejecutar como administrador") y reintentá.

Verificá la instalación:

```powershell
gemini --version
```

Si dice "no se reconoce el comando", cerrá y volvé a abrir PowerShell e intentá de nuevo. Si sigue sin funcionar, posiblemente el directorio global de npm no esté en tu PATH — abrí un issue y lo resolvemos.

## 3. Login con tu cuenta de Google

Iniciá Gemini CLI:

```powershell
gemini
```

La primera vez te va a pedir autenticarte. Elegí **"Login with Google"**. Se va a abrir tu navegador — entrá con tu cuenta **personal** de Google y aprobá el acceso.

## 4. Probá que funciona

Una vez dentro, escribí:

```
Hola, contame brevemente cuánto uso gratis tengo y qué pasa si me lo agoto.
```

Si te responde, está todo bien.

Para salir: `/quit` o `Ctrl+C` dos veces.

---

## Comandos útiles dentro del CLI

- `/help` — lista los comandos
- `/quit` — salir
- `Ctrl+C` — cancelar la acción actual

## Cuidados y límites

- **1.000 requests/día**, se resetea cada 24 hs.
- **No pegues datos privados ni info personal sensible.** Google puede usar inputs del free tier para mejorar modelos.
- Si te agotás los requests, podés generar una API key gratis en [aistudio.google.com](https://aistudio.google.com/) y configurarla como variable de entorno:
  ```powershell
  setx GEMINI_API_KEY "tu-key-aca"
  ```
  Cerrá y abrí PowerShell para que tome efecto.

## ¿Algo no funciona?

Abrí un issue en este repo describiendo qué paso falló y qué mensaje viste. Mejor antes del taller que durante.
