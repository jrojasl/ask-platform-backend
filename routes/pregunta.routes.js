const { Router } = require('express');
const { crearPregunta, obtenerPreguntasPorUsuario, obtenerPreguntas, obtenerPreguntasPorTematica } = require('../controllers/pregunta.controllers');
const { validarJWT, validarPropietario } = require('../middlewares/validar-jwt')

const preguntaRouter = Router();

preguntaRouter.post('/', [validarJWT], crearPregunta)
preguntaRouter.get('/:IdUsuario', [validarJWT], obtenerPreguntasPorUsuario)
preguntaRouter.get('/', [validarJWT], obtenerPreguntas)
preguntaRouter.get('/tematicas/:IdTematica', [validarJWT], obtenerPreguntasPorTematica)


module.exports = preguntaRouter;