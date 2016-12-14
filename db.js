const config = require('./config');
const massive = require('massive');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:Dec170ct131989@localhost/uglysweaters';
const massiveInstance = massive.connectSync({connectionString: connectionString});

module.exports = massiveInstance;
