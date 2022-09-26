const connection = require('../config/connexion')

class Message{
    static create (content, callback){
      connection.query('INSERT INTO comment SET ?, created_at= ?',[content, new Date()], (err, result)=>{
        if (err) throw err
        // cb = callback
        callback(result)
      }
      )  
    }
    static all (callback){
        connection.query('SELECT * FROM comment', (err, rows)=>{
          if (err) throw err
          // cb = callback
          callback(rows)
        }
        )  
      }
      static deleteCom(content, callback){
        connection.query('DELETE FROM comment WHERE ID = ?',[content], (error, result)=>{
          if (error) throw error;
          callback(result)
         
  })
  }
  static validCom (callback){
    connection.query('SELECT * FROM comment WHERE valider = 1', (err, rows)=>{
      if (err) throw err
      // cb = callback
      callback(rows)
    }
    )  
  }
}

module.exports = Message