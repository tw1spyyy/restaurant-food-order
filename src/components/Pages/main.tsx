import React from "react";
import { About } from "../Main/About";
import { Chefs } from "../Main/Chefs";
import { Menu } from "../Main/Menu";
import { WhyWe } from "../Main/WhyWe";

export const Main = () => {
  return (
    <div className="main">
      <div className="main__inner">
        <Menu />
        <WhyWe />
        <About />
        <Chefs />
      </div>
    </div>
  );
};
