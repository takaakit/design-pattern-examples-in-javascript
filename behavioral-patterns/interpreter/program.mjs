// ˅
'use strict';

import { Node } from './node.mjs';
import { CommandList } from './command-list.mjs';

// ˄

// A node corresponding to "program".
export class Program extends Node {
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

        const aCommandList = new CommandList();
		aCommandList.parse(context);

		this.commandList = aCommandList;    // Hold the parsed command list
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
