import ClientService from "#root/adapters/ClientService"

const UpdateClientResolver = async(obj, { input }, ctx) => {
    const { id, dni, nombre, apellido, direccion, correo } = input; //Desestructuración

    //const vendedor_id=ctx.user.uid;
    const vendedor_id = "453e4567-e89b-42d3-a456-556642440045";
    const updateClient = await ClientService.updateClient({ id, dni, nombre, apellido, direccion, correo, vendedor_id }); //Datos de playground 

    return updateClient;
};
export default UpdateClientResolver;