const mysql = require('mysql');

let connection = mysql.createConnection({
    host:"sql12.freemysqlhosting.net",
    user:"sql12560558",
    password:"5TurjVeMj5",
    database : "sql12560558"
});

connection.connect(function(err) {
    if(err){
      console.log("Error in the connection")
      console.log(err)
    }
    else{
      console.log(`Database Connected`)
    }
});

module.exports = connection;