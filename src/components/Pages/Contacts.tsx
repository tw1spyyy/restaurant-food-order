import React from "react";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <h2 className="title">Contacts</h2>
        <form className="decor">
          <div className="form-left-decoration"></div>
          <div className="form-right-decoration"></div>
          <div className="circle"></div>
          <div className="form-inner">
            <h3 className="form-title">Написать нам</h3>
            <input type="text" placeholder="Username"></input>
            <input type="email" placeholder="Email"></input>
            <textarea placeholder="Сообщение..."></textarea>
            <input type="submit" value="Отправить"></input>
          </div>
        </form>
      </div>
    </div>
  );
};
