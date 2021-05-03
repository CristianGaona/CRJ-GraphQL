import got from "got";

const CLIENT_SERVICE_URI = "http://192.168.0.12:5000/devops/microservice/clients";

export default class ClientService {

    static async fetchClient() {
        const body = await got.get(`${CLIENT_SERVICE_URI}/list`).json();

        return body;
    }

    static async fetchClientById(idClient) {
        const body = await got.get(`${CLIENT_SERVICE_URI}/${idClient}`).json();

        return body;
    }

    static async getClientBySeller(idSeller) {
        const body = await got.get(`${CLIENT_SERVICE_URI}/myClients/${idSeller}`).json();

        return body;
    }

    static async saveClient({ dni, nombre, apellido, direccion, correo, vendedor_id }) { //entrada desde resolvers (MUtation)
        const body = await got.post(`${CLIENT_SERVICE_URI}/save`, {
            json: { dni, nombre, apellido, direccion, correo, vendedor_id }
        }).json();

        return body;

    }

    static async updateClient({ id, dni, nombre, apellido, direccion, correo, vendedor_id }) { //entrada desde resolvers (Mutation)
        const body = await got.put(`${CLIENT_SERVICE_URI}/update/${id}`, {
            json: { id, dni, nombre, apellido, direccion, correo, vendedor_id }
        }).json();

        return body;

    }

    static async deleteClientById(idClient) { //entrada desde resolvers (Mutation)
        const body = await got.delete(`${CLIENT_SERVICE_URI}/delete/${idClient}`).json();

        return "Client deleted";

    }

}