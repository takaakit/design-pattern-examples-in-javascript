// ˅
'use strict';

import { Printer } from './printer.mjs';
import { RealPrinter } from './real-printer.mjs';

// ˄

export class PrinterProxy extends Printer {
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

    get printerName() {
        // ˅
        return this.currentName;
        // ˄
    }

    set printerName(printerName) {
        // ˅
        if (this.real != null) {
            this.real.printerName = printerName;
        }
        this.currentName = printerName;
        // ˄
    }

    output(content) {
        // ˅
        this.createPrinter();
        if (this.real != null) {
            this.real.output(content);
        }
        // ˄
    }

    // Create an actual printer
    createPrinter() {
        // ˅
        if (this.real == null) {
            this.real = new RealPrinter(this.currentName);
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
