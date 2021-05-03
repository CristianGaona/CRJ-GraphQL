import ClientService from "#root/adapters/ClientService";
//id relacionado con id de Query: typeDefs
const DeleteClientResolver = async(obj, { id }, ctx) => {
    return await ClientService.deleteClientById(id);
};

export default DeleteClientResolver;