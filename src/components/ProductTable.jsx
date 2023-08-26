import { useState } from "react";
import ProductRow from "./ProductRow"


function ProductTable(props) {
    console.log("product to render1", props.productsToRender)

    // const [products, setProducts] = useState(props.products);
    const [productsToRender, setProductsToRender] =useState(props.productsToRender)

    // setProductsToRender(props.productsToRender)
    console.log("productsToRender new", productsToRender)
    if (productsToRender === null) {
        return setProductsToRender(products);
      } 

  return (
    <div>
        <h2>Products Table</h2>

        <ProductRow 
        // products={products}
        productsToRender={props.productsToRender}
        // setProductsToRender={setProductsToRender}
         />



    </div>
  )
}

export default ProductTable