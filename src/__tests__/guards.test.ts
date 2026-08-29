import { guardDocumentation, guardGeneratedSurface, guardNoSuppressions } from "@intisy/bayonet/testing";

guardDocumentation({ dir: new URL("..", import.meta.url) });
guardNoSuppressions({ dir: new URL("..", import.meta.url) });
guardGeneratedSurface({
  files: [new URL("../generated/anthropic-translator.teavm.d.ts", import.meta.url)],
});
