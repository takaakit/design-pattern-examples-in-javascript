// Create documents in HTML format and text format.
'use strict';

///////////////////////////////////////////////////
// USAGE 1:  node main.mjs plain                 //
// USAGE 2:  node main.mjs html                  //
// NOTE   :  Use Node.js ver.12.17.0 or higher.  //
///////////////////////////////////////////////////

import { HTMLBuilder } from './html-builder.mjs';
import { Director } from './director.mjs';
import { PlainTextBuilder } from './plain-text-builder.mjs';

if (process.argv.length != 3) {
    showUsage();
}
else if (process.argv[2] == 'plain') {
    const plainTextBuilder = new PlainTextBuilder();
    const directory = new Director(plainTextBuilder);
    directory.build();
    const content = plainTextBuilder.result;
    console.log(content);
}
else if (process.argv[2] == 'html') {
    const htmlBuilder = new HTMLBuilder();
    const directory = new Director(htmlBuilder);
    directory.build();
    const filename = htmlBuilder.result;
    console.log(filename + ' has been created.');
}
else {
    showUsage();
}

function showUsage() {
    console.log('Usage 1: node main.mjs plain      <- Create a document in plain text.');
    console.log('Usage 2: node main.mjs html       <- Create a document in HTML.');
}
