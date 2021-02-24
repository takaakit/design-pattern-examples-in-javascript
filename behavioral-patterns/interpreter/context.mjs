// ˅
'use strict';

// ˄

// Hold data which will be interpreted.
export class Context {
    // ˅
    
    // ˄

    nodes;

    currentNumber;

    constructor(text) {
        // ˅
		this.nodes = text.split(/\s+/);
		this.currentNumber = 0;
        // ˄
    }

    nextToken() {
        // ˅
		if (this.currentNumber < this.nodes.length) {
			return this.nodes[this.currentNumber++];
		}
		else {
			return null;
		}
        // ˄
    }

    getToken() {
        // ˅
		return this.nodes[this.currentNumber];
        // ˄
    }

    slideToken(token) {
        // ˅
		if (token !== this.nodes[this.currentNumber]) {
			throw new Error('WARNING: ' + token + ' is expected but ' + this.nodes[this.currentNumber] + ' was found.');
		}
		this.nextToken();
        // ˄
    }

    getNumber() {
        // ˅
		try {
			return parseInt(this.getToken());
		}
		catch {
			throw new Error('WARNING: ' + this.getToken());
		}
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
