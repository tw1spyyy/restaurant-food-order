import React from "react";
import { ChefsArray } from "../../utils/arrays";
import { Chef } from "../../utils/Types&Interfaces";

export const Chefs = () => {
  return (
    <div className="chefs">
      <div className="container">
        <p className="chefs__subtitle">Наша команда</p>
        <h2 className="chefs__title">Зустрічайте наших найкращих кухарів</h2>
        <div className="chefs__line"></div>
        <div className="chefs__inner">
          {ChefsArray.map((el: Chef) => (
            <ChefItem key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ChefItem = ({ img, name, position }: Chef) => {
  return (
    <div className="chefs__item">
      <img src={img} alt="" className="chefs__item-img" />
      <p className="chefs__item-name">{name}</p>
      <p className="chefs__item-position">{position}</p>
    </div>
  );
};
