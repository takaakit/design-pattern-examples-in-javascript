// ˅
'use strict';

import { Subject } from './subject.mjs';

// ˄

// Holds a value and notifies observers when the value is set.
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
        // Notify observers when the value is set.
        this._value = value;
        this.notifyObservers();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
