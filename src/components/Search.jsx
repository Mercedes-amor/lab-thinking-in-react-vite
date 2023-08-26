import { useState } from "react";

function Search(props) {
  const [queryInput, setQueryInput] = useState("");

  // Creamos el estado isChecked para registrar si la casilla de stock está marcada
  const [isChecked, setIsChecked] = useState(false);

  const handleSearch = (event) => {
    console.log("target.value", event.target.value);
    setQueryInput(event.target.value);

    const filteredArr = props.products.filter((each) => {
      if (
        each.name.toLowerCase().includes(event.target.value.toLowerCase()) ===
        true
      ) {
        return true;
      } else {
        return false;
      }
    });

    console.log("filteredArr", filteredArr);
    props.setProductsToRender(filteredArr);
  };

  const handleCheckBox = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);

    console.log(checked); //   true/false

    if (checked) {
      const filteredArrStock = props.products.filter((each) => {
        if (each.inStock) {
          return true;
        } else {
          return false;
        }
      });
      // Actualizamos productsToRender

      props.setProductsToRender(filteredArrStock);
    } else {
      props.setProductsToRender(props.products);
    }
  };

  return (
    <div>
      <form action="">
        <label htmlFor="query">Search product</label>
        <br />
        <input
          onChange={handleSearch}
          type="text"
          name="query"
          value={queryInput}
        />
        <br />
        <label htmlFor="">Only show products in stock</label>
        <input type="checkbox" onChange={handleCheckBox} />
      </form>
    </div>
  );
}

export default Search;
