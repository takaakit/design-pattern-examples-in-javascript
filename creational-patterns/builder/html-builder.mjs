// ˅
'use strict';

import fs from 'fs';
import { Builder } from './builder.mjs';

// ˄

export class HTMLBuilder extends Builder {
    // ˅
    
    // ˄

    // File name to create
    fileName;

    writer;

    constructor() {
        // ˅
        super();
        this.fileName = '';
        this.writer = null;
        // ˄
    }

    // Make a title of HTML file
    createTitle(title) {
        // ˅
        this.fileName = title + '.html';      // Set a title as a file name
        this.writer = fs.createWriteStream(this.fileName, 'utf8');
        this.writer.write('<html><head><title>' + title + '</title></head><body>\n');  // Write a title
        this.writer.write('<h1>' + title + '</h1>\n');
        // ˄
    }

    // Make a section of HTML file
    createSection(section) {
        // ˅
        this.writer.write('<p>' + section + '</p>\n');    // Write a section
        // ˄
    }

    // Make items of HTML file
    createItems(items) {
        // ˅
        this.writer.write('<ul>\n');    // Write items
        for (let item of items) {
            this.writer.write('<li>' + item + '</li>\n');
        }
        this.writer.write('</ul>\n');
        // ˄
    }

    close() {
        // ˅
        this.writer.write('</body></html>\n');
        this.writer.end();                  // Close file
        // ˄
    }

    getFileName() {
        // ˅
        return this.fileName;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
