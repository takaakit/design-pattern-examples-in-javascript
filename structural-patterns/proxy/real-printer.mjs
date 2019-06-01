// ˅
'use strict';

import { Printer } from './printer.mjs';

// ˄

export class RealPrinter extends Printer {
    // ˅
    
    // ˄

    _printerName;

    constructor(name) {
        // ˅
        super();
        this._printerName = name;
        this.heavyTask('Creating an instance(' + name + ') of the Printer');
        // ˄
    }

    set printerName(name) {
        // ˅
        this._printerName = name;
        // ˄
    }

    // Display a content with the name
    output(content) {
        // ˅
        console.log('=== ' + this.printerName + ' ===');
        console.log(content);
        // ˄
    }

    // Heavy task (Please think so...)
    heavyTask(message) {
        // ˅
        console.log(message);
        console.log('Done heavy task.');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
