let express = require('express')
let app = express()
var data = require('./data')

app.get('/data',(req,res)=>{
  res.json(data)
})
app.listen(4000)