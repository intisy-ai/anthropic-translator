import { loadAnthropicTranslator } from "./index.js";
import { makeVendorTranslator } from "../core-ir/dist/index.js";

export const anthropicTranslator = makeVendorTranslator(loadAnthropicTranslator, {
  decodeRequest: (m) => m.anthropicDecodeRequest,
  encodeRequest: (m) => m.anthropicEncodeRequest,
  decodeResponse: (m) => m.anthropicDecodeResponse,
  encodeResponse: (m) => m.anthropicEncodeResponse,
  newStreamDecoder: (m) => m.anthropicNewStreamDecoder,
  newStreamEncoder: (m) => m.anthropicNewStreamEncoder,
});
