import { loadAnthropicTranslator } from "./index.js";
import { makeVendorTranslator } from "@intisy-ai/basekit/ir";

/**
 * The Anthropic translator, as every consumer takes it.
 *
 * @remarks
 * Built by basekit/ir's `makeVendorTranslator`, so it loads the TeaVM module lazily on first use and
 * carries the synchronous handles the Java routing engine reaches it through.
 */
export const anthropicTranslator = makeVendorTranslator(loadAnthropicTranslator, {
  decodeRequest: (m) => m.anthropicDecodeRequest,
  encodeRequest: (m) => m.anthropicEncodeRequest,
  decodeResponse: (m) => m.anthropicDecodeResponse,
  encodeResponse: (m) => m.anthropicEncodeResponse,
  newStreamDecoder: (m) => m.anthropicNewStreamDecoder,
  newStreamEncoder: (m) => m.anthropicNewStreamEncoder,
});
