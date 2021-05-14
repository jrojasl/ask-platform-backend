const { Router } = require('express');
const { obtenerUsuarioPorId } = require('../controllers/usuario.controllers');
const { validarJWT, validarPropietario } = require('../middlewares/validar-jwt')

const usuarioRouter = Router();

usuarioRouter.get('/:IdUsuario', [validarJWT, validarPropietario], obtenerUsuarioPorId)


module.exports = usuarioRouter;