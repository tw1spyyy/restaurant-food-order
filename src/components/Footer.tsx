import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__copy">Copyright © 2023 The Pizzeria</p>
          <ul className="footer__social">
            <li className="footer__social-item">
              <NavLink to="/" className="footer__social-link">
                <img src="images/twitter.svg" alt="" />
              </NavLink>
            </li>
            <li className="footer__social-item">
              <NavLink to="/" className="footer__social-link">
                <img src="images/facebook.svg" alt="" />
              </NavLink>
            </li>
            <li className="footer__social-item">
              <NavLink to="/" className="footer__social-link">
                <img src="images/inst.svg" alt="" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
