import React, { Component } from "react";
import './App.css';
import AuthService from "./services/auth.service";
import { Link, Switch, Route } from "react-router-dom";
import ProductList from './components/servicios.component'
import PrincipalPage from "./components/principal.component";
import Login from "./components/login.component";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showServicios: false,
      showPrincipal: false
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
  }
  if (user) {
    this.setState({
      showServicios: user,
      showPrincipal: user
    });
  }


  render() {
    const { showPrincipal, showServicios } = this.state;
      return (
        
      <div class= "text-center">
        <div class="cover-container d-flex h-100 p-3 mx flex-column">
          <header class="masthead mb">
                  <div class="inner">
                  <h4 class="masthead-brand ">
                    <a href="/principal" className="navbar-brand">
                         Corralon Nak
                    </a>
                    </h4>
                    <nav class="nav nav-masthead justify-content-center">
                    {showPrincipal && (
                       <a class="nav-link active">
                          <Link to={"/principal"}>
                              Principal
                         </Link>
                       </a>
                    )}
                    {showServicios && (
                        <a class="nav-link active">
                          <Link to={"/servicios"}>
                              Servicios
                          </Link>
                       </a>
                    )}
                  </nav>
                  </div>
              </header>        
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/servicios"]} component={ProductList} />
              <Route exact path={["/principal"]} component={PrincipalPage} />
              <Route exact path={["/", "/login" ]}component={Login} />
            </Switch>
          </div>
        </div>
      </div>
      );
  }
}

export default App;