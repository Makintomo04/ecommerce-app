import React from "react";
import "./homepage.scss";
import banner from "../../components/category/images/bannerimg.jpg";
import Directory from "../../components/directory/Directory";
import render from "../../components/category/images/render.gif";
import Email_List from "../../components/email_list/Email_List";
const HomePage = () => {
  return (
    <div className="home">
      {/* <div className="render">
        <img src={render} />
      </div> */}

      <img className="banner" src={banner} alt="" />

      <Directory />
      <Email_List />
    </div>
  );
};

export default HomePage;
