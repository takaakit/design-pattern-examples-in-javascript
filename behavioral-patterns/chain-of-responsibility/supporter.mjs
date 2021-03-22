// ˅
'use strict';

// ˄

export class Supporter {
    // ˅
    
    // ˄

    // Supporter name
    name;

    // Next supporter
    next;

    constructor(name) {
        // ˅
        this.next = null;
        this.name = name;
        // ˄
    }

    // Trouble support
    // Troubles are sent around.
    support(trouble) {
        // ˅
        if (this.canHandle(trouble)) {
            this.supported(trouble);
        }
        else if (this.next != null) {
            this.next.support(trouble);
        }
        else {
            this.unsupported(trouble);
        }
        // ˄
    }

    // Set a next supporter.
    setNext(next) {
        // ˅
        this.next = next;
        return this.next;
        // ˄
    }

    canHandle(trouble) {
        throw new Error('An abstract method has been executed.');
    }

    // Trouble was supported.
    supported(trouble) {
        // ˅
        console.log(trouble.toString() + " was handled by " + this.name + ".");
        // ˄
    }

    // Trouble was unsupported.
    unsupported(trouble) {
        // ˅
        console.log(trouble.toString() + " was not handled.");
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
