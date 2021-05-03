import ClientService from "#root/adapters/ClientService";
//id relacionado con id de Query: typeDefs
const ClientByIdResolver = async(obj, { id }, ctx) => {
    return await ClientService.fetchClientById(id);
};

export default ClientByIdResolver;