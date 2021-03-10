/*
Display a string enclosed with a frame line, or drawn with an underline. The Client (Main)
registers instances of the Display subclass in the Manager class. When necessary,
the Manager class asks those registered instances to return a clone. The Client (Main)
requires the returned clones to display.
 */
'use strict';

import { Manager } from './framework/manager.mjs';
import { UnderlineDisplay } from './underline-display.mjs';
import { FrameDisplay } from './frame-display.mjs';

const manager = new Manager();

// Register instances of the "Display" subclass
const emphasisUnderline = new UnderlineDisplay('~');
manager.registerDisplay('emphasis', emphasisUnderline);
const highlightFrame = new FrameDisplay('+');
manager.registerDisplay('highlight', highlightFrame);
const warningFrame = new FrameDisplay('#');
manager.registerDisplay('warning', warningFrame);

// Require to display
const display1 = manager.getDisplay('emphasis');
display1.show('Nice to meet you.');
const display2 = manager.getDisplay('highlight');
display2.show('Nice to meet you.');
const display3 = manager.getDisplay('warning');
display3.show('Nice to meet you.');
