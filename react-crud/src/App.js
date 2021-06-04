
import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import ProductList from './components/principal.component'
import { Link, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
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
                     <a class="nav-link active">
                        <Link to={"/home"}>
                            Principal
                       </Link>
                     </a>
                      <a class="nav-link active">
                        <Link to={"/principal"}>
                            Servicios
                        </Link>
                     </a>
                </nav>
                </div>
            </header>        
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/principal"]} component={ProductList} />
          </Switch>
        </div>
      </div>
    </div>
    );
  }
}

export default App;







// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
