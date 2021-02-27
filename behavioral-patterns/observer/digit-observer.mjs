// ˅
'use strict';

import { Observer } from './observer.mjs';

// ˄

// Display number values with digits.
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
