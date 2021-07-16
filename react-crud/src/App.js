
import React, { Component } from "react";
import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import ProductList from './components/servicios.component'
import PrincipalPage from "./components/principal.component";
import { useAuth0 } from "@auth0/auth0-react";
import {LogoutButton} from "./components/logout.component";
import {LoginButton} from "./components/login.component";
import Footer from "./components/footer.component";

function App() {
  const{ isAuthenticated } = useAuth0();
    return (
      
<div className='text-center'>

  <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
    
       
            <div className="collapse navbar-collapse" id="navbarSupportedContent">               
              <h4 className="">
                <a href="/principal" className="h4 text-left">
                      Corralon Nak
                </a>
              </h4>
              <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex"> 
                    {isAuthenticated ? (
                    <>  
                <li className="nav-item">
                  <a className="nav-link active">
                    <Link to={"/principal"}>
                      Principal
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">
                    <Link to={"/servicios"}>
                        Servicios
                    </Link>
                  </a> 
                </li>
                <li className="nav-item">
                  <LogoutButton/> 
                </li>
                  </>
                  ) : (
                    <li className="nav-item">
                        <Link to={"/"}>
                          {localStorage.clear()}
                          <LoginButton />
                        </Link>
                    </li>
                  )}
              </ul>
            </div>
   
  </header> 
  <div className="container mt-3">
    <Switch>
      <Route exact path={["/servicios"]} component={ProductList} />
      <Route exact path={["/principal"]} component={PrincipalPage} />
    </Switch>
  </div>
 {/*  <footer className="mastfoot mt-auto text-center footerpin">
      <div className="inner">
          <p>Pagina para la empresa <a href="https://getbootstrap.com/">Los enripiadores</a>, by <a href="https://cdn.memegenerator.es/imagenes/memes/full/31/39/31392168.jpg">Grupo8</a>.</p>
      </div>
  </footer>   */}
  <Footer/> 
  <hr></hr>
  <hr></hr>
  <hr></hr>
  <hr></hr>
</div>

    );
}

export default App;