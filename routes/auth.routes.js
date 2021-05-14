const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { googleSignIn, verifyToken } = require('../controllers/auth.controllers');
const { check } = require('express-validator');

const authRouter = Router();
authRouter.post('/google', [
    check('token', 'El token de Google es obligatorio').not().isEmpty(),
    validarCampos
], googleSignIn)

authRouter.post('/verify-token', [], verifyToken)


module.exports = authRouter;