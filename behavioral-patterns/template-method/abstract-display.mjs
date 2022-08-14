// ˅
'use strict';

// ˄

export class AbstractDisplay {
    // ˅
    
    // ˄

    open() {
        throw new Error('An abstract method has been executed.');
    }

    write() {
        throw new Error('An abstract method has been executed.');
    }

    close() {
        throw new Error('An abstract method has been executed.');
    }

    output() {
        // ˅
        this.open();
        for (let i = 0; i < 5; i++) {   // Repeat write 5 times
            this.write();
        }
        this.close();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
