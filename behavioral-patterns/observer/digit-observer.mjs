// ˅
'use strict';

import { Observer } from './observer.mjs';

// ˄

// Display values with digits.
export class DigitObserver extends Observer {
    // ˅
    
    // ˄

    update(value) {
        // ˅
		console.log('Digit    : ' + value.valueNumber);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
