/*
Display a character string as follows
  -- Nice to meet you --
or display it as follows.
  [[ Nice to meet you ]]
*/
'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs                       //
// NOTE :  Use Node.js ver.13.2.0 or higher.   //
/////////////////////////////////////////////////

import { PrintMessageDisplay } from './print-message-display.mjs';

const p = new PrintMessageDisplay('Nice to meet you');
p.printWeak();
p.printStrong();
