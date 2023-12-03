const server = require('./src/app');
const { conn } = require('./src/db');
const PORT = process.env.PORT || 3000;

const { getGenresToDB } = require('./src/controllers/genresControllers');

//LEVANTO EL SERVER QUE ESTA ESPERANDO INDICACIONES con conexion a la DB
conn.sync({ alter : true }).then(() => {
    //la linea de abajo llama directamente al controller que crea los genres en DB apenas arranca el servidor
    getGenresToDB();
    server.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}...`);
    });    
}).catch(error => console.error(error));
