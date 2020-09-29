import React from "react";
import "./homepage.scss";
import banner from "../../components/category/images/bannerimg.jpg";
import Directory from "../../components/directory/Directory";
import render from "../../components/category/images/render.gif";
const HomePage = () => {
  return (
    <div className="home">
      {/* <div className="render">
        <img src={render} />
      </div> */}

      <img
        height="600px"
        width="1200px"
        className="banner"
        src={banner}
        alt=""
      />

      <Directory />
    </div>
  );
};

export default HomePage;
