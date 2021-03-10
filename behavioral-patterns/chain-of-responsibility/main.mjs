/*
A trouble is turned around among supporters, and the trouble will be handled by the supporter who can handle it.
There are four types of supporters below:
* LazySupporter doesn't handle any trouble
* MoodySupporter handles odd ID troubles
* SpecialSupporter handles a trouble of the target ID.
* LimitedSupporter handles troubles below the limit ID.
 */
'use strict';

import { LazySupporter } from './lazy-supporter.mjs';
import { MoodySupporter } from './moody-supporter.mjs';
import { SpecialSupporter } from './special-supporter.mjs';
import { LimitedSupporter } from './limited-supporter.mjs';
import { Trouble } from './trouble.mjs';

const emily = new LazySupporter('Emily');
const william = new MoodySupporter('William');
const amelia = new SpecialSupporter('Amelia', 6);
const joseph = new LimitedSupporter('Joseph', 5);

// Make a chain.
emily.setNext(william).setNext(amelia).setNext(joseph);

// Various troubles occurred.
for (let i = 0; i < 10; i++) {
	emily.support(new Trouble(i));
}
