const connection = require('../config/connexion')

class ProduitType{
    static allProductType (callback){
        connection.query('SELECT * FROM type', (err, rows)=>{
          if (err) throw err
          // cb = callback
          callback(rows)
        } )} 
}

module.exports = ProduitType