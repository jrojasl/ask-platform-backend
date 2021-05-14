const { selectDataWhere, insertData } = require("../database/database");
const { googleVerify } = require("../helpers/google");
const { generarJWT } = require("../helpers/jwt");
const jwt = require("jsonwebtoken");


const googleSignIn = async(req, res = response) => {


    const googleToken = req.body.token;

    const rol = 2;


    try {

        const { name, email, picture } = await googleVerify(googleToken);

        const usuarios = await selectDataWhere('*', 'Usuarios', `Correo='${email}'`);;


        if (usuarios.length === 0) {
            console.log('hola');

            insertData("Usuarios", "(Correo, Contrasena, NombreDeUsuario, IdRol, Foto)", `('${email}', '@@@', '${name}', ${rol}, '${picture}')`).then(async(id) => {
                console.log(id);
                if (id === false) {
                    return res.json({
                        ok: false,
                        msg: 'No se pudieron registrar los datos'
                    })
                }

                const token = await generarJWT(id);


                return res.json({
                    ok: true,
                    token
                });
            }).catch(err => {
                return res.status(400).json({
                    ok: false,
                    msg: 'No se pudieron registrar los datos'
                })
            })
        } else {
            const usuario = usuarios[0];

            const token = await generarJWT(usuario.IdUsuario);

            res.json({
                ok: true,
                token
            })
        }


    } catch (error) {

        res.json({
            ok: false,
            msg: 'Token incorrecto',
        })

    }


}

const verifyToken = (req, res) => {
    const token = req.body.token;

    try {

        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

        selectDataWhere('IdUsuario, Correo, IdRol, Foto, NombreDeUsuario', 'Usuarios', `IdUsuario=${uid}`).then(results => {

            const usuario = {
                Correo: results[0].Correo,
                IdRol: results[0].IdRol,
                Foto: results[0].Foto,
                IdUsuario: results[0].IdUsuario,
                NombreDeUsuario: results[0].NombreDeUsuario
            }

            res.json({
                ok: true,
                usuario,
                msg: 'token verificado'
            })

        }).catch(() => {
            res.json({
                ok: false,
                msg: 'token falso'
            })
        })


    } catch (error) {

        res.json({
            ok: false,
            msg: 'token falso'
        })

    }

}

module.exports = {
    googleSignIn,
    verifyToken
}