import { useState } from "react";

function Search(props) {
  const [queryInput, setQueryInput] = useState("");

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

  return (
    <div>
      <form action="">
        <label htmlFor="query">Search product</label>
        <input
          onChange={handleSearch}
          type="text"
          name="query"
          value={queryInput}
        />
      </form>
    </div>
  );
}

export default Search;
