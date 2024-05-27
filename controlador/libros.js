const servicio = require('../servicio/libros')

const web = (req, res) =>{
    res.sendFile( process.cwd() + '/public/index.html')
}

const obtenerLibros = (req, res) => {
    const libros = servicio.obtenerLibros()
    res.json(libros) 
}

const obtenerLibro = (req, res) => {
    const { id } = req.params
    const libro = servicio.obtenerLibro(id)
    res.json(libro)
}

const guardarLibro = (req, res) => {
    //const libro = req.body
    const { body } = req
    const libroGuardado = servicio.guardarLibro(body)
    res.json(libroGuardado)
}

const actualizarLibro = (req, res) => {
    const { id } = req.params
    const libro = req.body
    const libroActualizado = servicio.actualizarLibro(id, libro)
    res.json(libroActualizado)
}

const borrarLibro = (req, res) => {
    const { id } = req.params
    const libroBorrado = servicio.borrarLibro(id)
    res.json(libroBorrado)
}

module.exports = {
    web,
    obtenerLibros,
    obtenerLibro,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}