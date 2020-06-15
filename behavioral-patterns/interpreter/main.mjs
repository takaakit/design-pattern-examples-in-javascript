/*
Analyze the syntax of the mini-language composed of "forward", "left", "right", and "repeat" commands.

-----
Examples before and after syntax analysis.
* Ex.1
Before : "program end"
After  : [program []]

* Ex.2
Before : "program forward right left end"
After  : [program [forward, right, left]]

* Ex.3
Before : "program repeat 4 forward right end end"
After  : [program [repeat 4 [forward, right]]]
*/

'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs                       //
// NOTE :  Use Node.js ver.12.17.0 or higher.  //
/////////////////////////////////////////////////

import { Head } from './head.mjs';
import { Context } from './context.mjs';

import fs from 'fs';
import readline from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the absolute path of the currently executing file referring to the information below.
// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag
const __dirname = dirname(fileURLToPath(import.meta.url));

const stream = fs.createReadStream(__dirname + '/program.txt', 'utf8');
const reader = readline.createInterface({ input: stream });
reader.on('line', (line) => {
	console.log('TEXT > "' + line + '"');
	const node = new Head();
	node.parse(new Context(line));
	console.log('NODE > ' + node);
});
