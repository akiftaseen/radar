import { createServerFn } from "@tanstack/react-start";

export const generateStudio = createServerFn({ method: "POST" })
  .validator((input: { kind: "strategy" | "territories" | "brief" | "research"; context: string }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "AI is not available in this environment" };

    const system =
      data.kind === "research"
        ? "You are Radar's Cultural Researcher. Return compact markdown: disconfirming evidence, alternative explanations, coverage gaps. Never invent URLs or metrics. Label hypotheses."
        : data.kind === "strategy"
          ? "You are Radar's Strategist. Return markdown for a strategic foundation: insight, tension, permission, role, proposition, non-goals, measures. No creative territories. Cite that evidence is limited to the provided context."
          : data.kind === "territories"
            ? "You are Radar's Creative Director. Propose exactly three structurally distinct territories. For each: name, organizing idea, mechanism, brand role, hero execution, risks. They must differ in mechanism, role, and hero. No copying living artists. No club marks."
            : "You are Radar's Brief Composer. Return a structured creative brief in markdown with the 19 standard sections, marking N/A where needed. Include Sources and Limitations.";

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 1800,
        messages: [
          { role: "system", content: system },
          { role: "user", content: data.context.slice(0, 8000) },
        ],
      }),
    });
    if (!res.ok) return { ok: false as const, error: `xAI API error ${res.status}` };
    const body = (await res.json()) as { choices: { message: { content: string } }[] };
    return { ok: true as const, text: body.choices[0]?.message.content ?? "" };
  });
