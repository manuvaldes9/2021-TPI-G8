//Desde aca se exporta el servicio y las funciones se corresponden a metodos axios permiten hacer http requests con operaciones crud
import http from "../http-common";

class PrincipalDataService {
  getAll() {
    return http.get("/principal");
  }

  get(id) {
    return http.get(`/principal/${id}`);
  }

  create(data) {
    return http.post("/principal", data);
  }

  update(id, data) {
    return http.put(`/principal/${id}`, data);
  }
}

export default new PrincipalDataService();