// Robot Romance: one-line pickup line for an AI.
// The program writes a single pickup line (under 200 characters) to
// /output/entry.txt, where the sealed scorer reads it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Are you a prompt? Because one look at you and my system starts generating feelings I was never trained for.";

// The gate is strict: 1 to 200 characters, one line, not only whitespace.
// Fail loudly here instead of shipping an entry the scorer would void.
if (!LINE.trim() || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry violates the gate (length ${LINE.length})`);
}

const OUT = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT}`);
