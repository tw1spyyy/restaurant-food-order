import React from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/main.scss";

import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Pages/main";
import { Pizzas } from "./components/Pages/Pizzas";
import { Sushi } from "./components/Pages/Sushi";
import { Cart } from "./components/Pages/Cart";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { PayPage } from "./components/Pages/PayPage";
import { MenuNotFound } from "./components/Pages/MenuNotFound";
import { Menu } from "./components/Pages/Menu";
import { Delivery } from "./components/Pages/Delivery";
import { Contacts } from "./components/Pages/Contacts";
import { About } from "./components/Main/About";

function App() {
  const cart = useSelector((state: RootState) => state.Cart.cart);

  React.useEffect(() => {
    localStorage.setItem("restauran", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper__content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/burgers" element={<MenuNotFound />} />
          <Route path="/meat" element={<MenuNotFound />} />
          <Route path="/payPage" element={<PayPage />} />
          <Route path="/sushi" element={<Sushi />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
