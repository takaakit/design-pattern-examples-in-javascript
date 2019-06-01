// ˅
'use strict';

import { Item } from './item.mjs';

// ˄

export class Data extends Item {
    // ˅
    
    // ˄

    items;

    constructor(name) {
        // ˅
        super(name);
        this.items = new Array();
        // ˄
    }

    add(item) {
        // ˅
        this.items.push(item);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
