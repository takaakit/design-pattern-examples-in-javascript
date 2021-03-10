/*
Represents a file system composed of files and directories. FileSystemElement makes
it possible to treat File and Directory uniformly.
 */
'use strict';

import { DirectoryElement } from './directory-element.mjs';
import { FileElement } from './file-element.mjs';

console.log('Create a file system...');

const binDir = new DirectoryElement('bin');
const lsFile = new FileElement('ls', 20);
binDir.add(lsFile);
const mkdirFile = new FileElement('mkdir', 40);
binDir.add(mkdirFile);

const emilyDir = new DirectoryElement('emily');
const homeworkFile = new FileElement('homework.doc', 60);
emilyDir.add(homeworkFile);

const jamesDir = new DirectoryElement('james');
const appFile = new FileElement('app.exe', 80);
jamesDir.add(appFile);

const homeDir = new DirectoryElement('home');
homeDir.add(emilyDir);
homeDir.add(jamesDir);

const rootDir = new DirectoryElement('root');
rootDir.add(homeDir);
rootDir.add(binDir);

rootDir.print('');
