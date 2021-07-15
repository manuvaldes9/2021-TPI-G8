import React, { Component } from "react";
import PrincipalDataService from "../services/principal.service";
import { Link } from "react-router-dom";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }


  retrieveTutorials() {
    PrincipalDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }


  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

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
                                <tr>
                                    <td>Maderas Algarrobo</td>
                                    <td>589316565512</td>
                                    <td>1200</td>
                                    <td>150</td>
                                    <td>80</td>
                                </tr>
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
