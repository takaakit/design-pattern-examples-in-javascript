// Display a character string enclosed with a frame line, or drawn with an underline.
'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs                       //
// NOTE :  Use Node.js ver.12.17.0 or higher.  //
/////////////////////////////////////////////////

import { Manager } from './framework/manager.mjs';
import { UnderlineDisplay } from './underline-display.mjs';
import { FrameDisplay } from './frame-display.mjs';

// Create a manager
const manager = new Manager();
const emphasisUnderline = new UnderlineDisplay('~');
const highlightFrame = new FrameDisplay('+');
const warningFrame = new FrameDisplay('#');
manager.registerDisplay('emphasis', emphasisUnderline);
manager.registerDisplay('highlight', highlightFrame);
manager.registerDisplay('warning', warningFrame);

// Create displays
const display1 = manager.getDisplay('emphasis');
display1.show('Nice to meet you.');
const display2 = manager.getDisplay('highlight');
display2.show('Nice to meet you.');
const display3 = manager.getDisplay('warning');
display3.show('Nice to meet you.');
