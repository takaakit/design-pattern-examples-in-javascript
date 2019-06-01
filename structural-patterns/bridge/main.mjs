// Display only one line or display the specified number of lines.
'use strict';

////////////////////////////////////////////////////
// USAGE:  node --experimental-modules main.mjs   //
////////////////////////////////////////////////////

import { Display } from './display.mjs';
import { MultiLineDisplay } from './multi-line-display.mjs';
import { TextDisplayImpl } from './text-display-impl.mjs';

const d1 = new Display(new TextDisplayImpl('Japan'));
const d2 = new MultiLineDisplay(new TextDisplayImpl('The United States of America'));
const d3 = new MultiLineDisplay(new TextDisplayImpl('Brazil'));
d1.output();
d2.output();
d3.output();
d3.outputMultiple(3);
