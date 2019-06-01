// Create a hierarchical link collection as an HTML file.
'use strict';

//////////////////////////////////////////////////////////////////////
// USAGE:  node --experimental-modules main.mjs (Concrete Factory)  //
// Ex.1 :  node --experimental-modules main.mjs ListFactory         //
// Ex.2 :  node --experimental-modules main.mjs TableFactory        //
//////////////////////////////////////////////////////////////////////

if (process.argv.length != 3) {
    console.log('Usage: node --experimental-modules main.mjs (Concrete Factory)');
    console.log('Ex.1 : node --experimental-modules main.mjs ListFactory');
    console.log('Ex.2 : node --experimental-modules main.mjs TableFactory');
}
else {
    const factory = getFactory(process.argv[2]);

    const washingtonPost = factory.createLink('The Washington Post', 'https://www.washingtonpost.com/');
    const newYorkTimes = factory.createLink('The NewYork Times', 'https://www.nytimes.com/');
    const financialTimes = factory.createLink('The Financial Times', 'https://www.ft.com/');
    const yahoo = factory.createLink('Yahoo!', 'https://www.yahoo.com/');
    const google = factory.createLink('Google', 'https://www.google.com/');
    const mlb = factory.createLink('MLB', 'https://www.mlb.com/');
    const fifa = factory.createLink('FIFA', 'https://www.fifa.com/');
    const wba = factory.createLink('WBA', 'http://www.wbaboxing.com/');
    const wbc = factory.createLink('WBC', 'http://www.wbcboxing.com/');

    const newspaper = factory.createData('Newspaper');
    newspaper.add(washingtonPost);
    newspaper.add(newYorkTimes);
    newspaper.add(financialTimes);

    const searchEngine = factory.createData('Search engine');
    searchEngine.add(yahoo);
    searchEngine.add(google);

    const sports = factory.createData('Sports');
    sports.add(mlb);
    sports.add(fifa);
    sports.add(wba);
    sports.add(wbc);

    const linkPage = factory.createPage('LinkPage', 'James Smith');
    linkPage.add(newspaper);
    linkPage.add(searchEngine);
    linkPage.add(sports);

    linkPage.output();
}


// ----------
// Factory acquisition function needs to be defined in this file to avoid circular references.
import { ListFactory } from './list-factory/list-factory.mjs';
import { TableFactory } from './table-factory/table-factory.mjs';

export function getFactory(classname) {
    if (classname === 'ListFactory') {
        return new ListFactory();
    }
    else if (classname === 'TableFactory') {
        return new TableFactory();
    }
    else {
        throw new Error('The argument is invalid.');
    }
}
