import axios from 'axios'; // Asegúrate de importar axios

const CLIENTE_BASE_REST_API_URL = "http://localhost:8080/api/v1/productos";

class ProductoService {
    getAllProductos() {
        return axios.get(CLIENTE_BASE_REST_API_URL);
    }

    createProducto(producto){
        return axios.post(CLIENTE_BASE_REST_API_URL, producto);
    }

    getProductoById(productoId){
        return axios.get(CLIENTE_BASE_REST_API_URL + '/' +productoId);
    }

    updateProducto(productoId,producto){
        return axios.put(CLIENTE_BASE_REST_API_URL + '/' +productoId, producto);
    }

    deleteProducto(productoId){
        return axios.delete(CLIENTE_BASE_REST_API_URL + '/' +productoId);
    }
}

export default new ProductoService();