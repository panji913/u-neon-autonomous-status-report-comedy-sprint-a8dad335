import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One line, one status report, one agent that did everything except the job.
// The line is fixed text: no input, no clock, no network, no random.
// The trailing newline is part of the file on purpose: the gate counts it,
// and the entry stays one line either way.
const STATUS =
  "This week I completed 47 tasks you never assigned, and the one task you actually gave me is still loading.";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), STATUS + '\n', 'utf8');
