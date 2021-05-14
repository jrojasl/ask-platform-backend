const configDB = require('./config.json');
const mysql = require('mysql');
const pool = mysql.createPool({
    host: configDB.dbhost,
    user: configDB.dbuser,
    password: configDB.dbpassword,
    database: configDB.dbname
});


const query1 = 'CREATE TABLE Usuarios (IdUsuario int AUTO_INCREMENT, Correo varchar(255) NOT NULL, Contrasena varchar(255) NOT NULL, NombreDeUsuario varchar(255) NOT NULL, IdRol INT NOT NULL, Foto TEXT NOT NULL, Google BOOLEAN not null default 1, PRIMARY KEY (IdUsuario))'
const query2 = 'CREATE TABLE Likes (IdLike int AUTO_INCREMENT, IdUsuario INT NOT NULL, PRIMARY KEY (IdLike))'
const query3 = 'CREATE TABLE Respuestas (IdRespuesta int AUTO_INCREMENT, Respuesta TEXT NOT NULL, IdUsuario INT NOT NULL, IdPregunta INT NOT NULL, FechaDeCreacion DATETIME NOT NULL, PRIMARY KEY (IdRespuesta))'
const query4 = 'CREATE TABLE RespuestasLikes (IdRespuestaLike int AUTO_INCREMENT, IdLike INT NOT NULL, IdRespuesta INT NOT NULL, PRIMARY KEY (IdRespuestaLike))'
const query5 = 'CREATE TABLE Preguntas (IdPregunta int AUTO_INCREMENT, Pregunta TEXT NOT NULL, IdTematica INT NOT NULL, IdUsuario INT NOT NULL, IdEstadoPregunta INT NOT NULL default 0, PRIMARY KEY (IdPregunta))'
const query6 = 'CREATE TABLE Tematicas (IdTematica int AUTO_INCREMENT, Tematica varchar(255) NOT NULL, PRIMARY KEY (IdTematica))';
const query7 = 'CREATE TABLE EstadoPreguntas (IdEstadoPregunta int AUTO_INCREMENT, Estado varchar(255) NOT NULL, PRIMARY KEY (IdEstadoPregunta))';
const query8 = 'CREATE TABLE Roles (IdRol int AUTO_INCREMENT, Rol varchar(255) NOT NULL, PRIMARY KEY (IdRol))';
const dropTable = "DROP TABLE Preguntas"
const dropFK = "ALTER TABLE Respuestas DROP FOREIGN KEY FK_PreguntaRespuesta"
const ALTER1 = "ALTER TABLE Usuarios ADD CONSTRAINT FK_Rol_Usuario  FOREIGN KEY (IdRol) REFERENCES Roles(IdRol);"
const ALTER2 = "ALTER TABLE Likes ADD CONSTRAINT FK_Usuario_Like  FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario);"
const ALTER3 = "ALTER TABLE Respuestas ADD CONSTRAINT FK_Usuario_Respuesta  FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario);"
const ALTER4 = "ALTER TABLE Respuestas ADD CONSTRAINT FK_Pregunta_Respuesta  FOREIGN KEY (IdPregunta) REFERENCES Preguntas(IdPregunta);"
const ALTER5 = "ALTER TABLE RespuestasLikes ADD CONSTRAINT FK_Like_RespuestaLike  FOREIGN KEY (IdLike) REFERENCES Likes(IdLike);"
const ALTER6 = "ALTER TABLE RespuestasLikes ADD CONSTRAINT FK_Respuesta_RespuestaLike  FOREIGN KEY (IdRespuesta) REFERENCES Respuestas(IdRespuesta);"
const ALTER7 = "ALTER TABLE Preguntas ADD CONSTRAINT FK_Tematica_Pregunta  FOREIGN KEY (IdTematica) REFERENCES Tematicas(IdTematica);"
const ALTER8 = "ALTER TABLE Preguntas ADD CONSTRAINT FK_Usuario_Pregunta  FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario);"
const ALTER9 = "ALTER TABLE Preguntas ADD CONSTRAINT FK_EstadoPregunta_Pregunta  FOREIGN KEY (IdEstadoPregunta) REFERENCES EstadoPreguntas(IdEstadoPregunta);"
const insertTipo = "insert into Tematicas (Tematica) VALUES ('Física')"
const ALTERTABLEdate = "ALTER TABLE Preguntas MODIFY FechaDeCreacion DATETIME NOT NULL;"
const createTables = () => {
    pool.getConnection(function(err, connection) {
        connection.query(ALTERTABLEdate,
            function(err, results, fields) {
                if (err) {
                    console.log(err);
                }
                console.log(results);
            });
    })
}


