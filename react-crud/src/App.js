
import React, { Component } from "react";
import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import ProductList from './components/servicios.component'
import PrincipalPage from "./components/principal.component";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/login.component";
import {LogoutButton} from "./components/logout.component";
import {LoginButton} from "./components/login.component";

function App() {
  const{ isAuthenticated } = useAuth0();
    
    return (
      
<div>

  <header class="navbar navbar-expand-md navbar-dark bd-navbar">
    <nav class="navbar navbar-expand-lg navbar-light "> 
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">               
              <h4 class="">
                <a href="/principal" class="h4">
                      Corralon Nak
                </a>
              </h4>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                    {isAuthenticated ? (
                    <>  
                <li class="nav-item">
                  <a class="nav-link active">
                    <Link to={"/principal"}>
                      Principal
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">
                    <Link to={"/servicios"}>
                        Servicios
                    </Link>
                  </a> 
                </li>
                <li class="nav-item">
                  <LogoutButton/> 
                </li>
                  </>
                  ) : (
                    <li class="nav-item">
                        <Link to={"/"}>
                          <LoginButton />
                        </Link>
                    </li>
                  )}
              </ul>
            </div>
      </div>
    </nav>
  </header> 
  <div className="container mt-3">
    <Switch>
      <Route exact path={["/servicios"]} component={ProductList} />
      <Route exact path={["/principal"]} component={PrincipalPage} />
      
    </Switch>
  </div>
  <footer class="mastfoot mt-auto text-center">
      <div class="inner">
          <p>Pagina para la empresa <a href="https://getbootstrap.com/">Los enripiadores</a>, by <a href="https://cdn.memegenerator.es/imagenes/memes/full/31/39/31392168.jpg">Grupo8</a>.</p>
      </div>
  </footer>  
</div>
    );
}

export default App;