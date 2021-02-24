// ˅
'use strict';

import { Node } from './node.mjs';

// ˄

// A node corresponding to "forward", "left", and "right".
export class Action extends Node {
    // ˅
    
    // ˄

    name;

    constructor() {
        // ˅
        super();
        // ˄
    }

    parse(context) {
        // ˅
		const currentToken = context.getToken();
		if (currentToken !== 'forward' && currentToken !== 'right' && currentToken !== 'left') {
			throw new Error(currentToken + ' is unknown');
		}

        this.name = currentToken;

        context.slideToken(currentToken);
        // ˄
    }

    toString() {
        // ˅
		return this.name;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
