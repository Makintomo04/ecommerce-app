import React from "react";
import "./email_list.scss";
const Email_List = () => {
  return (
    <div className="email-list">
      <span className="email-list__text">
        SIGN UP TO RECEIVE 15% OFF YOUR FIRST ORDER
      </span>
      <input
        className="email-list__input"
        type="text"
        name="email"
        id="email"
        placeholder="Enter email address"
      />
      <input className="email-list__btn" type="submit" value="SIGN UP" />
    </div>
  );
};

export default Email_List;
