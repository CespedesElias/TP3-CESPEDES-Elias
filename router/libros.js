const express = require('express')
const controlador = require('../controlador/libros')

const router = express.Router()

router.get('./', controlador.web)
router.get('/', controlador.obtenerLibros)
router.get('/:id', controlador.obtenerLibro)
router.post('/', controlador.guardarLibro)
router.put('/:id', controlador.actualizarLibro)
router.delete('/:id', controlador.borrarLibro)

module.exports= router