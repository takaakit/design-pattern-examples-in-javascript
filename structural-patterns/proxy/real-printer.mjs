// ˅
'use strict';

import { Printer } from './printer.mjs';

// ˄

export class RealPrinter extends Printer {
    // ˅
    
    // ˄

    name;

    constructor(name) {
        // ˅
        super();
        this.name = name;
        this.heavyTask('Creating an instance (' + name + ') of the Printer');
        // ˄
    }

    getName() {
        // ˅
        return this.name;
        // ˄
    }

    changeName(name) {
        // ˅
        this.name = name;
        // ˄
    }

    // Display a content with the name
    output(content) {
        // ˅
        console.log('==========');
        console.log(content);
        console.log('Printed by ' + this.name);
        console.log('==========');
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
