import { useState } from "react";
import { v4 as getId } from "uuid";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingItemForm from "./components/ShoppingItemForm";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, qty: number) => {
    console.log("App component " + product);
    setItems([...items, { id: getId(), product: product, quantity: qty }]);
  };
  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Milk", quantity: 1 },
  // ];
  return (
    <div>
      <Greeter person="Friend" />
      <ShoppingList items={items} />
      <ShoppingItemForm onAddItem={addItem} />
    </div>
  );
}

export default App;
