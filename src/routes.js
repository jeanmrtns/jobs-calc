const express = require('express')
const routes = express.Router()

// Request, Response
routes.get('/', (req, res) =>{
  return res.sendFile(__dirname + '/views/index.html')
})

module.exports = routes