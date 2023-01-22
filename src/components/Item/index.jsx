import React from "react";

const Item = function ({ name, description, price }) {
  return (
    <div>
      <Link to={`${name}`}>
        <strong>{name}</strong>
      </Link>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Item;
