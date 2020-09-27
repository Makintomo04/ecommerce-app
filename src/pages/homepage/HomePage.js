import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/Directory";
import render from "../../components/category/images/render.gif";
const HomePage = () => {
  return (
    <div className="home">
      {/* <div className="render">
        <img src={render} />
      </div> */}
      <Directory />
    </div>
  );
};

export default HomePage;
