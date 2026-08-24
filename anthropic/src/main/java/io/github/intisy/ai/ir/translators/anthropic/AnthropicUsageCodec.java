package io.github.intisy.ai.ir.translators.anthropic;

import io.github.intisy.ai.ir.IrUsage;
import io.github.intisy.ai.ir.json.JsonUtil;

import java.util.LinkedHashMap;
import java.util.Map;

/** Anthropic {@code usage} object <-> {@link IrUsage}, shared by the response and streaming codecs. */
final class AnthropicUsageCodec {
    private AnthropicUsageCodec() {
    }

    static IrUsage decode(Object raw) {
        Map<String, Object> m = JsonUtil.asMap(raw);
        if (m == null) return null;
        IrUsage u = new IrUsage();
        u.inputTokens = JsonUtil.asInt(m.get("input_tokens"));
        u.outputTokens = JsonUtil.asInt(m.get("output_tokens"));
        u.cacheCreationInputTokens = JsonUtil.asInt(m.get("cache_creation_input_tokens"));
        u.cacheReadInputTokens = JsonUtil.asInt(m.get("cache_read_input_tokens"));
        return u;
    }

    static Map<String, Object> encode(IrUsage u) {
        if (u == null) return null;
        Map<String, Object> m = new LinkedHashMap<>();
        if (u.inputTokens != null) m.put("input_tokens", u.inputTokens);
        if (u.outputTokens != null) m.put("output_tokens", u.outputTokens);
        if (u.cacheCreationInputTokens != null) m.put("cache_creation_input_tokens", u.cacheCreationInputTokens);
        if (u.cacheReadInputTokens != null) m.put("cache_read_input_tokens", u.cacheReadInputTokens);
        return m;
    }
}
