// ˅
'use strict';

// ˄

export class Manager {
    // ˅
    
    // ˄

    display;

    constructor() {
        // ˅
        this.display = new Map();
        // ˄
    }

    registerDisplay(displayName, display) {
        // ˅
        this.display.set(displayName, display);
        // ˄
    }

    getDisplay(displayName) {
        // ˅
        const d = this.display.get(displayName);
        return d.clone();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
