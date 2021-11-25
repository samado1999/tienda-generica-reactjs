import React, { Component } from "react";
import ProductsHeader from "./ProductsHeader";
import ProductContent from "./ProductContent";

export default class Productos extends Component {
  render() {
    return (
      <>
        <ProductsHeader />
        <ProductContent />
      </>
    );
  }
}
