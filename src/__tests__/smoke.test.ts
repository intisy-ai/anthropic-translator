import { describe, it, expect } from "vitest";
import { loadAnthropicTranslator } from "../index.js";

describe("anthropic-translator toolchain", () => {
  it("loads the TeaVM bundle and round-trips a request through the Java codec", async () => {
    const mod = await loadAnthropicTranslator();
    const wireJson = JSON.stringify({
      model: "claude-opus-4-8",
      max_tokens: 16,
      messages: [{ role: "user", content: "hi" }],
    });
    const out = mod.anthropicDecodeRequest(wireJson);
    expect(JSON.parse(out).model).toBe("claude-opus-4-8");
  });
});
