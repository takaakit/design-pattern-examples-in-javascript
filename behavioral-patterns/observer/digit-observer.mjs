// ˅
'use strict';

import { Observer } from './observer.mjs';

// ˄

// Display values as a number.
export class DigitObserver extends Observer {
    // ˅
    
    // ˄

    numberSubject;

    constructor(numberSubject) {
        // ˅
        super();
        this.numberSubject = numberSubject;
        // ˄
    }

    update(changedSubject) {
        // ˅
        if (changedSubject === this.numberSubject) {
            console.log('Digit    : ' + this.numberSubject.value);
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
