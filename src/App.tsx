import React, { FC, useState } from "react";
import AddPizzaForm from "./components/AddPizzaform";
import DisplayPizzas from "./components/DisplayPizzas";
import Pizza from "./models/Pizza";
import "./App.css";

const App: FC = () => {
  const [pizzaList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzaList, newPizza]);
  };
  const uppdateaddPizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzaList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };
  const deletePizza = (id: number) => {
    const newPizzaList = pizzaList.filter((pizza) => pizza.id !== id);
    setPizzasList(newPizzaList);
  };
  console.log("pizzaList >>>>>", pizzaList);
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading"> Моя пица</span>
        <AddPizzaForm addPizaa={addPizza} />

        <DisplayPizzas
          pizzasList={pizzaList}
          deletePizza={deletePizza}
          updatePizza={uppdateaddPizza}
        />
      </div>
    </div>
  );
};

export default App;
