import React, { Component } from "react";
import './cargaProductos.css';

export default class ProductContent extends Component {
  sayHello = () => {
    alert("Hello");
  };
  render() {
    return (
      <div className="caja-primera" id="caja-primera">
        <p>
          <b>CARGA DE PRODUCTOS</b>
        </p>
        <div className="botones" id="botones">
          <button className="boton-subir-archivo" id="boton-subir-archivo">
            <input type="file" name="fileupload" id="fileupload" />
          </button>
          <button className="boton-publicar" id="boton-publicar">
            <input
              type="submit"
              value="Upload csv"
              name="submit"
              onClick={this.sayHello}
            />
          </button>
        </div>
        <script src="./srcipts.js"></script>
      </div>
    );
  }
}
