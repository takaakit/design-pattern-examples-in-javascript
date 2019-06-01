// ˅
'use strict';

import { Node } from './node.mjs';

// ˄

// A node corresponding to "forward", "left", and "right".
export class Action extends Node {
    // ˅
    
    // ˄

    name;

    parse(context) {
        // ˅
		this.name = context.getToken();
		context.slideToken(this.name);
		if (this.name !== 'forward' && this.name !== 'right' && this.name !== 'left') {
			throw new Error(this.name + ' is unknown');
		}
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
