import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import Card from "./components/ComponentWithClass";
import Card2 from "./components/ComponentWithFunction";
import NavBar from "./components/NavigationBar";
import Products from "./components/product";
import { CartProvider } from "./contexts/cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar />
          <Route path="/" exact>
            <Card imageUrl="https://picsum.photos/200/300">
              <p>Card body</p>
            </Card>
            <Card2 imageUrl="https://picsum.photos/200/300">
              <p>Card body</p>
            </Card2>
          </Route>
          <Route path="/products/" component={Products} />
        </Router>
      </CartProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
