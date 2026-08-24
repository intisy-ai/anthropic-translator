import { loadAnthropicTranslator } from "./index.js";
import { makeVendorTranslator } from "@intisy-ai/core-ir";

export const anthropicTranslator = makeVendorTranslator(loadAnthropicTranslator, {
  decodeRequest: (m) => m.anthropicDecodeRequest,
  encodeRequest: (m) => m.anthropicEncodeRequest,
  decodeResponse: (m) => m.anthropicDecodeResponse,
  encodeResponse: (m) => m.anthropicEncodeResponse,
  newStreamDecoder: (m) => m.anthropicNewStreamDecoder,
  newStreamEncoder: (m) => m.anthropicNewStreamEncoder,
});
