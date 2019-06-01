// ˅
'use strict';

import { Builder } from './builder.mjs';

// ˄

export class PlainTextBuilder extends Builder {
    // ˅
    
    // ˄

    // String to output
    result;

    builder;

    constructor() {
        // ˅
        super();
        this.result = '';
        this.builder = new Array();
        // ˄
    }

    // Make a title of plain text
    createTitle(title) {
        // ˅
        this.builder.push('--------------------------------');  // Decoration line
        this.builder.push('[' + title + ']');                   // Title
        this.builder.push('');                                  // Blank line
        // ˄
    }

    // Make a section of plain text
    createSection(section) {
        // ˅
        this.builder.push('* ' + section);                      // Section
        this.builder.push('');                                  // Blank line
        // ˄
    }

    // Make items of plain text
    createItems(items) {
        // ˅
        for (let item of items) {
            this.builder.push('  - ' + item);                   // Items
        }
        this.builder.push('');                                  // Blank line
        // ˄
    }

    close() {
        // ˅
        this.builder.push('--------------------------------');  // Decoration line
        this.result = this.builder.join('\n');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
