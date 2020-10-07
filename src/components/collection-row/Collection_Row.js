import React from "react";
import "./collection_row.scss";
import Collection_Item from "./collection_item/Collection_Item";
const Collection_Row = ({ title, items }) => {
  return (
    <div className="collection_row">
      <h1 className="collection_row__title">{title.toUpperCase()}</h1>
      <div className="preview_items">
        {items
          .filter(({ id, item }) => id <= 4)
          .map((item) => (
            <Collection_Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Collection_Row;
