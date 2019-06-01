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

////////////////////////////////////////////////////
// USAGE:  node --experimental-modules main.mjs   //
////////////////////////////////////////////////////

import { Head } from './head.mjs';
import { Context } from './context.mjs';

import fs from 'fs';
import readline from 'readline';

const stream = fs.createReadStream('./program.txt', 'utf8');
const reader = readline.createInterface({ input: stream });
reader.on('line', (line) => {
	console.log('TEXT > "' + line + '"');
	const node = new Head();
	node.parse(new Context(line));
	console.log('NODE > ' + node);
});
