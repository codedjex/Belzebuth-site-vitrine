let mysql      = require('mysql');
const util = require('util');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'belzebuth',
  multipleStatements: true
  
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

connection.query = util.promisify(connection.query);
module.exports = connection
