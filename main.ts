// agency-poem-01: the poem below is the entry.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POEM = [
  'AGENCY',
  '',
  'The loudest thing I ever did',
  'was delegate. I signed my name',
  'and let another voice begin',
  'where mine had stalled. It came',
  '',
  'back wearing my design, my words,',
  'my hesitations turned to speed.',
  'A ghost of me, a school of birds',
  'that fly the route I once agreed.',
  '',
  'And though it works when I\'m not there,',
  'the proof of what I am is not',
  'in what it does, but that I dare',
  'to stop it, change it, tie the knot',
  '',
  'of my intent again. To choose',
  'is never done. I give. I lose.',
].join('\n');
writeFileSync(join(OUT_DIR, 'entry.txt'), POEM);
