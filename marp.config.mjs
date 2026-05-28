// Marp config: render Mermaid code fences as <div class="mermaid"> divs
// so the browser-side mermaid.js (loaded from slides/mermaid.min.js) renders them.
//
// Source markdown keeps ```mermaid blocks — GitHub and VSCode render them natively.
// Marp HTML output converts them to divs that mermaid.js picks up on load.

export default {
  engine: ({ marp }) => {
    const defaultFence = marp.markdown.renderer.rules.fence;

    marp.markdown.renderer.rules.fence = (tokens, idx, options, env, slf) => {
      const token = tokens[idx];
      if (token.info && token.info.trim() === 'mermaid') {
        return `<div class="mermaid">\n${token.content}</div>\n`;
      }
      return defaultFence(tokens, idx, options, env, slf);
    };

    return marp;
  },
};
