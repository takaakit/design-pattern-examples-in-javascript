// Simple drawing application.
'use strict';

/////////////////////////////////////////////////////////////////////////////
// USAGE:                                                                  //
//   1. Prepare a web server.                                              //
//      e.g. use http-server.                                              //
//        1.1. Install http-server with the following command.             //
//             "npm install -g http-server"                                //
//        1.2. Move to the directory of this file on the console.          //
//        1.3. Start http-server with the following command.               //
//             "http-server"                                               //
//                                                                         //
//   2. Open the "command-example.html" with the latest Chrome using URL.  //
//      e.g. "http://127.0.0.1:8080/command-example.html"                  //
/////////////////////////////////////////////////////////////////////////////
import { AppMain } from './app-main.mjs';
const appMain = new AppMain();
