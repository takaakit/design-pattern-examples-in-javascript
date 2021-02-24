/*
Display only one line or display the specified number of lines.
 */
'use strict';

import { Display } from './display.mjs';
import { MultiLineDisplay } from './multi-line-display.mjs';
import { TextDisplayImpl } from './text-display-impl.mjs';

const d1 = new Display(new TextDisplayImpl('Japan'));
d1.output();

const d2 = new MultiLineDisplay(new TextDisplayImpl('The United States of America'));
d2.output();
d2.outputMultiple(3);
