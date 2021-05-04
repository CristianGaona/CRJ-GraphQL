import got from "got";

const PRODUCT_SERVICE_URI = "http://localhost:8000";


export default class ProductService {
    static async fetchProduct(){
        const body = await got.get(`${PRODUCT_SERVICE_URI}/productos`).json();

        return body;
    }
}