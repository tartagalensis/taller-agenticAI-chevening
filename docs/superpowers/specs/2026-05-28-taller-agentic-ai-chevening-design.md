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
├── project_template/                  # Kit base para el ejercicio de cierre
│   ├── GEMINI.md                      # (en) context skeleton
│   ├── README.md                      # (es) 3 pasos para arrancar
│   ├── docs/
│   │   └── ejemplo-fuente.md          # Fuente sample para tener algo concreto
│   └── output/.gitkeep
└── slides/
    ├── charla.md                      # (es) Marp deck (incluye skills + MCP)
    └── images/                        # Diagramas/imágenes propias
```

**Cambio respecto a la primera iteración:** los temas avanzados (skills + MCP) se cubren dentro de los slides, no en una carpeta separada `advanced/`. Razón: garantizar que todos los escuchen durante la charla, no depender de que abran material extra.

## Componentes — diseño detallado

### `README.md` (raíz)

Operativo. Estructura: título → qué hacemos → setup pre-taller (links a 3 guías) → qué pasa el día del taller → mapa del repo → créditos.

### `setup/` (3 guías en español)

- **macOS:** Node 20+ vía Homebrew/installer → `npm install -g @google/gemini-cli` → login Google personal → verify.
- **Windows:** Node installer (nodejs.org) → npm install Gemini CLI → login Google → verify. PowerShell en vez de zsh.
- **VSCode:** Install + abrir carpeta + extensiones recomendadas (Markdown All in One, Python, R) + terminal integrada + tip sobre Copilot. Python/R como awareness (no requeridos para el taller).

### `project_template/`

`GEMINI.md` skeleton con defaults sensatos:
- Plan first / wait for OK before editing.
- No invent facts, numbers, citations.
- Output → `output/`, sources → `docs/` (read-only).
- Ask before scope changes.
- Two `<!-- ... -->` placeholders para que completen su caso.

`README.md`: 3 pasos (abrir VSCode → terminal → `gemini` + primer prompt sugerido).

`docs/ejemplo-fuente.md`: brief sintético, ~250 palabras, sobre un tema universal (digital divide / acceso a internet rural). Da algo concreto para hablar con el agente al primer prompt.

### `slides/charla.md` (Marp, ~16-18 slides)

Bloques: apertura (1-2) → qué es agentic AI (3-4) → contexto es todo (3) → modos de falla (2) → demo bridge (1) → skills + MCP como awareness (4) → manos a la obra + cierre (2-3).

Los temas avanzados (skills, MCP) van en slides dedicados con tono "esto existe, esto es lo siguiente". Sin deep dive — link a docs oficiales para los que quieran ir más profundo.

Diagramas propios en Mermaid. Cero imágenes scrapeadas de De Kadt. Crédito explícito en slide de cierre.

## Lo que NO va

- Datos reales tipo MSOA/Census como en De Kadt — audiencia no es data science.
- `project_demo/` separado — la demo es en vivo sobre proyecto real de un asistente.
- Imágenes generadas por IA — mensaje contradictorio en un taller de IA.
- Materiales en R/Quarto — toolchain Positron-dependiente.

## Créditos

Workshop inspirado conceptualmente en MY580: Agentic AI for Social Science and Data Science Research de Daniel de Kadt (LSE). Materiales propios, sin copia de assets del repo original.
