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
        // Before processing, it checks to make sure the changed subject is the subject held.
        if (changedSubject === this.numberSubject) {
            console.log(`Digit    : ${this.numberSubject.value}`);
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
