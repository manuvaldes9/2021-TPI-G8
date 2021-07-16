import React, { Component } from "react";
import PrincipalDataService from "../services/servicios.service";
import { Link } from "react-router-dom";
import dacsEmpresas from "dacs-empresas";

const api_regimen = 'https://60a829368532520017ae5a5f.mockapi.io/regimen';
const registro1 = dacsEmpresas.generarRegistro("1","Ripio",1234567895825,3800,"m^3",3500,2699);
const registro2 = dacsEmpresas.generarRegistro("2","Cemento", 8596963247852, 849,"Bolsa x50 kg", 2365, 2300);
const registro3 = dacsEmpresas.generarRegistro("3","Cal", 6958254573628, 351.80, "Bolsa x20 kg", 3285, 3146);


var lista_reg = dacsEmpresas.cargarRegistro(registro1, lista_reg);
lista_reg = dacsEmpresas.cargarRegistro(registro2, lista_reg);
lista_reg = dacsEmpresas.cargarRegistro(registro3, lista_reg);


//Generación de un regímen
var fecha;
var regimen = dacsEmpresas.generarRegimen(2020, 10, lista_reg, fecha, "15362585915", "Ricardo Ramirez e Hijos S.R.L");
export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.retrieveProductos = this.retrieveProductos.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.postRegimen = this.postRegimen.bind(this);
    this.state = {
      productos: [],
      currentProducto: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveProductos();
  }


  retrieveProductos() {
    PrincipalDataService.findAll()
      .then(response => {
        this.setState({
          productos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveProductos();
    this.setState({
      currentProducto: null,
      currentIndex: -1
    });
  }

  
  postRegimen(){
    dacsEmpresas.postRegimen(api_regimen, regimen);
    alert('notificacion enviada satisfactoriamente')
  }

  render() {
    const {productos, currentIndex } = this.state;
    return (
        <main >
                    <form>    
                          <legend>Declaración Jurada</legend>
                          <div class="mb-3">
                            <label for="disabledTextInput" class="form-label">CUIT: 23-42450167-5</label>
                          </div>
                          <table class="table table-stripped table-bordered table-sm">
                            <tbody>
                              <tr>
                                <td>Nombre Producto</td>
                                <td>EAN</td>
                                <td>Precio Unitario</td>
                                <td>Cantidad Producida</td>
                                <td>Cantidad Vendida</td>
                              </tr>
                              {productos && productos.map((producto) => (
                              <tr>
                                <td>{producto.nombre}</td>
                                <td>{producto.EAN}</td>
                                <td>${producto.precioKG}</td>
                                <td>{producto.cantidadP}</td>
                                <td>{producto.cantidadV}</td>
                              </tr> 
                                ))}

                            </tbody>
                          </table>

                          <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                  JURO QUE ESTOS DATOS SON CORRECTOS
                                </label>
                            </div>
                          </div>
                          <button type="submit" class="btn btn-primary" onClick={this.postRegimen}>Enviar Declaracion</button>                
                      </form>
          </main>
    
      );
  }
}
