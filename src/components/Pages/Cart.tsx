import React from "react";

import "../../scss/Pages/cart.scss";

import { useSelector } from "react-redux/es/exports";

import { CartBottom } from "../Cart/CartBottom";
import { CartItem } from "../Cart/CartItem";
import { CartTop } from "../Cart/CartTop";
import { RootState } from "../../redux/store";
import { CartType } from "../../utils/Types&Interfaces";
import { CartEmpty } from "../Cart/CartEmpty";

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.Cart.cart);

  return (
    <div className="content">
      <div className="container container--cart">
        {cart.length > 0 ? (
          <div className="cart">
            <CartTop />
            <div className="content__items">
              {cart.map((el: CartType) => (
                <CartItem key={el.id} {...el} />
              ))}
            </div>
            <CartBottom />
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};
