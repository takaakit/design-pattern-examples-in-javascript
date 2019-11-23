// Display a character string with a decorative frame.
'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs                       //
// NOTE :  Use Node.js ver.13.2.0 or higher.   //
/////////////////////////////////////////////////

import { MessageDisplay } from './message-display.mjs';
import { SideFrame } from './side-frame.mjs';
import { FullFrame } from './full-frame.mjs';

const displayA = new MessageDisplay('Nice to meet you.');
displayA.show();

const displayB = new SideFrame(displayA, '!');
displayB.show();

const displayC = new FullFrame(displayB);
displayC.show();

const displayD = new SideFrame(
    new FullFrame(
        new FullFrame(
            new SideFrame(
                new SideFrame(
                    new FullFrame(
                        new MessageDisplay('See you again.')
                    ),
                    '#'
                ),
                '#'
            )
        )
    ),
    '#'
);
displayD.show();
