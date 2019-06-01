// First, create instances for displaying large size characters, then display large size character string using that instances.
'use strict';

///////////////////////////////////////////////////////////
// USAGE:  node --experimental-modules main.mjs digits   //
// Ex.  :  node --experimental-modules main.mjs 1212123  //
///////////////////////////////////////////////////////////

import { LargeSizeString } from './large-size-string.mjs';

if (process.argv.length != 3) {
    console.log('Usage: node --experimental-modules main.mjs digits');
    console.log('Ex.  : node --experimental-modules main.mjs 1212123');
}
else {
    const bs = new LargeSizeString(process.argv[2]);
    bs.display();
}
