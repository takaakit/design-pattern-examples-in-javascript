[<img src="./screenshots/AllPatterns.svg">](https://raw.githubusercontent.com/takaakit/design-pattern-examples-in-javascript/master/screenshots/AllPatterns.svg)

Design Pattern Examples in JavaScript
===

Model and code examples of GoF Design Patterns for JavaScript.  
This project is available for the following objectives:  

* To understand GoF Design Pattern examples in JavaScript.
* To understand the mapping between UML model and JavaScript code.
* To try model-driven development (MDD) using Astah and m plus plug-in.

> UML model example:

![](./screenshots/CompositePattern.svg "Composite Pattern")

<a id="code-example"></a>
> JavaScript code example:

```javascript
// ˅
'use strict';

import { FileSystemElement } from './file-system-element.mjs';

// ˄

export class FileElement extends FileSystemElement {
    // ˅
    
    // ˄

    _name;

    _size;

    constructor(name, size) {
        // ˅
        super();
        this._name = name;
        this._size = size;
        // ˄
    }

    get name() {
        // ˅
        return this._name;
        // ˄
    }

    get size() {
        // ˅
        return this._size;
        // ˄
    }

    // Print this element with the "upperPath".
    print(upperPath) {
        // ˅
        console.log(`${upperPath}/${this.toString()}`);
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
**UML Modeling Tool**
* Download the modeling tool [Astah](https://astah.net/download) UML/Professional **ver.10.0.0** or higher, and install.  
* Download [m plus](https://sites.google.com/view/m-plus-plugin/download) plug-in **ver.3.1.3-preview.1** or higher, and add it to Astah.  
  [How to add plugins to Astah](https://astahblog.com/2014/12/15/astah_plugins/)

**JavaScript Development Environment**
1. Install [Visual Studio Code](https://code.visualstudio.com/download) **ver.1.46** or higher.
2. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extensions for VS Code.
3. Install [Chrome](https://www.google.com/intl/en/chrome/) browser.
4. Install [Node.js](https://nodejs.org/en/) **ver.12.17.0** or higher.

Usage
-----
**Code Generation from UML**
  1. Open the Astah file (model/DesignPatternExamplesInJavascript.asta).
  2. Select model elements on the model browser of Astah.
  3. Click the **Generate Code** button.  
  ![](./screenshots/GenerateCode.gif "Generate Code")  
  The generated code has **User Code Area**. The User Code Area is the area enclosed by "˅" and "˄". Handwritten code written in the User Code Area remains after a re-generation. [View code example](#code-example).  
  For detailed usage of the tools, please see [Astah Manual](https://astah.net/manual) and [m plus plug-in tips](https://sites.google.com/view/m-plus-plugin-tips).

**Run**
  1. Open the workspace file (design-pattern-examples-in-javascript.code-workspace) in VS Code.
  2. Select the **Run** icon in the Activity Bar on the side of VS Code.
  3. Select the configuration named Launch Program using the Configuration drop-down in the Run view.
  4. Click the **Start Debugging** button.  
     ![](./screenshots/CompileAndRun.gif "Compile and Run")  

     *Note*: Before running patterns **Command**, **Mediator**, and **State**, you need to click to Go Live from the status bar to turn a server on. After running those patterns, click again to turn the server off.  
     ![](./screenshots/GoLiveButton.png "Go Live button")

  For detailed usage of the tools, please see [Astah Manual](https://astah.net/manual) and [M PLUS plug-in Tips](https://sites.google.com/view/m-plus-plugin-tips).

References
----------
* Gamma, E. et al. Design Patterns: Elements of Reusable Object-Oriented Software, Addison-Wesley, 1994
* Hiroshi Yuki. Learning Design Patterns in Java [In Japanese Language], Softbank publishing, 2004

License
-------
This project is licensed under the Creative Commons Zero (CC0) license. The model and code are completely free to use.

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](https://creativecommons.org/publicdomain/zero/1.0/deed)

Other Language Examples
-----------------------
[C++](https://github.com/takaakit/design-pattern-examples-in-cpp), [C#](https://github.com/takaakit/design-pattern-examples-in-csharp), [Crystal](https://github.com/takaakit/design-pattern-examples-in-crystal), [Go](https://github.com/takaakit/design-pattern-examples-in-golang), [Java](https://github.com/takaakit/design-pattern-examples-in-java), [Kotlin](https://github.com/takaakit/design-pattern-examples-in-kotlin), [Python](https://github.com/takaakit/design-pattern-examples-in-python), [Ruby](https://github.com/takaakit/design-pattern-examples-in-ruby), [Scala](https://github.com/takaakit/design-pattern-examples-in-scala), [Swift](https://github.com/takaakit/design-pattern-examples-in-swift), [TypeScript](https://github.com/takaakit/design-pattern-examples-in-typescript)
