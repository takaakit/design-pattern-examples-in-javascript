// ˅
'use strict';

import { Observer } from './observer.mjs';

// ˄

// Display values as a number.
export class DigitObserver extends Observer {
    // ˅
    
    // ˄

    update(numberValue) {
        // ˅
		console.log('Digit    : ' + numberValue.value);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
