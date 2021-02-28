/*
Display a string consisting of large characters. Large character objects are not created until they are needed. And the created objects are reused.
 */
'use strict';

import { LargeSizeString } from './large-size-string.mjs';
import rl from 'readline';

console.log('Please enter digits (ex. 1212123):');

const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (data) => {
    const input = data;
    readline.close();

    const lss = new LargeSizeString(input);
    lss.display();
});
