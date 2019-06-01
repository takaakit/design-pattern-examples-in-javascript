// Create a simple homepage.
'use strict';

////////////////////////////////////////////////////
// USAGE:  node --experimental-modules main.mjs   //
////////////////////////////////////////////////////

import { PageCreator } from './page-creator.mjs';

PageCreator.getInstance().createSimpleHomepage('emily@example.com', 'Homepage.html');
