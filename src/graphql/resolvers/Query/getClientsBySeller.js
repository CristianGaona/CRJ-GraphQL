import ClientService from "#root/adapters/ClientService";
//id relacionado con id de Query: typeDefs
const ClientsBySellerResolver = async(obj, { id }, ctx) => {
    return await ClientService.getClientBySeller(id);
};

export default ClientsBySellerResolver