import React from "react";
import { Link } from "react-router-dom";

const Item = function ({ name, description, price }) {
  return (
    <div className="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="..." />
      <div className="card-body">
        <Link to={`${name}`}>{name}</Link>
        <p className="card-text">{description}</p>
        <a href="#" class="btn btn-primary">
          ${price}
        </a>
      </div>
    </div>
  );
};

export default Item;
