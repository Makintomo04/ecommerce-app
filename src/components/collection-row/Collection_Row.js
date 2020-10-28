import React from "react";
import "./collection_row.scss";
import Collection_Item from "./collection_item/Collection_Item";
const Collection_Row = ({ title, items, isPreview, noTitle }) => {
  return (
    <div className="collection_row">
      {noTitle ? null : (
        <h1 className="collection_row__title">{title.toUpperCase()}</h1>
      )}
      <div className="collection_items">
        {isPreview
          ? items
              .filter(({ preview }) => preview === true)
              .map((item) => <Collection_Item key={item.id} item={item} />)
          : items.map((item) => <Collection_Item key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Collection_Row;
