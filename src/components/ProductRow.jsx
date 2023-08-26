import { useState } from "react";

function ProductRow(props) {

console.log("row", props.productsToRender)
  return (
    <div>
      {props.productsToRender.map((eachProduct) => {
        
        return (
          <table key={eachProduct.id}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                {eachProduct.name}
                </td>
                <td>
                {eachProduct.price}
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default ProductRow;
