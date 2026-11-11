#!/usr/bin/env node
import { generate } from "./index.js";

const [input, outDir] = process.argv.slice(2);

if (!input) {
  console.log("Usage: favicraft <image> [outputFolder]");
  console.log("Example: npx favicraft logo.png public");
  process.exit(1);
}

try {
  await generate(input, outDir);
  console.log(`Done! Files saved to ${outDir || "./favicons"}`);
} catch (err) {
  console.error("Failed:", err.message);
  process.exit(1);
}