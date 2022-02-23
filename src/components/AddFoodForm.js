import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = useState('default name');
  const [image, setImage] = useState("https://i.imgur.com/DupGBz5.jpg");
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
     e.preventDefault();
    const newFood = { name, image, calories, servings };

    // console.log('Submitted: ', newFood);
    // console.log(props)
    
    props.addFood(newFood); // <== ADD

    // Reset the state
    setName('Pineapple');
    setImage('https://i.imgur.com/DupGBz5.jpg');
    setCalories(1);
    setServings(1);

  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
