const libros = [
    {id : '1', titulo: 'Libro uno', autor: 'one', anio: 1991},
    {id : '2', titulo: 'libro dos', autor: 'two', anio: 1992},
    {id : '3', titulo: 'Libro tres', autor: 'three', anio: 1993},
]
const obtenerLibros = () => libros

const obtenerLibro = id => {
    const libro = libros.find( l => l.id === id)
    //console.log('libro: ',libro)
    return libro || {}
}

const guardarLibro = (libro) => {
    const id = String(parseInt(libros[libros.length-1]?.id || 0) + 1)
    //console.log(libro)

    const libroConID = { id , ...libro }
    
    console.log(libroConID)
    libros.push(libroConID)
    return libroConID
}

const actualizarLibro = (id, libro) => {
    const index = libros.findIndex( libro => libro.id === id)
    if (index != -1){
        const libroAnt = libros[index]
        const libroAct = {...libroAnt, ...libro }
        libros.splice(index, 1, libroAct)
        return libroAct
    }
    else{
        return {}
    }
}

const borrarLibro = (id) => {
    let libro = {}
    const index = libros.findIndex( libro => libro.id === id)
    if(index != -1){
        libro = libros.splice(index, 1)
    }
    return libro
}

module.exports = {
    obtenerLibros,
    obtenerLibro,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}