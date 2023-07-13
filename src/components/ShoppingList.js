import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function onItemFormSubmit (itemData) {
    setItems((items) => [...items, itemData])
  }

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
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        search={search} 
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {selectDisplay}
      </ul>
    </div>
  );
}

export default ShoppingList;