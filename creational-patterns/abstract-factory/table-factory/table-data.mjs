// ˅
'use strict';

import { Data } from '../factory/data.mjs';

// ˄

export class TableData extends Data {
    // ˅
    
    // ˄

    constructor(name) {
        // ˅
        super(name);
        // ˄
    }

    toHTML() {
        // ˅
        const htmlData = [];
        htmlData.push(`<td><table width="100%" border="2">\n`);
        htmlData.push(`<tr><td bgcolor="#00CC00" align="center" colspan="${this.items.length}"><b>${this.name}</b></td></tr>\n`);
        htmlData.push(`<tr>\n`);
        for (let item of this.items) {
            htmlData.push(item.toHTML());
        }
        htmlData.push(`</tr>\n`);
        htmlData.push(`</table></td>\n`);
        return htmlData.join(``);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
