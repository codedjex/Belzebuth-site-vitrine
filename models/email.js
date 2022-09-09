const { request } = require('http')
const connection = require('../config/connexion')


class Email{
    static createMessage (content, callback){
      connection.query('INSERT INTO messagerie SET ?, created_at= ?',[content, new Date()], (err, result)=>{
        if (err) throw err
        // cb = callback
        callback(result)
      }
      )  
    }
    static allMessage (callback){
        connection.query('SELECT * FROM messagerie', (err, rows)=>{
          if (err) throw err
          // cb = callback
          callback(rows)
        }
        )  
      }

    static deleteMessage(content, callback){
      connection.query('DELETE FROM messagerie WHERE ID = ?',[content], (error, result)=>{
        if (error) throw error;
        callback(result)
       
        }
        )
      }

}

module.exports = Email