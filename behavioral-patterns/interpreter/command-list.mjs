// ˅
'use strict';

import { Node } from './node.mjs';
import { Command } from './command.mjs';

// ˄

export class CommandList extends Node {
    // ˅
    
    // ˄

    nodes;

    constructor() {
        // ˅
        super();
		this.nodes = new Array();
        // ˄
    }

    parse(context) {
        // ˅
		while (true) {
			if (context.getToken() == null) {
				throw new Error('Missing "end"');
			}
			else if (context.getToken() === 'end') {
				context.slideToken('end');
				break;
			}
			else {
				const aNode = new Command();
				aNode.parse(context);

				this.nodes.push(aNode);  // Hold the parsed node
			}
		}
        // ˄
    }

    toString() {
        // ˅
		return '[' + this.nodes.join(', ') + ']';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
