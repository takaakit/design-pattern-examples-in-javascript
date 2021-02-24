// ˅
'use strict';

// ˄

export class Display {
    // ˅
    
    // ˄

    impl;

    constructor(impl) {
        // ˅
        this.impl = impl;
        // ˄
    }

    output() {
        // ˅
        this.open();
        this.write();
        this.close();
        // ˄
    }

    open() {
        // ˅
        this.impl.implOpen();
        // ˄
    }

    write() {
        // ˅
        this.impl.implWrite();
        // ˄
    }

    close() {
        // ˅
        this.impl.implClose();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
