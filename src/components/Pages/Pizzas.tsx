import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import "../../scss/menu.scss";
import { ItemType } from "../../utils/Types&Interfaces";
import { Item } from "../Item";

export const Pizzas = () => {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://63c5ce0df3a73b34785dee47.mockapi.io/Pizzas"
      );
      setPizzas(data);
    })();
  }, []);

  return (
    <div className="pizzas">
      <div className="container">
        <div className="pizzas__inner">
          <a
            href="/"
            className="button button--outline button--add go-back-btn pizzas-btn"
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <NavLink to="/">
              <span>Вернуться назад</span>
            </NavLink>
          </a>
          <h2 className="pizzas__title"> Піца</h2>
          <div className="pizzas__menu">
            {pizzas &&
              pizzas.map((el: ItemType) => <Item key={el.id} {...el} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
