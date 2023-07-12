import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange (event) {
    setSearch(event.target.value);
  }

  const selectItems = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  const selectDisplay = selectItems.map((item) => (
    <Item key={item.id} name={item.name} category={selectedCategory} />
  ))

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        search={search} 
      />
      <ul className="Items">
        {selectDisplay}
      </ul>
    </div>
  );
}

export default ShoppingList;