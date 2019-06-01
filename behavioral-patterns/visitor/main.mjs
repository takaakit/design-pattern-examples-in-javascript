// Visitors visit a file system composed of files and directories, and displays a list of files/directories.
'use strict';

////////////////////////////////////////////////////
// USAGE:  node --experimental-modules main.mjs   //
////////////////////////////////////////////////////

import { DirectoryElement } from './directory-element.mjs';
import { FileElement } from './file-element.mjs';
import { ListVisitor } from './list-visitor.mjs';

console.log('Create a file system...');
const rootDir = new DirectoryElement('root');
const homeDir = new DirectoryElement('home');
const binDir = new DirectoryElement('bin');
const etcDir = new DirectoryElement('etc');
const emilyDir = new DirectoryElement('emily');
const jamesDir = new DirectoryElement('james');
const oliviaDir = new DirectoryElement('olivia');

rootDir.add(homeDir);
rootDir.add(binDir);
rootDir.add(etcDir);

binDir.add(new FileElement('ls', 100));
binDir.add(new FileElement('mkdir', 50));
homeDir.add(emilyDir);
homeDir.add(jamesDir);
homeDir.add(oliviaDir);

emilyDir.add(new FileElement('homework.doc', 40));
jamesDir.add(new FileElement('homework.doc', 50));
jamesDir.add(new FileElement('app.exe', 60));
oliviaDir.add(new FileElement('homework.doc', 70));
oliviaDir.add(new FileElement('app.exe', 80));
oliviaDir.add(new FileElement('tips.html', 90));

rootDir.accept(new ListVisitor());
