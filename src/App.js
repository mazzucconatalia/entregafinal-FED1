import React from 'react';
import './App.css';
import Index from './Componentes/Index/Index';
import Proyectos from './Componentes/InfoProyectos/Proyectos';
import Usuario from './Componentes/Usuario/Usuario';
import Nav from './Componentes/Nav/Nav';
import Admin from './Componentes/Usuario/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
  Link
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Usuario">
          <Usuario />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
        <Route path="/proyectos/:link">
          <Proyectos />
        </Route>
        <Route path="/">
          <Index />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
