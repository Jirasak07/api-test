const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT, ()=>{
    console.log('HI PORT 4000')
})

app.get('/',(req,res,next)=>{
    res.send("Runninggggggggggg.....................")
})

module.exports = app