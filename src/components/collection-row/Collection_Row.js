import React from "react";
import "./collection_row.scss";
const Collection_Row = ({ title, items }) => {
  return (
    <div className="collection_Row">
      <h1 className="collection_row__title">{title.toUpperCase()}</h1>
      <div className="preview_item">
        {items
          .filter(({ id, items }) => id <= 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default Collection_Row;
