var express = require('express');
var app = express();
var PORT = 4000
var cors = require("cors");
var sql = require("mssql");

var config = {
    user: "Merlin",
    password: "Jirasak5409",
    server: "jirasak.database.windows.net",
    database: "jirasakdb",
  };

  app.use(cors());

app.listen(PORT, function(){
    console.log('HI PORT 4000')
})
app.get("/", function (req, res,next) {
    // connect to your database
    sql.connect(config, function (err) {
      if (err) console.log(err);
  
      // create Request object
      var request = new sql.Request();
  
      // query to the database and get the records
      request.query("select * from dbo.product", function (err, results) {
        if (err) console.log(err);
  
        // send records as a response
        res.send(results.recordset);
        console.log(results.recordset)
      });
    });
  });

app.get('/d',function(req,res,next){
    res.send("Runninggggggggggg.....................")
})

module.exports = app