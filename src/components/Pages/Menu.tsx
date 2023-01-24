import React from "react";
import { NavLink } from "react-router-dom";
import { MenuArray } from "../../utils/arrays";
import { MenuType } from "../../utils/Types&Interfaces";
import "../../scss/main.scss";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <h2 className="title">Menu</h2>
        <div className="menu__inner">
          {MenuArray.map((el: MenuType) => {
            return <MenuItem key={el.id} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ title, img, to }: MenuType) => {
  return (
    <div className="menu__item">
      <img className="menu__item-img" src={img} alt="" />
      <h3 className="menu__item-title">{title}</h3>
      <NavLink to={to} className="menu__item-btn">
        Дивитися більше
      </NavLink>
    </div>
  );
};
