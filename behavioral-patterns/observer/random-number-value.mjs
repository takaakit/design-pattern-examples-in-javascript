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
        (async () => {		// Note: Define an anonymous function with async keyword for using await keyword.
            for (let i = 0; i < 20; i++) {
                this._value = Math.floor(Math.random() * 50);
                super.notifyObservers();
                await new Promise(r => setTimeout(r, 200));     // Wait 200ms
            }
        })();
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
