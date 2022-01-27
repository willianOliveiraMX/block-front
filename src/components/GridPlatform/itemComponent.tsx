import React, { useState } from "react";
import { Component } from "../../services/docShadow/documentTree";

interface IComponent {
  item: Component;
  addChildren: (p?: string | undefined) => any;
  removeChildren: (p?: string | undefined) => any;
}

// eslint-disable-next-line no-lone-blocks
{
  /* <span>{item.name}</span>
      <button type="button" onClick={() => addChildren(item.id)}>
        +
      </button>
      {item.childrens.map((internalItem) => {
        return <ItemComponent item={internalItem} addChildren={addChildren} />;
      })}
    </Wrapper> */
}

const ItemComponent = ({ item, addChildren, removeChildren }: IComponent) => {
  const Wrapper = React.createElement(
    item.htmlElementName,
    { style: { marginLeft: "50px" } },
    [
      `${item.name}_${item.id}`,
      React.createElement(
        "button",
        { onClick: () => addChildren(item.id), type: "button" },
        "+"
      ),
      React.createElement(
        "button",
        { onClick: () => removeChildren(item.id), type: "button" },
        "-"
      ),
      ...item.childrens.map((internalItem) => {
        return (
          <ItemComponent
            item={internalItem}
            addChildren={addChildren}
            removeChildren={removeChildren}
          />
        );
      }),
    ]
  );
  return Wrapper;
};

export default ItemComponent;
