import React from "react";

type Chef = {
  id: number;
  img: string;
  name: string;
  position: string;
};

const ChefsArray: Chef[] = [
  {
    id: 0,
    img: "images/chefs-1.png",
    name: "Alizeh Anderson",
    position: "Senior Chef ",
  },
  {
    id: 1,
    img: "images/chefs-2.png",
    name: "Andre Smith",
    position: "Master Chef",
  },
  {
    id: 2,
    img: "images/chefs-3.png",
    name: "Angelina John",
    position: "Professor",
  },
  {
    id: 3,
    img: "images/chefs-4.png",
    name: "Christina Chi",
    position: "Psychologist",
  },
];

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
