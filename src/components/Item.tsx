import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addToCart } from "../redux/slices/CartSlice";
import { ItemType } from "../utils/Types&Interfaces";

export const Item = ({ imageUrl, title, text, price, id }: ItemType) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart({ imageUrl, id, text, price, title, count: 1 }));
    console.log("bebbe");
  };

  return (
    <div className="item">
      <img className="item__img" src={imageUrl} alt="" />
      <div className="item__content">
        <p className="item__name">{title}</p>
        <p className="item__components">{text}</p>
        <p className="item__price">{price} грн.</p>
        <div onClick={onAddToCart} className="item__btn ">
          Добавити
        </div>
      </div>
    </div>
  );
};
