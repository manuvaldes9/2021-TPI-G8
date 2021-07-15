import React, { Component } from "react";
import '../App.css'
import PrincipalService from "../services/principal.service";
import { Link } from "react-router-dom";

export default class PrincipalPage extends Component {
constructor(props) {
    super(props);
    this.retrieveNotificaciones = this.retrieveNotificaciones.bind(this);
      
    this.state = {
        notificaciones: []
    };
}
componentDidMount(){
    this.retrieveNotificaciones();
}
    
retrieveNotificaciones(){
    PrincipalService.getNotificacion()
    .then(response => {
        this.setState({
            notificaciones: response.data
        });
        console.log(response.data)
    })
    .catch(e => {
        console.log(e);
    });
}
   
    render() {
        const {notificaciones} = this.state;

        return (
            <main>
               <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>¡Fecha límite cerca!</strong>
                                    {notificaciones && notificaciones.map((notificacion) => (
                                        {notificacion}                                        
                                    ))} 
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
