const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('OK')
  res.end()
})

const PORT = process.env.PORT || 3000

app.listen(PORT)