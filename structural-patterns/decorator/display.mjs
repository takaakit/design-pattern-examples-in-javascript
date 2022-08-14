// ˅
'use strict';

// ˄

export class Display {
    // ˅
    
    // ˄

    // Column width
    get columns() {
        throw new Error('An abstract method has been executed.');
    }

    // Number of rows
    get rows() {
        throw new Error('An abstract method has been executed.');
    }

    getLineText(row) {
        throw new Error('An abstract method has been executed.');
    }

    // Show all
    show() {
        // ˅
        for (let i = 0; i < this.rows; i++) {
            console.log(this.getLineText(i));
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
