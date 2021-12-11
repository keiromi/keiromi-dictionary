import { dictMaker } from '@heppokofrontend/dictionary-file-maker';
import amaseOruko from './members/amase-oruko.js';
import alabamiAsuki from './members/akabami-asuki.js';
import kawarabeEcma from './members/kawarabe-ecma.js';
import naaka from './members/naaka.js';
import { format } from './format';

const dict = [
  ...format(amaseOruko),
  ...format(alabamiAsuki),
  ...format(kawarabeEcma),
  ...format(naaka),
];

dictMaker(dict, 'win', './downloads'); // The text file is writen.
