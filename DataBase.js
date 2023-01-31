// Descripcion: Archivo que permite conectarse a la base de datos de CouchDB y realizar las operaciones CRUD
// Autor: Team AgricilturaDigital
// Fecha: 2020-10-20
// Versión: 1.0.0

// Importa la libreria nano para conectarse a la base de datos
const nano = require('nano')('https://biovision:ffuentesbiovision@couchdb.in.biovisionagricola.cl');
// Declara la base de datos
const inia = nano.db.use('adconv2');

// Metodo para agregar un documento a la base de datos
async function postData() {
    id = await nano.uuids(1)
    particion = "particion-x-y"
    data = {}
    data['a'] = 1
    data['b'] = 2
    data['c'] = 3
    const response = await inia.insert({
        _id: particion + ':' + id.uuids,
        data: data
    })
    return response
}

// Metodo para obtener un documento de la base de datos
async function getData(id) {
    const response = await inia.get(id)
    return response
}

// Metodo para obtener una particion de la base de datos
async function getPartition(partition) {
    const response = await inia.partitionedList(partition, { include_docs: true })
    return response
}

// Metodo para obtener todos los documentos de la base de datos
async function getAllData() {
    const response = await inia.list({ include_docs: true })
    return response
}

// Metodo para actualizar un documento de la base de datos
async function updateData(id, data) {
    const response = await inia.insert({
        _id: id,
        data: data
    })
    return response
}

// Metodo para eliminar un documento de la base de datos
async function deleteData(id) {
    const response = await inia.destroy(id)
    return response
}