import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import Search from "./Search";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [productsToRender, setProductsToRender] = useState(null);

  if (productsToRender === null) {
    return setProductsToRender(products);
  } 

  return (
    <div>
        <Search 
        products={products} 
        setProductsToRender={setProductsToRender}
        />
      <ProductTable 
    //   products={products} 
    //   setProducts={setProducts} 
      setProductsToRender={setProductsToRender} 
      productsToRender={productsToRender}
      />
    </div>
  );
}

export default ProductsPage;
