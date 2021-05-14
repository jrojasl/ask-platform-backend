const jwt = require("jsonwebtoken");
const { selectDataWhere } = require("../database/database");


const validarJWT = (req, res, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

        req.uid = uid;
        req.token = token;

        next();

    } catch (err) {
        return res.status(401).json({
            ok: false,
            msg: 'Token incorrecto'
        });
    }

}

const validarPropietario = async(req, res, next) => {

    const uid = req.uid;

    try {

        const usuarioDB = await selectDataWhere('IdUsuario', 'Usuarios', `IdUsuario=${uid}`)


        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'El usuario no existe'
            })
        }


        if (usuarioDB[0].IdUsuario !== Number(uid)) {
            return res.status(403).json({
                ok: false,
                msg: 'No tiene privilegios para hacer eso'
            })
        }

        next();

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}


module.exports = {
    validarJWT,
    validarPropietario,
}