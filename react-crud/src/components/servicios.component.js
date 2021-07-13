import React, { Component } from "react";
import PrincipalDataService from "../services/servicios.service";
import { Link } from "react-router-dom";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.retrieveProductos = this.retrieveProductos.bind(this);
    this.refreshList = this.refreshList.bind(this);

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
                                <td>{producto.precioKG}</td>
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
                          <button type="submit" class="btn btn-primary">Enviar Declaracion</button>                
                      </form>
          </main>
    
      );
  }
}
