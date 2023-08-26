import { useState } from "react";

function ProductRow(props) {
  console.log("row", props.productsToRender);
  return (
    <div className="tableDiv">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        {props.productsToRender.map((eachProduct) => {
          return (
            <tbody key={eachProduct.id}>
              <tr>
                <td className={`${!eachProduct.inStock ? "colorRed" : null}`}>
                  {eachProduct.name}
                </td>
                <td>{eachProduct.price}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ProductRow;
