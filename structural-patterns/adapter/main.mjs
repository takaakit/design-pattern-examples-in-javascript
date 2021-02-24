/*
Display the given string as follows
```
-- Nice to meet you --
```
or display it as follows.
```
[[ Nice to meet you ]]
```
 */
'use strict';

import { PrintMessageDisplay } from './print-message-display.mjs';

const p = new PrintMessageDisplay('Nice to meet you');
p.printWeak();
p.printStrong();
