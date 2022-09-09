const connexion = require('../config/connexion')
const bcrypt = require('bcrypt')


function User() {};

User.prototype = {
    findUser : function(user = null, callback){
        if(user){
            var field = Number.isInteger(user) ? 'ID' : 'Username';
        }
        let sql = `SELECT * FROM user WHERE ${field} = ?`;

        connexion.query(sql, user, function(err, result){
            if(err) throw err
            if(result.length) {
                callback(result[0]);
            }else {
                callback(null);
            }
        });
    },

    createUser : function(body, callback){
        let pwd = body.Password;
        body.Password = bcrypt.hashSync(pwd,10);

        var bind = [];

        for(prop in body){
            bind.push(body[prop]);
        }
        let sql = `INSERT INTO user(Username, Email, Password) VALUES (?, ?, ?)`;

        connexion.query(sql, bind, function(err, result) {
            if(err) throw err;
            // return the last inserted id. if there is no error
            callback(result.insertId);
        });
    },

    loginUser : function(Username, Password, callback)
    {
        this.findUser(Username, function(user){
            if(user){
                if(bcrypt.compareSync(Password, user.Password)){
                    callback(user)
                    return;
                }
            }
            callback(null)
        });
    }
    
}


module.exports = User




  

