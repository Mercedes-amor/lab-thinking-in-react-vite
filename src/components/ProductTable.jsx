import { useState } from "react";
import ProductRow from "./ProductRow"


function ProductTable(props) {
    console.log("product to render1", props.productsToRender)

    const [productsToRender, setProductsToRender] =useState(props.productsToRender)

    console.log("productsToRender new", productsToRender)

  return (
    <div>
        <h2>Products Table</h2>

        <ProductRow 
        productsToRender={props.productsToRender}
        />



    </div>
  )
}

export default ProductTable