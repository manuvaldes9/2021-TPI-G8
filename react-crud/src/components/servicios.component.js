import React, { Component } from "react";
import { Link } from "react-router-dom";
// import notificar from './notificacion.component';

export default class PrincipalPage extends Component {
    render() {
        return (
            <main>
               <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <div id="descripcion">No hay alertas disponibles</div>
                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <main role="main" class="inner cover" id="central" >
                <main>
                    <h1 class="cover-heading">Una empresa que vende ripio.</h1>
                    <p class="lead">Vendemos un par de cosas mas, pero tambien tenemos ripio.</p>
                </main>
            </main>          
            </main>
        
          );
      }
}
