// ˅
'use strict';

// ˄

// Hold data which will be interpreted.
export class Context {
    // ˅
    
    // ˄

    tokens;

    currentIndex;

    constructor(text) {
        // ˅
		this.tokens = text.split(/\s+/);
		this.currentIndex = 0;
        // ˄
    }

    nextToken() {
        // ˅
		if (this.currentIndex < this.tokens.length) {
			return this.tokens[this.currentIndex++];
		}
		else {
			return null;
		}
        // ˄
    }

    getToken() {
        // ˅
		return this.tokens[this.currentIndex];
        // ˄
    }

    slideToken(token) {
        // ˅
		if (token !== this.getToken()) {
			throw new Error('WARNING: ' + token + ' is expected but ' + this.getToken() + ' was found.');
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
