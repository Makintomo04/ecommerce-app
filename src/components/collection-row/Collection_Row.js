import React from "react";
import "./collection_row.scss";
import Collection_Item from "./collection_item/Collection_Item";
const Collection_Row = ({ title, items }) => {
  return (
    <div className="collection_row">
      <h1 className="collection_row__title">{title.toUpperCase()}</h1>
      <div className="preview_items">
        {items
          .filter(({ id, items }) => id <= 4)
          .map(({ id, ...itemProps }) => (
            <Collection_Item key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default Collection_Row;
