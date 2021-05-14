const { Router } = require('express');
const { obtenerTematicas } = require('../controllers/tematica.controllers');
const { validarJWT, validarPropietario } = require('../middlewares/validar-jwt')

const tematicaRouter = Router();

tematicaRouter.get('/', [validarJWT], obtenerTematicas)


module.exports = tematicaRouter;