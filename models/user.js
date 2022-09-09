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

}
module.exports = Users