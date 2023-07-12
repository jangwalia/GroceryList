import { useState } from "react";
import Header from "./components/Header";
import AddGrocery from "./components/AddGrocery";
import GroceryList from "./components/GroceryList";

const groceryList = [

  { id: 1, title: "Bananas" },
  { id: 2, title: "Apples" },
  { id: 3, title: "Oranges" },
  { id: 4, title: "Pears" },
  { id: 5, title: "Grapes" },
];


function App() {
  const [groceries, setGroceries] = useState(groceryList);
  const [grocery, setGrocery] = useState({id: null, title: ''});

  const handleSumbit = (grocery) => {


    setGroceries([...groceries, grocery]);
  }
  return (
    <div>
      <Header />
      <AddGrocery grocery={grocery} setGrocery={setGrocery} handleSubmit = {handleSumbit} />
      <GroceryList groceryList={groceries} />
    </div>
  );
}

export default App;
