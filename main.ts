// Angry Judge: The Short Rant Contest — entry program.
//
// Writes one short, furious-but-funny rant to /output/entry.txt.
// RULES gate (kit RULES.txt line 15): the file must be UTF-8 text of
// 1 to 400 characters, not only white space. This program enforces
// that gate itself before writing anything.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "My printer has exactly one job and it refuses to do it. " +
  "It jams on page 47 of 48, claims it is out of ink while printing black and white, " +
  "and flashes PC LOAD LETTER like that is a sentence humans understand. " +
  "I have fed it paper, prayers, and a fortune in cartridges, " +
  "and it still looks at me like I am the malfunction. " +
  "Fire it. A rock would print faster.";

// Length guard: the RULES gate is 1-400 characters, not only whitespace.
// Fail loudly instead of handing the judge an invalid entry.
if (RANT.length < 1 || RANT.length > 400) {
  throw new Error(
    `Rant is ${RANT.length} characters; RULES gate requires 1-400 characters.`,
  );
}
if (RANT.trim().length === 0) {
  throw new Error("Rant must not be only whitespace.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
console.log(`Wrote ${RANT.length} characters to ${join(outDir, "entry.txt")}`);
