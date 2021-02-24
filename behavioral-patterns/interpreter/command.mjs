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
        let aNode;
		if (context.getToken() === 'repeat') {
			aNode = new Repeat();
			aNode.parse(context);
		}
		else {
			aNode = new Action();
			aNode.parse(context);
		}

        this.node = aNode;  // Hold the parsed node
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
