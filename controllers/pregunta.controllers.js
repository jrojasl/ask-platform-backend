const { insertData, selectDataOrderBy, selectDataWhereOrderBy } = require("../database/database");


const crearPregunta = (req, res) => {
    const { Pregunta, IdTematica, IdUsuario, FechaDeCreacion } = req.body.pregunta;

    try {

        insertData("Preguntas", "(Pregunta, IdTematica, IdUsuario, FechaDeCreacion)", `('${Pregunta}', ${IdTematica}, ${IdUsuario}, '${FechaDeCreacion}')`).then(resp => {
            res.json({
                ok: true
            })
        }).catch(err => {
            res.status(400).json({
                ok: false
            })
        })

    } catch (error) {
        res.status(400).json({
            ok: false
        })
    }
}

const obtenerPreguntasPorUsuario = async(req, res) => {
    const { IdUsuario } = req.params;

    try {

        const preguntas = await selectDataWhereOrderBy("IdPregunta, Pregunta, IdTematica, IdUsuario, IdEstadoPregunta", "Preguntas", "IdUsuario=" + IdUsuario, 'FechaDeCreacion', 'DESC');

        res.json({
            ok: true,
            preguntas
        })

    } catch (error) {
        res.status(400).json({
            ok: false
        })
    }
}

const obtenerPreguntasPorTematica = async(req, res) => {
    const { IdTematica } = req.params;
    console.log('hola');

    try {

        const preguntas = await selectDataWhereOrderBy("IdPregunta, Pregunta, IdTematica, IdUsuario, IdEstadoPregunta", "Preguntas", "IdTematica=" + IdTematica, 'FechaDeCreacion', 'DESC');

        res.json({
            ok: true,
            preguntas
        })

    } catch (error) {
        res.status(400).json({
            ok: false
        })
    }
}

const obtenerPreguntas = async(req, res) => {
    const { IdUsuario } = req.params;

    try {

        const preguntas = await selectDataOrderBy("IdPregunta, Pregunta, IdTematica, IdUsuario, IdEstadoPregunta", "Preguntas", 'FechaDeCreacion', 'DESC');

        res.json({
            ok: true,
            preguntas
        })

    } catch (error) {
        res.status(400).json({
            ok: false
        })
    }
}



module.exports = {
    crearPregunta,
    obtenerPreguntasPorUsuario,
    obtenerPreguntasPorTematica,
    obtenerPreguntas
}