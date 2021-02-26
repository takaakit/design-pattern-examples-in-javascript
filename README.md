![](screenshots/DiagramMap.svg "All diagrams")

Design Pattern Examples in JavaScript
===

Model and code examples of GoF Design Patterns for JavaScript.  
This project is available for the following objectives:  

* To try Model-Driven Development (MDD) using Astah and M PLUS plug-in.
* To understand the mapping between UML model and JavaScript code.
* To understand GoF Design Pattern examples in JavaScript.  
  etc.

> UML model example:

![](screenshots/CompositePattern.svg "Composite Pattern")

> JavaScript code example:

```javascript:FileElement class
// ˅
'use strict';

import { FileSystemElement } from './file-system-element.mjs';

// ˄

export class FileElement extends FileSystemElement {
    // ˅
    
    // ˄

    constructor(name, size) {
        // ˅
        super();
        this.name = name;
        this.size = size;
        // ˄
    }

    // Print this element with the "upperPath".
    print(upperPath) {
        // ˅
        console.log(upperPath + '/' + this.toString());
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
```

Installation
------------
**Astah**
* Download Astah UML or Professional from [Change Vision site](http://astah.net/download), and install.  

**M PLUS plug-in**
* Download the plug-in from [M PLUS plug-in site](https://sites.google.com/view/m-plus-plugin/download), and install.  
  Use **ver.2.5.0** or higher.

**Development Environment for JavaScript**
1. Install [Visual Studio Code](https://code.visualstudio.com/download).
2. Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extensions for VS Code.
3. Install [Chrome](https://www.google.com/intl/en/chrome/) browser.
4. Install [Node.js](https://nodejs.org/en/) **ver.12.17.0** or higher.
5. Install Sleep module with the following commands using npm.  
`cd <this directory (design-pattern-examples-in-javascript)>`  
`npm install sleep`  

Usage
-----
**Code Generation**
  1. Select model elements on the model browser of Astah.
  2. Click the **Generate Code** button.  
  The generated code has **User Code Area**. The User Code Area is the area enclosed by "˅" and "˄". Handwritten code written in the User Code Area remains after a re-generation.
  ![](screenshots/GenerateCode.gif "Generate Code")

**Build and Run**
  1. Open the workspace file (design-pattern-examples-in-javascript.code-workspace) in VS Code.
  2. Select the **Run** icon in the Activity Bar on the side of VS Code.
  3. Select the configuration named Launch Program using the Configuration drop-down in the Run view.
  4. Click the **Start Debugging** button.  
     ![](screenshots/CompileAndRun.gif "Compile and Run")  

     *Note*: Before running patterns **Command**, **Mediator**, and **State**, you need to click to Go Live from the status bar to turn a server on. After running those patterns, click again to turn the server off.  
     ![](screenshots/GoLiveButton.png "Go Live button")

  For detailed usage of the tools, please see [Astah Manual](http://astah.net/manual) and [M PLUS plug-in Tips](https://sites.google.com/view/m-plus-plugin/tips).

References
----------
* Gamma, E. et al. Design Patterns: Elements of Reusable Object-Oriented Software, Addison-Wesley, 1994
* Hiroshi Yuki. Learning Design Patterns in Java [In Japanese Language], Softbank publishing, 2004

Licence
-------
This project is licensed under the Creative Commons Zero (CC0) license. The model and code are completely free to use.

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed)
