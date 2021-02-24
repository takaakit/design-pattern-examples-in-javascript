// ˅
'use strict';

import { Observer } from './observer.mjs';
import sleep from 'sleep';

// ˄

// Display number values with digits.
export class DigitObserver extends Observer {
    // ˅
    
    // ˄

    update(numberValue) {
        // ˅
		console.log('Digit    : ' + numberValue.value);

        sleep.msleep(100);   // Wait 100ms
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
