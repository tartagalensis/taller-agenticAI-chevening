# Plan de implementación — Taller Agentic AI Chevening

Diseño aprobado en [docs/superpowers/specs/2026-05-28-taller-agentic-ai-chevening-design.md](docs/superpowers/specs/2026-05-28-taller-agentic-ai-chevening-design.md).

## Iteración 1 (completada)
Repo con dos tracks: `project_template/` para newbies, `advanced/` para los que quieren ir más allá.

## Iteración 2 (en curso) — Skills y MCP migran a slides

**Motivación:** que durante la charla todos escuchen que skills y MCP existen y son el siguiente paso natural. Tener una carpeta `advanced/` aparte termina siendo material que pocos abrirán; los slides garantizan exposición.

### Cambios

- [ ] Actualizar spec (`docs/superpowers/specs/...`) para reflejar la nueva estructura.
- [ ] Editar `slides/charla.md`: reemplazar la slide única "mirá advanced/" por 4 slides dedicadas (2 skills + 2 MCP). Mantener tono "awareness, no deep dive".
- [ ] Editar `README.md` raíz: sacar fila `advanced/` del mapa del repo, sacar sección "para los que se enganchen".
- [ ] Borrar carpeta `advanced/` completa (4 archivos: README.md, skills.md, mcp.md, ejemplo-skill/SKILL.md).
- [ ] Re-renderizar `slides/charla.html` con Marp.
- [ ] Commit.

### Estructura final

```
taller-agenticAI-chevening/
├── README.md
├── setup/
│   ├── setup-gemini-cli-mac.md
│   ├── setup-gemini-cli-windows.md
│   └── setup-vscode.md
├── project_template/
│   ├── GEMINI.md
│   ├── README.md
│   ├── docs/ejemplo-fuente.md
│   └── output/.gitkeep
└── slides/
    ├── charla.md
    └── charla.html (generado)
```

Más simple. Una sola fuente de verdad para los temas avanzados: las slides.
