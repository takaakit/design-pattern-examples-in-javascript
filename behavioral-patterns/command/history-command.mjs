// ˅
'use strict';

import { Command } from './command.mjs';

// ˄

// Holder of the past commands
export class HistoryCommand extends Command {
    // ˅
    
    // ˄

    // A set of past commands
    pastCommands;

    constructor() {
        // ˅
        super();
        this.pastCommands = new Array();
        // ˄
    }

    execute() {
        // ˅
        for (let command of this.pastCommands) {
            command.execute();
        }
        // ˄
    }

    add(command) {
        // ˅
        this.pastCommands.push(command);
        // ˄
    }

    // Delete the last command
    undo() {
        // ˅
        if (this.pastCommands.length != 0) {
            this.pastCommands.pop();
        }
        // ˄
    }

    // Delete all past commands
    clear() {
        // ˅
        this.pastCommands.length = 0;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
