const connection = require('../config/connexion')

class Produit{
  
    static allProduct (callback){
        connection.query('SELECT * FROM product', (err, rows)=>{
          if (err) throw err
          // cb = callback
          callback(rows)
        }
        )  
      }
      static allProduct1 (content, callback){
        connection.query('SELECT * FROM product WHERE product.ID_Product = ?',[content] ,(err, rows)=>{
          if (err) throw err
          callback(rows)
        }
        )  
      }
}

module.exports = Produit
// 