import React, { useState } from "react";
import ShopData from "./ShoesData";

const Shoes = () => {
  const [shoesCollection, setShoesCollection] = useState([
    {
      collections: ShopData,
    },
  ]);
  return <div>Shoes</div>;
};

export default Shoes;
