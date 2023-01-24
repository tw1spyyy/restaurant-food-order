import React from "react";
import { About } from "../Main/About";
import { Chefs } from "../Main/Chefs";
import { Top } from "../Main/Top";
import { WhyWe } from "../Main/WhyWe";

export const Main = () => {
  return (
    <div className="main">
      <div className="main__inner">
        <Top />
        <About />
        <WhyWe />
        <Chefs />
      </div>
    </div>
  );
};
