// ˅
'use strict';

import { Link } from '../factory/link.mjs';

// ˄

export class TableLink extends Link {
    // ˅
    
    // ˄

    constructor(name, url) {
        // ˅
        super(name, url);
        // ˄
    }

    toHTML() {
        // ˅
        return '  <td><a href="' + this.url + '">' + this.name + '</a></td>\n'
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
