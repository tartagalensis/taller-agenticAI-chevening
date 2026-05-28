# Track avanzado

Si ya entendiste el flujo básico (proyecto + `GEMINI.md` + prompts) y querés ir un paso más allá, esto es para vos.

No esperamos cubrir esto en vivo en el taller. Es material para "después, cuando te enganches".

## Dos vectores naturales de "siguiente paso"

| Tema | Para qué sirve | Material |
|---|---|---|
| **Skills** | Empaquetar recetas reusables que el agente puede invocar cuando aplican (ej: revisar un memo, hacer un lit review estructurado). | [skills.md](./skills.md) + [ejemplo-skill/](./ejemplo-skill/) |
| **MCP** | Darle al agente herramientas externas: filesystem, web search, GitHub, Slack, bases de datos. Sale del "yo y mis archivos" hacia "el mundo". | [mcp.md](./mcp.md) |

## ¿Por dónde arrancar?

- Si lo que hacés repetidamente es del mismo tipo (siempre revisás drafts, siempre estructurás notas, siempre comparás documentos), **andá a skills**.
- Si necesitás que el agente acceda a algo *afuera* de tu proyecto (buscar en la web, leer correo, consultar una API), **andá a MCP**.

## Disclaimer

Este espacio cambia rápido. Lo que escribimos hoy puede estar parcialmente desactualizado en 6 meses. Los conceptos (skills como recetas, MCP como protocolo) son estables; los detalles de configuración no necesariamente.
