import React from "react";
import { CartType } from "./Types&Interfaces";

export const getCartFromLS = () => {
  const data = localStorage.getItem("restauran");
  let cart = data ? JSON.parse(data) : [];
  const totalPrice = cart.reduce((total: number, el: CartType) => {
    return (total += el.price * el.count);
  }, 0);
  const totalCount = cart.reduce((total: number, el: CartType) => {
    return (total += el.count);
  }, 0);
  return { cart, totalCount, totalPrice };
};
