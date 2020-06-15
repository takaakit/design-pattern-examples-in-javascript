// At the time of printing, create an instance of the printer for the first time.
// In order to spend time creating a printer, call a heavy task when creating a printer instance.
'use strict';

/////////////////////////////////////////////////
// USAGE:  node main.mjs                       //
// NOTE :  Use Node.js ver.12.17.0 or higher.  //
/////////////////////////////////////////////////

import { PrinterProxy } from './printer-proxy.mjs';

const p = new PrinterProxy('Emily\'s printer');
console.log('The current printer is ' + p.printerName + '.');
p.printerName = 'William\'s printer';
console.log('The current printer is ' + p.printerName + '.');
p.output('Nice to meet you.');
