/*
Create documents in HTML format and text format. It is possible to create different documents
in the same construction process.
 */
'use strict';

import { HTMLBuilder } from './html-builder.mjs';
import { Director } from './director.mjs';
import { PlainTextBuilder } from './plain-text-builder.mjs';
import rl from 'readline';
import path from 'path';

console.log('Please enter "plain" or "html":');

const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (data) => {
    let input = data;
    readline.close();

    if (input == 'plain') {
        const plainTextBuilder = new PlainTextBuilder();
        const directory = new Director(plainTextBuilder);
        directory.build();

        const content = plainTextBuilder.getContent();
        console.log(content);
    }
    else if (input == 'html') {
        const htmlBuilder = new HTMLBuilder();
        const directory = new Director(htmlBuilder);
        directory.build();
        
        const fileName = htmlBuilder.getFileName();
        console.log(fileName + ' has been created.');
        console.log('Output File: ' + path.join(process.cwd(), fileName));
    }
    else {
        console.log('The value is not "plain" or "html".');
        process.exit(1);
    }
});
