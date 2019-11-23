// First, create instances for displaying large size characters, then display large size character string using that instances.
'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs (digits)              //
// Ex.  :  node main.mjs 1212123               //
// NOTE :  Use Node.js ver.13.2.0 or higher.   //
/////////////////////////////////////////////////

import { LargeSizeString } from './large-size-string.mjs';

if (process.argv.length != 3) {
    console.log('Usage: node main.mjs (digits)');
    console.log('Ex.  : node main.mjs 1212123');
}
else {
    const bs = new LargeSizeString(process.argv[2]);
    bs.display();
}
