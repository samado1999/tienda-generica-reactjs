import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Productos from "../productos/Productos";
import Clientes from "../clientes/Clientes";
import Ventas from "../ventas/Ventas";
import Reportes from "../resportes/Reportes";
import Consolidacion from "../consolidacion/Consolidacion";
import "../../App.css";

export default class NavMenu extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/productos">Productos</NavLink>
            </li>
            <li>
              <NavLink to="/clientes">Clientes</NavLink>
            </li>
            <li>
              <NavLink to="/ventas">Ventas</NavLink>
            </li>
            <li>
              <NavLink to="/reportes">Reportes</NavLink>
            </li>
            <li>
              <NavLink to="/consolidacion">Consolidación</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/productos" element={<Productos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/consolidacion" element={<Consolidacion />} />
        </Routes>
      </Router>
    );
  }
}
