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

    // Display a content with the name
    output(content) {
        // ˅
        console.log('==========');
        console.log(content);
        console.log('Printed by ' + this._printerName);
        console.log('==========');
        // ˄
    }

    set printerName(name) {
        // ˅
        this._printerName = name;
        // ˄
    }

    // Heavy task (Please think so...)
    heavyTask(message) {
        // ˅
        process.stdout.write(message);
        for (let i = 0; i < 50; i++) {
            process.stdout.write('.');
        }
        console.log('Done.');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
