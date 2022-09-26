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
      static createProduit (content, callback){
        connection.query('INSERT INTO product SET ?',[content], (err, result)=>{
          if (err) throw err
          // cb = callback
          callback(result)
        }
        )  
      }
      static deleteProduct(content, callback){
        connection.query('DELETE FROM product WHERE ID = ?',[content], (error, result)=>{
          if (error) throw error;
          callback(result)
         
  })
  }
  
}


module.exports = Produit
// 