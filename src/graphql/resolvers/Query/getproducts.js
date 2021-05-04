import  ProductService from "#root/adapters/ProductService";


const ProductResolver = async () =>{
    return await ProductService.fetchProduct();   
};


export default  ProductResolver;