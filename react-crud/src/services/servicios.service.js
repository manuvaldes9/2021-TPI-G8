//Desde aca se exporta el servicio y las funciones se corresponden a metodos axios permiten hacer http requests con operaciones crud
import http from "../http-common";

class PrincipalDataService {
  findAll() {
    console.log('hola mundo llegue');
    return http.get("/getProductos");
  }

}

export default new PrincipalDataService();