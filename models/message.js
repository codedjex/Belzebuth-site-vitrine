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
      static deleteCom(content){
        connection.query('DELETE FROM comment WHERE ID = ?',[content], (error, result)=>{
          if (error) throw error;
         
  })
  }
}

module.exports = Message