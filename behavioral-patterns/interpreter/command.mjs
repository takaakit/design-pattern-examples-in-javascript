// ˅
'use strict';

import { Node } from './node.mjs';
import { Repeat } from './repeat.mjs';
import { Action } from './action.mjs';

// ˄

export class Command extends Node {
    // ˅
    
    // ˄

    node;

    constructor() {
        // ˅
        super();
        this.node = null;
        // ˄
    }

    parse(context) {
        // ˅
		if (context.getToken() === 'repeat') {
			this.node = new Repeat();
			this.node.parse(context);
		}
		else {
			this.node = new Action();
			this.node.parse(context);
		}
        // ˄
    }

    toString() {
        // ˅
		return this.node.toString();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
