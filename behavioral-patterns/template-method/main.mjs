// Display the character and string repeatedly 5 times.
'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs                       //
// NOTE :  Use Node.js ver.12.17.0 or higher.  //
/////////////////////////////////////////////////

import { CharDisplay } from './char-display.mjs';
import { StringDisplay } from './string-display.mjs';

const display1 = new CharDisplay('H');                   // Create an instance of the CharDisplay
const display2 = new StringDisplay('Hello world.');      // Create an instance of the StringDisplay
const display3 = new StringDisplay('Nice to meet you.'); // Create an instance of the StringDisplay

// Any instance can be called with the same method name
display1.output();
display2.output();
display3.output();
