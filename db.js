const config = require('./config');
const massive = require('massive');
const connectionString = process.env.DATABASE_URL || config.database;
const massiveInstance = massive.connectSync({connectionString: connectionString});

module.exports = massiveInstance;
