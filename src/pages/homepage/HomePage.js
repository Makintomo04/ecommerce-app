import React from "react";
import "./homepage.scss";
import banner from "../../components/category/images/bannerimg.jpg";
import Directory from "../../components/directory/Directory";
import render from "../../components/category/images/render.gif";
import Email_List from "../../components/email_list/Email_List";
import Blog from "../../components/blog/Blog";
import Button from "../../components/button/Button";
const HomePage = () => {
  return (
    <div className="home">
      {/* <div className="render">
        <img src={render} />
      </div> */}
      <div className="banner">
        <div className="banner__text">
          <h1 className="banner__text__heading">The Helmut Depay Archive</h1>
          <p className="banner__text__subtext">
            Collection currated by M1KE at MARQ-E London
          </p>
          <Button theme="hero">Shop Now</Button>
        </div>
        {/* <p className="banner__subtext">The Helmut Depay Archive</p> */}
        <img src={banner} alt="" />
      </div>
      <Directory />
      <div className="message-banner">
        <h2>
          Due to high demand our deliveries are taking longer than normal right
          now
        </h2>
        <p>
          Our delivery time is 6-8 days. Can't wait? Our stores are open and
          welcome you to shop safely everyday.
        </p>
      </div>
      <Blog />
      <Email_List />
    </div>
  );
};

export default HomePage;
