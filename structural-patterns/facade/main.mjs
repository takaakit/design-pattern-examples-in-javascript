// Create a simple homepage.
'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs                       //
// NOTE :  Use Node.js ver.13.2.0 or higher.   //
/////////////////////////////////////////////////

import { PageCreator } from './page-creator.mjs';

PageCreator.getInstance().createSimpleHomepage('emily@example.com', 'Homepage.html');
