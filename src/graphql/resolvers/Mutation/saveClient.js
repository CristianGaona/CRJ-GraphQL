import ClientService from "#root/adapters/ClientService"

const SaveClientResolver = async(obj, { input }, ctx) => {
    const { dni, nombre, apellido, direccion, correo } = input; //Desestructuración

    //const vendedor_id=ctx.user.uid;
    const vendedor_id = "60763c8091400103d850bfd7";
    const saveClient = await ClientService.saveClient({ dni, nombre, apellido, direccion, correo, vendedor_id }); //Datos de playground 

    return saveClient;
};

export default SaveClientResolver;