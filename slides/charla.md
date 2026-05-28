---
marp: true
theme: default
paginate: true
backgroundColor: #fff
style: |
  section { font-size: 26px; }
  h1 { font-size: 48px; }
  h2 { font-size: 36px; }
  code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; }
  .small { font-size: 20px; color: #666; }
  .center { text-align: center; }
---

<!-- _class: lead -->

# Agentic AI en la práctica

### Una intro corta y opinada para becarios Chevening

<br>

<span class="small">Franco Galeano · Mayo 2026 · Inspirado en MY580 (LSE)</span>

---

## Disclaimer

- Hay **cientos** de herramientas, opiniones, y "mejores prácticas" en este espacio.
- **Todo cambia rápido.** Parte de lo que diga hoy va a estar desactualizado en 6 meses.
- **No hay una forma correcta.** Cualquiera que les diga lo contrario les está vendiendo algo.

<br>

El objetivo de hoy: **que se vayan capaces de empezar**, no enseñarles la receta perfecta.

---

## Agenda (30-45 min)

1. **Charla intro** — qué es agentic AI, qué cuidados tener (15-20 min).
2. **Demo en vivo** — sobre un proyecto real de alguien acá (10 min).
3. **Manos a la obra** — cada uno arranca su template (10 min).

<br>

Materiales: <span class="small">github.com/[tu-usuario]/taller-agenticAI-chevening</span>

---

<!-- _class: lead -->

# Parte 1
## ¿Qué es "agentic AI"?

---

## Chat ≠ Agente

```mermaid
flowchart LR
  subgraph Chat
    U1[Vos] --> M1[Modelo]
    M1 --> R1[Respuesta]
  end
```

```mermaid
flowchart LR
  subgraph Agente
    U2[Vos] --> H[Harness]
    H --> M2[Modelo]
    M2 --> H
    H --> T[Herramientas:<br/>archivos, terminal, web]
    T --> H
    H --> R2[Acciones + Resultado]
  end
```

El **harness** es lo que convierte un modelo (chat) en un agente: le da memoria, herramientas, y la capacidad de ejecutar pasos.

---

## Lo que hace un agente

```mermaid
flowchart LR
  P[1. Planifica] --> T[2. Usa herramientas]
  T --> E[3. Ejecuta multi-paso]
  E --> V[4. Verifica / vuelve a planificar]
  V --> T
```

- Lee y escribe archivos en tu disco.
- Corre comandos en la terminal.
- Usa el resultado para decidir el próximo paso.
- Repite hasta terminar (o bloquearse).

---

## ¿Por qué les importa a Chevening?

Casos donde el patrón "agente con archivos" rinde:

- Sintetizar varios papers / briefings.
- Drafts iniciales de policy memos, op-eds, propuestas.
- Ordenar y estructurar notas de campo, entrevistas, lectura.
- Comparar documentos largos (acuerdos, leyes, contratos).
- Cualquier tarea repetitiva con texto.

<br>

**No** es para reemplazarles el pensamiento. Es para acelerarles las primeras 2-3 iteraciones.

---

<!-- _class: lead -->

# Parte 2
## Contexto es todo

---

## El agente solo "sabe" lo que está en el contexto

```mermaid
flowchart LR
  subgraph Contexto
    P[Tu prompt]
    M[GEMINI.md<br/>memoria del proyecto]
    F[Archivos que abre]
    H[Historial de la sesión]
  end
  Contexto --> A[Agente]
  A --> O[Output]
```

- Lo que **no esté en el contexto, no existe** para el agente.
- Su "memoria" entre sesiones la cargás vos, en archivos.
- Mientras más relevante y compacto, mejor responde.

---

## `GEMINI.md` — memoria persistente

Un archivo en la raíz del proyecto que el agente lee al inicio de cada sesión:

```markdown
## What this project is
Sintetizar 3 papers sobre transferencias condicionadas
para mi tesis.

## How to work with me
- Plan before acting.
- Don't invent facts.
- Output goes to `output/`.
- Sources in `docs/` are read-only.
```

Convención: 3-4 secciones, **frases cortas**, reglas explícitas. Si tu proyecto crece, el archivo crece con él.

---

## Higiene de sesión

| Hacé | No hagas |
|---|---|
| Planificar antes de actuar | Pedirle "hacé todo" en un prompt gigante |
| Scope chico, iteraciones cortas | Sesiones de 3 hs sin pausa |
| Verificar lo que escribió | Aceptar el output sin leerlo |
| Decirle qué *no* hacer | Asumir que va a hacer lo razonable |

<br>

Regla de oro: **si no leíste el output, no lo terminaste.**

---

<!-- _class: lead -->

# Parte 3
## Nada es lo que parece

---

## Sycophancy + confidently wrong

- Los modelos están entrenados a sonar útiles y seguros.
- Eso los lleva a:
  - Decir "tenés razón" cuando no la tenés.
  - Inventar citas, números, autores que suenan creíbles.
  - Sostener una respuesta incorrecta cuando los confrontás.

<br>

**Verificá.** Especialmente: números, citas, nombres propios, fechas. Si suena demasiado bien, probablemente es alucinación.

---

## Deuda técnica y cognitiva

**Deuda técnica:** el agente puede producir código/documentos que funcionan pero son frágiles, inconsistentes, o difíciles de mantener. *Si no entendés lo que generó, no podés debuggearlo.*

**Deuda cognitiva:** si delegás todo el pensamiento, no aprendés. *Investigación delegada a un agente no es tu investigación.*

<br>

Usalo para **acelerarte** en las partes mecánicas. Mantené tu cerebro encendido en las decisiones.

---

<!-- _class: lead -->

# Parte 4
## Demo en vivo

<br>

<span class="small">Sobre un proyecto real de alguien en la sala.</span>

---

<!-- _class: lead -->

# Parte 5
## Manos a la obra

---

## Lo que vas a hacer ahora (10 min)

1. Abrí `project_template/` en VSCode.
2. Copialo y renombralo con tu proyecto:
   ```bash
   cp -r project_template mi-proyecto
   cd mi-proyecto
   ```
3. Editá `GEMINI.md` — completá las dos frases (qué hacés, qué querés producir).
4. Abrí terminal integrada, corré `gemini`, y mandá tu primer prompt.

<br>

No hace falta terminar nada hoy. **Solo arrancar.**

---

## Si te enganchaste, mirá `advanced/`

- **Skills** — recetas reusables que el agente invoca cuando aplican. Útil cuando hacés la misma cosa muchas veces.
- **MCP** — conectar al agente con herramientas externas (filesystem, web search, GitHub). Útil cuando necesitás info de afuera del proyecto.

<br>

Cero apuro. Cuando lo necesiten, está ahí.

---

## Lo que me gustaría que se lleven

- **El agente es una herramienta**, no un colega. La responsabilidad sigue siendo tuya.
- **Contexto > prompt fancy.** Un `GEMINI.md` bien hecho rinde más que mil "actúa como experto".
- **Plan first, verify always.** Pedile que piense antes de actuar; lee lo que escribió.
- **El ecosistema cambia rápido.** Lo que importa son los patrones, no los productos.

---

## Créditos y referencias

Inspirado conceptualmente en:

**MY580 — Agentic AI for Social Science and Data Science Research**
Daniel de Kadt · London School of Economics
[github.com/ddekadt/MY580_agentic_ai](https://github.com/ddekadt/MY580_agentic_ai)

<br>

Las metáforas, el framing, y muchos de los ejemplos provienen de ese workshop. Materiales acá son propios (sin reuso de assets).

---

<!-- _class: lead -->

# Gracias

<br>

Issues y dudas: en el repo del taller.
