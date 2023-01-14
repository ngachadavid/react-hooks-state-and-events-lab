import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [updatedItems, setItems]=useState(items)

  function handleCategorySelect(event){
    let selected= event.target.value;
    const newItems= items.filter(item=>item.category===selected);setItems(newItems)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"onChange={handleCategorySelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {updatedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
