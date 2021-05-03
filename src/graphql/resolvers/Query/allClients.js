import ClientService from "#root/adapters/ClientService";
const clientListResolver = async() => {
    return await ClientService.fetchClient();
};

export default clientListResolver;