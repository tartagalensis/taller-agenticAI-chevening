# Design — Taller Agentic AI Chevening 2025-26

**Fecha:** 2026-05-28
**Autor:** Franco Galeano
**Inspirado en:** [MY580_agentic_ai](https://github.com/ddekadt/MY580_agentic_ai) (Daniel de Kadt, LSE)

## Contexto

Workshop corto (30-45 min) para becarios Chevening 2025-26 sobre cómo usar herramientas de agentic AI en trabajo de investigación, policy, y profesional. Audiencia mayoritariamente no-técnica (políticas públicas, derecho, relaciones internacionales). Algunos participantes con más fluidez técnica.

## Decisiones clave

| Dimensión | Decisión |
|---|---|
| Tool principal | Gemini CLI (free tier con cuenta personal Google) |
| IDE | VSCode (no Positron) |
| Idioma materiales humanos | Español (README, slides, guías) |
| Idioma archivos técnicos | Inglés (GEMINI.md, SKILL.md, code) |
| Formato slides | Marp (Markdown→deck, extensión VSCode) |
| Imágenes | Diagramas propios (Mermaid). Sin scraping de De Kadt. |
| Tema demo en vivo | Proyecto real de un asistente (no pre-armado) |
| Tema ejercicio cierre | Template genérico + fuente ejemplo |

## Flujo del taller

1. **Pre-taller (asincrónico):** Asistentes hacen setup en sus laptops con guías del repo.
2. **Vivo (30-45 min):**
   - Charla intro + Q&A (~20')
   - Demo en vivo sobre proyecto real de un asistente (~10')
   - Cierre: arrancan su propio proyecto desde `project_template/` (~10')

## Estructura del repo

```
taller-agenticAI-chevening/
├── README.md                          # (es) Agenda + cómo prepararse
├── setup/
│   ├── setup-gemini-cli-mac.md        # (es)
│   ├── setup-gemini-cli-windows.md    # (es)
│   └── setup-vscode.md                # (es) con awareness de Python/R
├── project_template/                  # Track newbie — kit base
│   ├── GEMINI.md                      # (en) context skeleton
│   ├── README.md                      # (es) 3 pasos para arrancar
│   ├── docs/
│   │   └── ejemplo-fuente.md          # Fuente sample para tener algo concreto
│   └── output/.gitkeep
├── advanced/                          # Track avanzado — para los que ya pillan
│   ├── README.md                      # (es)
│   ├── skills.md                      # (es) qué son, cuándo, ejemplo
│   ├── mcp.md                         # (es) qué es MCP, cómo agregar server
│   └── ejemplo-skill/
│       └── SKILL.md                   # (en) skill chica de referencia
└── slides/
    ├── charla.md                      # (es) Marp deck
    └── images/                        # Diagramas/imágenes propias
```

## Componentes — diseño detallado

### `README.md` (raíz)

Operativo. Estructura: título → qué hacemos → setup pre-taller (links a 3 guías) → qué pasa el día del taller → mapa del repo → créditos.

### `setup/` (3 guías en español)

- **macOS:** Node 20+ vía Homebrew/installer → `npm install -g @google/gemini-cli` → login Google personal → verify.
- **Windows:** Node installer (nodejs.org) → npm install Gemini CLI → login Google → verify. PowerShell en vez de zsh.
- **VSCode:** Install + abrir carpeta + extensiones recomendadas (Markdown All in One, Python, R) + terminal integrada + tip sobre Copilot. Python/R como awareness (no requeridos para el taller).

### `project_template/` (track newbie)

`GEMINI.md` skeleton con defaults sensatos:
- Plan first / wait for OK before editing.
- No invent facts, numbers, citations.
- Output → `output/`, sources → `docs/` (read-only).
- Ask before scope changes.
- Two `<!-- ... -->` placeholders para que completen su caso.

`README.md`: 3 pasos (abrir VSCode → terminal → `gemini` + primer prompt sugerido).

`docs/ejemplo-fuente.md`: brief sintético, ~250 palabras, sobre un tema universal (digital divide / acceso a internet rural). Da algo concreto para hablar con el agente al primer prompt.

### `advanced/` (track avanzado)

Material para "después del taller, si te enganchaste":

- `skills.md`: qué es una skill (archivo `SKILL.md` que el agente carga cuando aplica), cuándo conviene, anatomía. Punteros a doc oficial.
- `mcp.md`: qué es Model Context Protocol, qué problema resuelve, cómo agregar un server en Gemini CLI.
- `ejemplo-skill/SKILL.md`: skill chica concreta — "memo-reviewer" o equivalente — para inspirar.

### `slides/charla.md` (Marp, ~12-14 slides)

Bloques: apertura (1-2) → qué es agentic AI (3-4) → contexto es todo (3) → modos de falla (2) → demo bridge (1) → cierre + advanced (2-3).

Diagramas propios en Mermaid. Cero imágenes scrapeadas de De Kadt. Crédito explícito en slide de cierre.

## Lo que NO va

- Datos reales tipo MSOA/Census como en De Kadt — audiencia no es data science.
- `project_demo/` separado — la demo es en vivo sobre proyecto real de un asistente.
- Imágenes generadas por IA — mensaje contradictorio en un taller de IA.
- Materiales en R/Quarto — toolchain Positron-dependiente.

## Créditos

Workshop inspirado conceptualmente en MY580: Agentic AI for Social Science and Data Science Research de Daniel de Kadt (LSE). Materiales propios, sin copia de assets del repo original.
