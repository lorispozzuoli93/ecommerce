import "./App.css";
import { Route, Switch } from "react-router-dom";
import Plp from "./Main/Plp";
import Pdp from "./Main/Pdp";
import { Products } from "./Data/Data";
import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch(
      "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
    )
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  return (
    <Switch>
      <Route path="/product/:UPC">
        <Pdp products={products} />
      </Route>
      <Route path="/">
        <Plp products={products} />
      </Route>
    </Switch>
  );
};

export default App;
