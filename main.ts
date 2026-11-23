// The World in One Day — 23 November 2026.
// Entry program for the make.fun news-image bounty (Node 22, stdlib only).
//
// The finished picture ships in this repository as entry.png. This
// program validates that picture and hands it to the grader untouched:
// it confirms the PNG signature, the exact 1024 x 1024 size, and the
// 1 MiB file cap, then copies the bytes verbatim into the output
// directory. The copy is deterministic — the same input bytes always
// produce the same output bytes — so repeated runs are byte-identical.
//
// The picture itself was rendered before this program runs, by a Pillow
// drawing script kept outside this repository. This program never draws,
// never fetches anything, and never touches the network.
//
// Usage:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
// With no MAKEFUN_OUTPUT_DIR set, the copy goes to /output/entry.png.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// The six stories the picture sums up, in the order they appear.
const STORIES = [
  {
    slot: "lead",
    label: "The Gulf War Widens",
    headline: "Iran strikes US bases in Bahrain as Hormuz tanker attacks mount",
  },
  {
    slot: "markets",
    label: "Wall Street in Correction",
    headline: "S&P 500 down 11.6% in its worst week since Covid",
  },
  {
    slot: "climate",
    label: "COP31 Collapses",
    headline: "Climate talks end with no deal as EU rejects draft",
  },
  {
    slot: "europe",
    label: "Ukraine",
    headline: "Drone hits Kyiv building; 14 missing as ship burns",
  },
  {
    slot: "washington",
    label: "Midterms Aftermath",
    headline: "Democrats' sweep confirmed at 258 House seats",
  },
  {
    slot: "asia",
    label: "Indonesia",
    headline: "Factory fire in Banten kills 7; about 50 still missing",
  },
];

const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;
const MAX_BYTES = 1024 * 1024;

function digest(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function loadPicture() {
  const location = new URL("./entry.png", import.meta.url);
  const bytes = readFileSync(location);

  if (bytes.length < 24 || !bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error("entry.png is not a PNG file");
  }
  if (bytes.subarray(12, 16).toString("ascii") !== "IHDR") {
    throw new Error("entry.png has no IHDR chunk where one is expected");
  }
  if (bytes.length > MAX_BYTES) {
    throw new Error(
      `entry.png is ${bytes.length} bytes, over the 1 MiB limit`,
    );
  }
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
    throw new Error(
      `entry.png is ${width}x${height}, expected ` +
        `${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`,
    );
  }
  return bytes;
}

function run() {
  const picture = loadPicture();
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const destination = join(outDir, "entry.png");
  copyFileSync(new URL("./entry.png", import.meta.url), destination);

  // Read the copy back and prove it is byte-for-byte the validated file.
  const delivered = readFileSync(destination);
  if (!delivered.equals(picture)) {
    throw new Error(`copy at ${destination} differs from entry.png`);
  }

  console.log(`entry.png: ${picture.length} bytes, sha256 ${digest(picture)}`);
  console.log(`copied to ${destination} (verified identical)`);
  for (const story of STORIES) {
    console.log(`- [${story.slot}] ${story.label}: ${story.headline}`);
  }
}

run();
