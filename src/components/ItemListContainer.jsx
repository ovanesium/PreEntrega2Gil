import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import data from "./data.json";
import ItemDetail from "./ItemDetail";
import List from "./List";

const ItemListContainer = ({ greeting }) => {
  return (
    <Routes>
      <Route exact path="/" element={<p>{greeting}</p>} />
      <Route exact path="/comidachina" element={<List list={comidachina} />} />
      <Route path="/comidachina/:name" element={<ItemDetail data={data} />} />
      <Route
        exact
        path="/comidajaponesa"
        element={<List list={comidajaponesa} />}
      />
      <Route
        path="/comidajaponesa/:name"
        element={<ItemDetail data={data} />}
      />
      <Route
        exact
        path="/comidacoreana"
        element={<List list={comidacoreana} />}
      />
      <Route path="/comidacoreana/:name" element={<ItemDetail data={data} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default ItemListContainer;
