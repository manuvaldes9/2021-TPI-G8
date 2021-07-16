//Desde aca se exporta el servicio y las funciones se corresponden a metodos axios permiten hacer http requests con operaciones crud
import http from "../http-common";

class PrincipalDataService {
  findAll() {
    return http.get("/getProductos");
  }
//agregar variable de entrada token
  postRegimen(data){
    return http.post("/regimen?token=" + data)
  }
}

export default new PrincipalDataService();