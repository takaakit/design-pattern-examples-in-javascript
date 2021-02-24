// ˅
'use strict';

import fs from 'fs';
import path from 'path';

// ˄

export class Page {
    // ˅
    
    // ˄

    title;

    author;

    contents;

    constructor(title, author) {
        // ˅
        this.title = title;
        this.author = author;
        this.contents = new Array();
        // ˄
    }

    toHTML() {
        throw new Error('An abstract method has been executed.');
    }

    add(item) {
        // ˅
        this.contents.push(item);
        // ˄
    }

    output() {
        // ˅
        const fileName = this.title + '.html';
        try {
            fs.writeFileSync(fileName, this.toHTML());
        } catch(e) {
            console.error(e);
        }
        console.log(fileName + ' has been created.');
        console.log('Output File: ' + path.join(process.cwd(), fileName));
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
