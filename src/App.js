// src/App.js
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foodsJSON from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [foodsData, setFoodsData] = useState(foodsJSON);

  const addNewFood = (newFood) => {
    const updatedFood = [...foods, newFood];
    const updatedFoodData = [...foods, newFood];

    setFoods(updatedFood);
    setFoodsData(updatedFoodData);
  };

  const filterCardList = (str) => {
    let filteredCardList;

    if (str.length > 0) {
      filteredCardList = foodsData.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase());
      });
    } else {
      filteredCardList = foodsData;
    }

    setFoods(filteredCardList);
  };

  function deleteFromFoodList(param) {
    let copyFoodValues = [...foods];

    const filteredItems = copyFoodValues.filter(function (item) {
      return item.name !== param.name;
    });

    setFoods(filteredItems);
  }

  return (
    <div className="App">
      <Search searchProp={filterCardList} />
      <AddFoodForm addFood={addNewFood} />
      <div className="foodList">
        <h1>--- Food List ---</h1>
        {foods.map((food) => {
          return (
            <div>
              <FoodBox
                food={food}
                key={food.image}
                deletedItem={deleteFromFoodList}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
