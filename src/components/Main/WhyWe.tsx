import React from "react";
import { WhyWeArray } from "../../utils/arrays";
import { WhyWeType } from "../../utils/Types&Interfaces";

export const WhyWe = () => {
  return (
    <div className="WhyWe">
      <div className="container">
        <h2 className="WhyWe__title">Чому ми?</h2>
        <div className="WhyWe__inner">
          {WhyWeArray.map((el: WhyWeType) => {
            return <WhyWeItem key={el.id} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

const WhyWeItem = ({ title, text }: WhyWeType) => {
  return (
    <div className="WhyWe__item">
      <img className="WhyWe__item-img" src="images/tracking.png" alt="" />
      <h4 className="WhyWe__item-title">{title}</h4>
      <p className="WhyWe__item-text">{text}</p>
    </div>
  );
};
