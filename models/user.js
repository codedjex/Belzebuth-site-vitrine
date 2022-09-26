const connexion = require('../config/connexion')

class Users{
    static allUsers (callback){
        connexion.query('SELECT * FROM user', (err, rows)=>{
          if (err) throw err
          // cb = callback
          callback(rows)
        }
        )  
      }


  static deleteUser(content, callback){
  connection.query('DELETE FROM user WHERE ID = ?',[content], (error, result)=>{
    if (error) throw error;
    callback(result)
   
})
}
}
module.exports = Users