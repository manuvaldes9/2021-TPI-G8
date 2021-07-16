//Desde aca se exporta el servicio y las funciones se corresponden a metodos axios permiten hacer http requests con operaciones crud
import http from "../http-common";


class PrincipalService {
  getNotificacion() {
    console.log("holamundo");
}
}
export default new PrincipalService();