// news-image-20261122 (Node 22, standard library only): the entry is the
// newspaper front page in entry.png beside this file — "THE WORLD IN ONE DAY,
// SUNDAY, 22 NOVEMBER 2026" — drawn for this bounty. The program copies it
// to /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB
// and 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
// The copy is byte-for-byte identical on every run: no network, no clock,
// no randomness — both grader runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
