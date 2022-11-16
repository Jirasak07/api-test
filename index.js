const express = require('express')
const app = express()
const PORT = 4000
var sql = require("mssql");
var config = {
    user: "Merlin",
    password: "Jirasak5409",
    server: "jirasak.database.windows.net",
    database: "jirasakdb",
  };

app.listen(PORT, ()=>{
    console.log('HI PORT 4000')
})
app.get("/test",jsonParser, function (req, res) {
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

app.get('/',(req,res,next)=>{
    res.send("Runninggggggggggg.....................")
})

module.exports = app