// Check whether the same instance is obtained.
'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs                       //
// NOTE :  Use Node.js ver.12.17.0 or higher.  //
/////////////////////////////////////////////////

import { Singleton } from './singleton.mjs';

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
if (obj1 === obj2) {
    console.log('obj1 and obj2 are the same instance.');
} else {
    console.log('obj1 and obj2 are different instances.');
}
