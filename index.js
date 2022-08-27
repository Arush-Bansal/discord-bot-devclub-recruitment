const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('OK')
  res.end()
})

app.listen(3000)