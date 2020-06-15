// Factory to make ID cards.
'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs                       //
// NOTE :  Use Node.js ver.12.17.0 or higher.  //
/////////////////////////////////////////////////

import { CreditCardFactory } from './id-Card/credit-card-factory.mjs';

const factory = new CreditCardFactory();

const jacksonCard = factory.create('Jackson');
jacksonCard.use();

const sophiaCard = factory.create('Sophia');
sophiaCard.use();

const oliviaCard = factory.create('Olivia');
oliviaCard.use();
