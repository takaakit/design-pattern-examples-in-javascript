// Someone handles a trouble.
'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs                       //
// NOTE :  Use Node.js ver.12.17.0 or higher.  //
/////////////////////////////////////////////////

import { LazySupporter } from './lazy-supporter.mjs';
import { MoodySupporter } from './moody-supporter.mjs';
import { SpecialSupporter } from './special-supporter.mjs';
import { LimitedSupporter } from './limited-supporter.mjs';
import { Trouble } from './trouble.mjs';

const emily = new LazySupporter('Emily');
const william = new MoodySupporter('William');
const amelia = new SpecialSupporter('Amelia', 153);
const michael = new SpecialSupporter('Michael', 340);
const joseph = new LimitedSupporter('Joseph', 250);
const lily = new LimitedSupporter('Lily', 350);

// Make a chain.
emily.setNext(william).setNext(amelia).setNext(michael).setNext(joseph).setNext(lily);

// Various troubles occurred.
for (let i = 0; i < 500; i += 17) {
	emily.support(new Trouble(i));
}
