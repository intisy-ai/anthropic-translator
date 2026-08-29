let modulePromise: Promise<typeof import("./generated/anthropic-translator.teavm.js")> | null = null;

/**
 * Loads the TeaVM-compiled Anthropic translator module, once.
 *
 * @remarks
 * Concurrent callers share one import, so the module is instantiated exactly once per process.
 *
 * @returns the module, whose exports are the translator's own string functions
 */
export function loadAnthropicTranslator(): Promise<typeof import("./generated/anthropic-translator.teavm.js")> {
  if (!modulePromise) {
    modulePromise = import("./generated/anthropic-translator.teavm.js");
  }
  return modulePromise;
}

export * from "./translators.js";
export * from "@intisy-ai/basekit/ir";