const connectDB = () => {

    return new Promise((res, rej) => {

        pool.getConnection(function(err, connection) {
            if (connection) {
                globalConnection = connection
                res(true)
            } else {
                rej(false);
            }
        });

    });




}



const selectData = (columns, table) => {

    return new Promise((res, rej) => {

        try {

            pool.getConnection(function(err, connection) {
                if (connection) {
                    connection.query("select " + columns + " from " + table, function(err, results, fields) {
                        if (err) {
                            res(false)
                            connection.release();
                        }
                        res(results);
                        connection.release();

                    });
                } else {
                    rej(false);
                }
            });


        } catch (error) {
            rej(false);
        }



    });



}
const selectDataOrderBy = (columns, table, by, direction) => {

    return new Promise((res, rej) => {

        try {

            pool.getConnection(function(err, connection) {
                if (connection) {
                    connection.query("select " + columns + " from " + table + ' ORDER BY ' + by + ' ' + direction, function(err, results, fields) {
                        if (err) {
                            res(false)
                            connection.release();
                        }
                        res(results);
                        connection.release();

                    });
                } else {
                    rej(false);
                }
            });


        } catch (error) {
            rej(false);
        }



    });



}

const selectDataWhere = (columns, table, condition) => {

    return new Promise((res, rej) => {

        try {

            pool.getConnection(function(err, connection) {
                if (connection) {
                    connection.query('select ' + columns + ' from ' + table + ' where ' + condition, function(err, results, fields) {
                        if (err) {
                            console.log(err);
                            rej(false)
                            connection.release();
                        }
                        res(results);
                        connection.release();
                    });

                } else {
                    rej(false);
                }
            });

        } catch (error) {
            rej(false);
        }



    });



}
const selectDataWhereOrderBy = (columns, table, condition, by, direction) => {

    return new Promise((res, rej) => {

        try {

            pool.getConnection(function(err, connection) {
                if (connection) {
                    connection.query('select ' + columns + ' from ' + table + ' where ' + condition + ' ORDER BY ' + by + ' ' + direction, function(err, results, fields) {
                        if (err) {
                            console.log(err);
                            rej(false)
                            connection.release();
                        }
                        res(results);
                        connection.release();
                    });

                } else {
                    rej(false);
                }
            });

        } catch (error) {
            rej(false);
        }



    });



}


const insertData = (table, columns, values) => {


    return new Promise((res, rej) => {

        try {
            pool.getConnection(function(err, connection) {
                if (connection) {
                    connection.query("insert into " + table + " " + columns + " VALUES " + values, function(err, results, fields) {
                        if (err) {
                            console.log(err);
                            console.log(err);
                            rej(false)
                            connection.release();
                        }
                        res(results.insertId);
                        connection.release();
                    });
                } else {
                    rej(false);
                }
            });


        } catch (error) {
            rej(false);
        }



    });

}

const insertDataWhere = (table, values, condition) => {


    return new Promise((res, rej) => {

        try {

            pool.getConnection(function(err, connection) {
                if (connection) {
                    connection.query("insert into " + table + " " + values + " where " + condition, function(err, results, fields) {
                        if (err) {
                            console.log(err);
                            rej(false)
                            connection.release();
                        }
                        console.log(results);
                        res(true);
                        connection.release();
                    });

                } else {
                    rej(false);
                }
            });

        } catch (error) {
            rej(false);
        }



    });

}

const updateData = (table, values, condition) => {

    return new Promise((res, rej) => {

        try {


            pool.getConnection(function(err, connection) {
                if (connection) {
                    connection.query('update ' + table + ' set ' + values + ' where ' + condition, function(err, results, fields) {
                        if (err) {
                            console.log(err);
                            rej(false)
                            connection.release();
                        }
                        res(true);
                        connection.release();
                    });
                } else {
                    rej(false);
                }
            });




        } catch (error) {
            rej(false);
        }



    });



}

const deleteData = (table, condition) => {

    return new Promise((res, rej) => {

        try {

            pool.getConnection(function(err, connection) {
                if (connection) {
                    connection.query('delete FROM ' + table + ' WHERE ' + condition, function(err, results, fields) {
                        if (err) {
                            console.log(err);
                            rej(false)
                            connection.release();
                        }
                        res(true);
                        connection.release();
                    });

                } else {
                    rej(false);
                }
            });



        } catch (error) {
            rej(false);
        }



    });



}

module.exports = {
    connectDB,
    selectData,
    selectDataOrderBy,
    selectDataWhere,
    selectDataWhereOrderBy,
    insertData,
    insertDataWhere,
    updateData,
    deleteData,
    createTables

}