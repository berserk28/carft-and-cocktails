import React from "react";
import { useGlobalContext } from "../../context";
function Search_bar() {
  const { searchTerm, searchValue, setSearchTerm, setSearchValue, cocktails } =
    useGlobalContext();
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="showcase__container-header-input">
      <input
        type="text"
        onChange={handleChange}
        value={searchValue}
        placeholder="Your Cocktail name"
      />
      {cocktails && (
        <button
          type="button"
          onClick={() => {
            setSearchTerm(false);
          }}
        >
          Get started
        </button>
      )}
    </div>
  );
}

export default Search_bar;
