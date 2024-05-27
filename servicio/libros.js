const model = require('../model/libros')

const obtenerLibros = () => {
    return model.obtenerLibros()
}

const obtenerLibro = (id) => {
    const libro = model.obtenerLibro(id)
    return libro
}

const guardarLibro = (libro) => {
    const libroGuardado = model.guardarLibro(libro)
    return libroGuardado
}

const actualizarLibro = (id, libro) => {
    const libroActualizado = model.actualizarLibro(id, libro)
    return libroActualizado
}

const borrarLibro = (id) => {
    const libroBorrado = model.borrarLibro(id)
    return libroBorrado
}

module.exports = {
    obtenerLibros,
    obtenerLibro,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}
