import React, { Component } from "react";
import PrincipalDataService from "../services/servicios.service";
import 'react-smart-data-table/dist/react-smart-data-table.css'
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


  isChecked = () => {
    this.setState((state)=>({isHidden : !state.isHidden})) /* we're setting the state value isHidden equal to the negation of previous value of isHidden onChange event of checkbox */
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
                                {/* <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                  JURO QUE ESTOS DATOS SON CORRECTOS
                                </label> */}
                                 <input type='checkbox' className='checkbox' id='termschkbx' onChange={this.isChecked} />
                                 {' '}{' '} <label class="form-check-label" >
                                   JURO QUE ESTOS DATOS SON CORRECTOS
                                 </label>
                                  
                            </div>
                          </div>

                        {this.state.isHidden && <button
                            type="submit"
                            id="sub1"
                            className="btn btn-primary createaccount" 
                            type="submit">Enviar Regimen</button> }
                         {/*  <button type="submit" class="btn btn-primary" >  Enviar Declaracion</button>    */}             
                      </form>
          </main>
    
      );
  }
}
