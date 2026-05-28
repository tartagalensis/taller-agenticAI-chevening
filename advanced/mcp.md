# MCP (Model Context Protocol)

**MCP** es un protocolo abierto que estandariza cómo los agentes de IA se conectan con herramientas y fuentes de datos externas. Lo lanzó Anthropic en 2024 y rápidamente se volvió un estándar de facto que adoptaron varios CLIs (Claude Code, Gemini CLI, Cursor, etc.).

## El problema que resuelve

Sin MCP, cada agente tiene su propio sistema de plugins/tools/extensions. Si querés que tu agente lea correo, busque en GitHub, consulte una DB, o acceda a Slack, hay que codear una integración específica para ese agente.

Con MCP, **una sola implementación del servidor MCP** funciona con cualquier cliente que hable MCP. Es como USB para agentes: enchufás un server, lo usa cualquier agente compatible.

## Mental model

```
[Agente / cliente MCP]  ←→  [MCP server]  ←→  [Recurso externo]
       Gemini CLI               filesystem-server         tu disco
       Claude Code              github-server             la API de GitHub
       Cursor                   slack-server              Slack
```

El agente no sabe ni le importa qué hay del otro lado. Solo le pide al server "listame los archivos de X" o "buscame issues en Y", y el server traduce a la API real.

## Para qué te puede servir

Algunos servers útiles para trabajo de investigación / policy:

- **filesystem** — el agente lee y escribe archivos en directorios específicos. Útil si querés que acceda a una carpeta de papers o notas fuera del proyecto actual.
- **web search** (Brave, Exa, etc.) — búsquedas web actualizadas. Útil para que el agente complete información sin alucinarla.
- **github** — leer issues, PRs, código. Útil si trabajás colaborativamente en GitHub.
- **fetch** — pedir URLs específicas y devolver el contenido. Útil para que lea un paper online o una noticia.
- **memory** — un sistema de notas persistentes entre sesiones.
- **time** — fecha/hora actual. El agente normalmente no la sabe.

Lista completa y actualizada: [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers).

## Cómo agregar un server en Gemini CLI

Gemini CLI soporta MCP servers a través de su archivo de configuración. La forma exacta puede cambiar — consultá la [doc oficial de Gemini CLI sobre MCP](https://github.com/google-gemini/gemini-cli) para la versión actualizada.

Como concepto general, el setup tiene 3 piezas:

1. **Tener instalado el server** (típicamente vía `npx`, `uvx`, o un binario).
2. **Declararlo en la config del CLI** (un JSON o YAML que lista name, command, args).
3. **Reiniciar el CLI** y verificar con `/mcp` o equivalente que el server aparezca conectado.

Ejemplo conceptual de cómo se ve la declaración (la sintaxis exacta depende del CLI):

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/yo/papers"]
    }
  }
}
```

## Cuándo conviene

- Necesitás info actualizada (web, news, GitHub) → web search / fetch / github server.
- El agente necesita ver archivos fuera del proyecto actual → filesystem server con scope explícito.
- Trabajás en un equipo y querés que el agente lea/escriba en herramientas compartidas → Slack, Notion, Linear servers.

## Cuándo NO

- Para tu primer proyecto, no lo necesitás. `GEMINI.md` + `docs/` + `output/` cubren el 90% de los casos.
- Cada server suma superficie de seguridad. Pensá qué le estás dando acceso al agente antes de enchufar.

## Cuidados de seguridad

- Algunos servers (filesystem, shell) son **muy potentes** — pueden modificar tu sistema. Limitales el scope a directorios específicos.
- No le des credenciales sensibles al agente sin entender qué va a hacer con ellas.
- Server pequeños y específicos > server gigantes con permisos amplios.

## Lecturas

- [modelcontextprotocol.io](https://modelcontextprotocol.io/) — sitio oficial del protocolo.
- [Lista de servers](https://github.com/modelcontextprotocol/servers) — oficial + comunidad.
- [Anuncio original de Anthropic](https://www.anthropic.com/news/model-context-protocol).
