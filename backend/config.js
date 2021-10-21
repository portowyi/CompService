const env = process.env.NODE_ENV || 'development';
const credentials = require(`./.cred.${env}`);
module.exports = { credentials };