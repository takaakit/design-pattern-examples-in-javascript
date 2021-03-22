// ˅
'use strict';

import { Subject } from './subject.mjs';

// ˄

// Generate a random number value.
export class NumberSubject extends Subject {
    // ˅
    
    // ˄

    _value;

    constructor() {
        // ˅
        super();
        // ˄
    }

    get value() {
        // ˅
        return this._value;
        // ˄
    }

    set value(value) {
        // ˅
        this._value = value;
        this.notifyObservers();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
