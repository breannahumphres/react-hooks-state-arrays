import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisine, setCuisine] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if (cuisine === "All") {
      return true;
    } else {
      return food.cuisine === cuisine;
    }
  });

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);

  }

  function handleLiClick(id){
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel +1,
        };
      } else {return food;}
    });
    setFoods(newFoodArray);
  }
    function filterCuisine(event){
      setCuisine(event.target.value); 
    }
   
    

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={()=> handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter" onChange = {filterCuisine}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select>
      
      <ul>{foodList}</ul>
      
      <button onClick={handleAddFood}>Add New Food</button>
      
    </div>
  );
}

export default SpicyFoodList;
