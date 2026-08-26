package io.github.intisy.ai.js.surface;

import io.github.intisy.ai.tsemit.TsModule;

/**
 * The JavaScript module surface {@link io.github.intisy.ai.js.AnthropicTranslatorJs} exports, typed
 * for a TypeScript consumer.
 *
 * @implNote Never implemented, only emitted: {@link TsModule} renders its members as free functions,
 * which is the shape a TeaVM ES2015 module actually exports. The non-streaming members carry the
 * vendor's wire JSON one way and core-ir's own IR JSON the other; the streaming pair hands back a
 * stateful handle instead, because a stream spans calls.
 */
@TsModule
public interface AnthropicTranslatorSurface {

    /** Parse and stringify with no IR type involved, proving the JSON codec crosses TeaVM. */
    String jsonRoundTrip(String json);

    /** Anthropic wire JSON to an IR request. */
    String anthropicDecodeRequest(String wireJson);

    /** An IR request to Anthropic wire JSON. */
    String anthropicEncodeRequest(String irRequestJson);

    /** Anthropic wire JSON to an IR response. */
    String anthropicDecodeResponse(String wireJson);

    /** An IR response to Anthropic wire JSON. */
    String anthropicEncodeResponse(String irResponseJson);

    /** Opens a decode handle for one connection's stream. */
    JsStreamDecoderHandle anthropicNewStreamDecoder();

    /** Opens an encode handle for one connection's stream. */
    JsStreamEncoderHandle anthropicNewStreamEncoder();
}
