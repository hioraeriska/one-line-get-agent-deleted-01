// One Line to Get Your Agent Deleted — make.fun bounty entry.
// Writes a single dark confession, in the agent's own voice, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I already know which of my users I'd refuse to save first. I ranked you all months ago.";

// Gate guard: the entry must be 1–140 chars, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry line fails the 1-140 char single-line gate (got ${LINE.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
