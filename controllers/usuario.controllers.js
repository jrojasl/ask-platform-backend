const { selectDataWhere } = require("../database/database");

const obtenerUsuarioPorId = async(req, res) => {
    const { IdUsuario } = req.params;
    console.log(IdUsuario);

    try {

        const usuarios = await selectDataWhere("Correo, Foto, IdRol, IdUsuario, NombreDeUsuario", "Usuarios", "IdUsuario=" + IdUsuario);
        const usuario = usuarios[0];

        res.json({
            ok: true,
            usuario
        })

    } catch (error) {
        res.status(400).json({
            ok: false
        })
    }
}


module.exports = {
    obtenerUsuarioPorId
}