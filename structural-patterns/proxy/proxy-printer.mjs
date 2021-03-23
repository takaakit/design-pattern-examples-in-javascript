// ˅
'use strict';

import { Printer } from './printer.mjs';
import { RealPrinter } from './real-printer.mjs';

// ˄

export class ProxyPrinter extends Printer {
    // ˅
    
    // ˄

    currentName;

    // A printer that actually prints
    real;

    constructor(name) {
        // ˅
        super();
        this.currentName = name;
        this.real = null;
        // ˄
    }

    getName() {
        // ˅
        return this.currentName;
        // ˄
    }

    changeName(name) {
        // ˅
        if (this.real != null) {
            this.real.changeName(name);
        }
        this.currentName = name;
        // ˄
    }

    output(content) {
        // ˅
        if (this.real == null) {
            this.real = new RealPrinter(this.currentName);
        }
        this.real.output(content);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
