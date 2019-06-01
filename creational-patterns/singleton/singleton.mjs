// ˅
'use strict';

// ˄

export class Singleton {
    // ˅
    
    // ˄

    static instance = new Singleton();

    constructor() {
        // ˅
        
        // ˄
    }

    static getInstance() {
        // ˅
        return this.instance;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
