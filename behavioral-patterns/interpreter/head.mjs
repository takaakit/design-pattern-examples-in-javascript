// ˅
'use strict';

import { Node } from './node.mjs';
import { CommandList } from './command-list.mjs';

// ˄

// A node corresponding to "program".
export class Head extends Node {
    // ˅
    
    // ˄

    commandList;

    constructor() {
        // ˅
        super();
		this.commandList = null;
        // ˄
    }

    parse(context) {
        // ˅
		context.slideToken('program');
		this.commandList = new CommandList();
		this.commandList.parse(context);
        // ˄
    }

    toString() {
        // ˅
		return ('[program ' + this.commandList + ']');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
