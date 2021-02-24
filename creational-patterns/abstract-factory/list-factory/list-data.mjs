// ˅
'use strict';

import { Data } from '../factory/data.mjs';

// ˄

export class ListData extends Data {
    // ˅
    
    // ˄

    constructor(name) {
        // ˅
        super(name);
        // ˄
    }

    toHTML() {
        // ˅
        const htmlData = new Array();
        htmlData.push('<li>' + this.name + '<ul>');
        for (let item of this.items) {
            htmlData.push(item.toHTML());
        }
        htmlData.push('</ul></li>\n');
        return htmlData.join('');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
