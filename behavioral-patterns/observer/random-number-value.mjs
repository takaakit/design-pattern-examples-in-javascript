// ˅
'use strict';

import { NumberValue } from './number-value.mjs';

// ˄

// Generate a random number value.
export class RandomNumberValue extends NumberValue {
    // ˅
    
    // ˄

    constructor() {
        // ˅
        super();
        // ˄
    }

    generate() {
        // ˅
		for (let i = 0; i < 20; i++) {
			this._value = Math.floor(Math.random() * 50);
			super.notifyObservers();
		}
        // ˄
    }

    get value() {
        // ˅
        return this._value;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
