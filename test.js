const { initDatabase } = require('./test/.testingHelpers/dbTestUtil');

initDatabase().then(() => { process.exit(0)}).catch((error) => {console.log('--------->', error); process.exit(1);});
