import dacsEmpresas from "dacs-empresas";
import React, { Component } from "react";
import { Link } from "react-router-dom";
const api_notificacion = 'https://60a829368532520017ae5a5f.mockapi.io/notificaciones';
// import notificar from './notificacion.component';

dacsEmpresas.getNotificacion(api_notificacion,"9a9c8b7e-c249-4cb5-a171-655502d0c89e").then().then(sal => localStorage.setItem("notificacion",JSON.stringify(sal)))
//var notif = JSON.parse(localStorage.getItem("notificacion"));
var descripcion = localStorage.getItem("notificacion");

export default class PrincipalPage extends Component {
    render() {
        return (
            <main>
               <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <div id="descripcion">{descripcion}</div>
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
