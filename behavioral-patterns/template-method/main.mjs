/*
Display a character or string repeatedly 5 times.
 */
'use strict';

import { CharDisplay } from './char-display.mjs';
import { StringDisplay } from './string-display.mjs';

const display1 = new CharDisplay('H');
display1.output();

const display2 = new StringDisplay('Hello world.');
display2.output();
