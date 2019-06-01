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
        const htmlData = new Array();
        htmlData.push('<td><table width="100%" border="2">');
        htmlData.push('<tr><td bgcolor="#00CC00" align="center" colspan="' + this.items.length + '"><b>' + this.name + '</b></td></tr>');
        htmlData.push('<tr>');
        for (let item of this.items) {
            htmlData.push(item.toHTML());
        }
        htmlData.push('</tr>');
        htmlData.push('</table></td>');
        return htmlData.join('\n');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
