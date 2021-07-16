import dacsEmpresas from "dacs-empresas";
import React, { Component } from "react";
import PrincipalDataService from "../services/servicios.service";
import 'react-smart-data-table/dist/react-smart-data-table.css'
import { Link } from "react-router-dom";

const api_login = 'https://cli-serv-grupo1.herokuapp.com/api/auth/login'


dacsEmpresas.loginMinisterio(api_login, "grupo8@frre.utn.edu.ar","dacs-frre").then().then(tkn => localStorage.setItem("token", tkn));
var token = localStorage.getItem("token")


export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.retrieveProductos = this.retrieveProductos.bind(this);
    this.postRegistro = this.postRegistro.bind(this);
    this.isChecked=this.isChecked.bind(this);
    this.state={isHidden : false } // button will not be hidden initally. 
    this.state = {
      productos: [],
      currentIndex: -1
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

  postRegistro(tkn) {
   PrincipalDataService.postRegimen(tkn);
   console.log(tkn);
  }

   isChecked = () => {
    this.setState((state)=>({isHidden : !state.isHidden})) 
   } 

  render() {
    const {productos, currentIndex } = this.state;
    const emptyTable = <div>There is no data available at the time.</div>
    
    const headers = {
      columnKey: {
        text: 'Column 1',
        invisible: false,
        sortable: true,
        filterable: true,
      },
      'nested.columnKey': {
        text: 'Nested Column',
        invisible: false,
        sortable: true,
        filterable: true,
      },
      // If a dummy column is inserted into the data, it can be used to customize
      // the table by allowing actions per row to be implemented, for example
      tableActions: {
        text: 'Actions',
        invisible: false,
        sortable: false,
        filterable: false
      },
    }
    return (
        <main >
                    <form>    
                          <legend>Declaración Jurada</legend>
                          <div class="mb-3">
                            <label for="disabledTextInput" class="form-label">CUIT: 23-42450167-5</label>
                          </div>
                          <table data-table-name='test-fake-table' /* class="table table-stripped table-bordered table-sm" */ class="ui compact selectable table">
                            <thead>
                              <tr>
                                <th>
                                  <span>Nombre Producto</span>
                                  <span class="rsdt "></span>
                                </th>
                                <th>EAN</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad Producida</th>
                                <th>Cantidad Vendida</th>
                              </tr>
                            </thead>
                            <tbody>
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
                                 <input type='checkbox' className='checkbox' id='termschkbx'  onChange={this.isChecked} />
                                 {' '}{' '} <label class="form-check-label" >
                                   JURO QUE ESTOS DATOS SON CORRECTOS
                                 </label>
                                  
                            </div>
                          </div>

                        {this.state.isHidden && <button
                            type="submit"
                            id="sub1"
                            className="btn btn-primary" 
                            type="submit" onClick={this.postRegistro(token)}>Enviar Regimen</button>}
                                    
                      </form>
          </main>
    
      );
  }
}
