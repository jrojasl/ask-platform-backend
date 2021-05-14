const { selectData } = require("../database/database");


const obtenerTematicas = async(req, res) => {
    try {
        selectData('*', 'Tematicas').then(resp => {
            const tematicas = resp;
            res.json({
                ok: true,
                tematicas
            })
        }).catch(err => {
            return res.json({
                ok: false
            })
        })

    } catch (error) {
        res.status(400).json({
            ok: false
        })
    }
}

module.exports = {
    obtenerTematicas
}