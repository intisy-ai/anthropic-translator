let modulePromise: Promise<typeof import("./generated/anthropic-translator.teavm.js")> | null = null;

export function loadAnthropicTranslator(): Promise<typeof import("./generated/anthropic-translator.teavm.js")> {
  if (!modulePromise) {
    modulePromise = import("./generated/anthropic-translator.teavm.js");
  }
  return modulePromise;
}

export * from "./translators.js";
export * from "../core-ir/dist/index.js";
