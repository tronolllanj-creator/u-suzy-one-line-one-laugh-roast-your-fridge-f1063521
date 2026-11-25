// Code Golf / Programming Competition Entrypoint
// Entry validated: output is 1-200 chars, one line, deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "It sends push alerts for every single fluctuating degree while quietly letting the milk spoil in peaceful analog silence.";

if (!(1 <= LINE.length && LINE.length <= 200 && LINE.trim().length > 0 && !LINE.includes("\n"))) {
  throw new Error("Invalid LINE constant");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, LINE, "utf-8");

console.log(outputPath);
console.log(LINE.length);
