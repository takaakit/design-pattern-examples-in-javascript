// ˅
'use strict';

// ˄

export class Visitor {
    // ˅
    
    // ˄

    visitFile(file) {
        throw new Error('An abstract method has been executed.');
    }

    visitDirectory(directory) {
        throw new Error('An abstract method has been executed.');
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
