// Descripcion: Archivo que permite conectarse a la base de datos de CouchDB y realizar las operaciones CRUD
// Autor: Team AgricilturaDigital
// Fecha: 2020-10-20
// Versión: 1.0.0
class CouchDB {
    nano = null;
    test = null;

    constructor() {
        this.nano = require('nano')('https://biovision:ffuentesbiovision@couchdb.in.biovisionagricola.cl');
        // Declara la base de datos
        this.test = this.nano.db.use('test');
    }

    // Metodo para agregar un documento a la base de datos
    async postData() {
        id = await nano.uuids(1)
        particion = "particion-x-y"
        data = {}
        data['a'] = 1
        data['b'] = 2
        data['c'] = 3
        const response = await test.insert({
            _id: particion + ':' + id.uuids,
            data: data
        })
        return response
    }

    // Metodo para obtener un documento de la base de datos
    async getData(id) {
        const response = await test.get(id)
        return response
    }

    // Metodo para obtener una particion de la base de datos
    async getPartition(partition) {
        const response = await test.partitionedList(partition, { include_docs: true })
        return response
    }

    // Metodo para obtener todos los documentos de la base de datos
    async getAllData() {
        const response = await test.list({ include_docs: true })
        return response
    }

    // Metodo para actualizar un documento de la base de datos
    async updateData(id, data) {
        const response = await test.insert({
            _id: id,
            data: data
        })
        return response
    }

    // Metodo para eliminar un documento de la base de datos
    async deleteData(id) {
        const response = await test.destroy(id)
        return response
    }

    async getInfo() {
        const response = await nano.db.get('test')
        return response
    }

}

module.exports = { CouchDB };