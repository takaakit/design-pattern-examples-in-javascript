/*
Display a character string as follows
  -- Nice to meet you --
or display it as follows.
  [[ Nice to meet you ]]
*/
'use strict';

////////////////////////////////////////////////////
// USAGE:  node --experimental-modules main.mjs   //
////////////////////////////////////////////////////

import { PrintMessageDisplay } from './print-message-display.mjs';

const p = new PrintMessageDisplay('Nice to meet you');
p.printWeak();
p.printStrong();
