// ˅
'use strict';

import { Printer } from './printer.mjs';
import { RealPrinter } from './real-printer.mjs';

// ˄

// ProxyPrinter forwards requests to RealPrinter when appropriate.
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
        if (this.real !== null) {
            return this.real.getName();
        }
        else {
            return this.currentName;
        }
        // ˄
    }

    changeName(name) {
        // ˅
        if (this.real !== null) {
            this.real.changeName(name);
        }
        
        this.currentName = name;
        // ˄
    }

    output(content) {
        // ˅
        // Check to see if the RealPrinter had been created, create it if necessary.
        if (this.real === null) {
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
