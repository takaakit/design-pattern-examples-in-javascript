// Login dialog for entering a username and password.
'use strict';

//////////////////////////////////////////////////////////////////////////////
// USAGE:                                                                   //
//   1. Prepare a web server.                                               //
//      e.g. use http-server.                                               //
//        1.1. Install http-server with the following command.              //
//             "npm install -g http-server"                                 //
//        1.2. Move to the directory of this file on the console.           //
//        1.3. Start http-server with the following command.                //
//             "http-server"                                                //
//                                                                          //
//   2. Open the "mediator-example.html" with the latest Chrome using URL.  //
//      e.g. "http://127.0.0.1:8080/mediator-example.html"                  //
//////////////////////////////////////////////////////////////////////////////
import { AppLogin } from './app-login.mjs';
const appLogin = new AppLogin();
