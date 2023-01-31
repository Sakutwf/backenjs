// Archivo principal de la aplicación
// Importa las librerias necesarias
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Importa la clase CouchDB
const DataBase = require('./CouchDB');


// Configura el puerto de la aplicación
const port = 3000;
// Configura el middleware
app.use(bodyParser.json());
app.use(cors());
// Configura las rutas
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getInfo', async(req, res) => {
    const response = await DataBase.getInfo();
    res.send(response);
});

app.get('/data', async(req, res) => {
    const response = await DataBase.getAllData();
    res.send(response);
});
app.get('/data/:id', async(req, res) => {
    const response = await DataBase.getData(req.params.id);
    res.send(response);
});
app.get('/data/partition/:partition', async(req, res) => {
    const response = await DataBase.getPartition(req.params.partition);
    res.send(response);
});
app.post('/data', async(req, res) => {
    const response = await DataBase.postData();
    res.send(response);
});
app.put('/data/:id', async(req, res) => {
    const response = await DataBase.updateData(req.params.id, req.body);
    res.send(response);
});
app.delete('/data/:id', async(req, res) => {
    const response = await DataBase.deleteData(req.params.id);
    res.send(response);
});
// Inicia el servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map