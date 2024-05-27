const express = require('express')
const routerLibros = require('./router/libros')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/libros', routerLibros)
app.use(express.static('public')) 

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor escuchando en localhost: ${PORT}`))
server.on(`error`, error => console.log(`Error en servidor: ${error.message}`))