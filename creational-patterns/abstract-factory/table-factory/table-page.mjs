// ˅
'use strict';

import { Page } from '../factory/page.mjs';

// ˄

export class TablePage extends Page {
    // ˅
    
    // ˄

    constructor(title, author) {
        // ˅
        super(title, author);
        // ˄
    }

    toHTML() {
        // ˅
        const htmlData = new Array();
        htmlData.push('<html><head><title>' + this.title + '</title></head><body>');
        htmlData.push('<h1>' + this.title + '</h1>');
        htmlData.push('<table width="80%" border="3">');
        for (let content of this.contents) {
            htmlData.push('<tr>' + content.toHTML() + '</tr>');
        }
        htmlData.push('</table>');
        htmlData.push('<hr><address>' + this.author + '</address>');
        htmlData.push('</body></html');
        return htmlData.join('\n');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
