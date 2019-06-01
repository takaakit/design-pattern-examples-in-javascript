// ˅
'use strict';

import { Node } from './node.mjs';
import { CommandList } from './command-list.mjs';

// ˄

// A node corresponding to "repeat".
export class Repeat extends Node {
    // ˅
    
    // ˄

    number;

    commandList;

    constructor() {
        // ˅
        super();
		this.number = 0;
		this.commandList = null;
        // ˄
    }

    parse(context) {
        // ˅
		context.slideToken('repeat');
		this.number = context.getNumber();
		context.nextToken();
		this.commandList = new CommandList();
		this.commandList.parse(context);
        // ˄
    }

    toString() {
        // ˅
		return '[repeat ' + this.number + ' ' + this.commandList + ']';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
