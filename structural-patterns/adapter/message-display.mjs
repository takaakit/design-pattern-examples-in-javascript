// ˅
'use strict';

// ˄

export class MessageDisplay {
    // ˅
    
    // ˄

    message;

    constructor(message) {
        // ˅
        this.message = message;
        // ˄
    }

    displayWithHyphens() {
        // ˅
        console.log('-- ' + this.message + ' --');
        // ˄
    }

    displayWithBrackets() {
        // ˅
        console.log('[[ ' + this.message + ' ]]');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
