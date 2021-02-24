/*
Display a string with decorative frames. The frames can be combined arbitrarily.
 */
'use strict';

import { MessageDisplay } from './message-display.mjs';
import { SideFrame } from './side-frame.mjs';
import { FullFrame } from './full-frame.mjs';

const displayA = new MessageDisplay('Nice to meet you.');
displayA.show();

const displayB = new SideFrame(new MessageDisplay('Nice to meet you.'), '!');
displayB.show();

const displayC = new FullFrame(new SideFrame(new MessageDisplay('Nice to meet you.'), '!'));
displayC.show();
