const express = require('express')
const server = express()
const routes = require('./routes')

// Configuração do template EJS
server.set('view engine', 'ejs')

// Habilitar arquivos estáticos
server.use(express.static('public'))

// Rotas
server.use(routes)

server.listen(3000, () => {
  console.log('Servidor rodando!')
})
