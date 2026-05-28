# Skills

Una **skill** es una receta empaquetada que el agente puede invocar cuando una tarea aplica. Vive como un archivo `SKILL.md` con instrucciones claras de qué hace, cuándo usarla, y cómo proceder.

## Por qué importa

Sin skills, cada vez que querés que el agente haga "X" (revisar un memo, estructurar notas, comparar dos drafts), tenés que explicarle el cómo en el prompt. Es ruidoso, inconsistente, y se olvida entre sesiones.

Con skills:
- El cómo está versionado en archivo.
- El agente decide solo cuándo aplicarla, leyendo el `description` de la skill.
- Si la skill mejora, mejora para todos los proyectos que la usan.

## Anatomía de una skill

Un archivo `SKILL.md` típico tiene:

```markdown
---
name: nombre-corto-kebab-case
description: Una línea clara que diga cuándo invocar esta skill. El agente
  la lee para decidir si la skill aplica a la tarea actual.
---

# Nombre de la skill

## When to use
[Bullets de situaciones en las que la skill aplica]

## What it does
[Descripción de qué produce la skill]

## How to proceed
[Pasos, criterios, reglas, ejemplos]
```

El `description` del frontmatter es crítico: ahí el agente decide si la skill es relevante. Tiene que ser específico, no vago.

## Cuándo conviene crear una

- Hacés la misma cosa, de la misma forma, más de 3 veces.
- Te encontrás copiando un mismo bloque de instrucciones a varios proyectos.
- Querés que el agente sea más consistente en cómo encara cierta clase de tarea.
- Tenés convenciones (de estilo, de formato, de proceso) que querés que respete sin tener que repetirlas.

## Cuándo NO

- Tarea one-off → mejor un prompt directo.
- Tarea específica de UN proyecto → mejor agregarla en `GEMINI.md` de ese proyecto.
- Recién estás empezando → primero entendé el flujo básico, después optimizás.

## Dónde van las skills

Depende del CLI. En Gemini CLI las extensiones funcionan distinto que en Claude Code; consultá la doc oficial de tu herramienta. Como concepto, *qué es una skill* y *cuándo invocarla* es portable; *dónde se guarda el archivo* es específico de cada agente.

- **Claude Code:** `.claude/skills/<nombre>/SKILL.md` en el proyecto, o globalmente en `~/.claude/skills/`.
- **Gemini CLI:** ver doc oficial — el sistema de extensiones es propio.

## Ejemplo

Mirá [`ejemplo-skill/SKILL.md`](./ejemplo-skill/SKILL.md) para una skill chica de revisión de memos.

## Lecturas

- [Claude Code skills (doc oficial)](https://docs.claude.com/en/docs/claude-code/skills)
- [Anthropic — Engineering deep dive sobre skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- El [`project_demo/.claude/skills/`](https://github.com/ddekadt/MY580_agentic_ai/tree/main/project_demo/.claude/skills) de De Kadt tiene 5 ejemplos bien hechos (reviewer, sweep, critic, maintenance, style-guide).
