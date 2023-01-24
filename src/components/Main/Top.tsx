import React from "react";
import { NavLink } from "react-router-dom";

export const Top = () => {
  return (
    <div className="top">
      <div className="container">
        <div className="top__inner">
          <div className="top__logo">
            <img className="top__logo-img" src="images/logo.svg" alt="" />
            <h2 className="top__logo-title">Food Network</h2>
          </div>
          <h4 className="top__name">Food Network - Online Ordering</h4>
          <h1 className="top__title">Your Yummy Food Delivered Fast & Fresh</h1>
          <NavLink className="top__btn" to="/menu">
            Order Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};
