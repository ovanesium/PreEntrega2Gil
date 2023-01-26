import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import React from "react";
import data from "../public/data.json";

function App() {
  const { comidachina, comidajaponesa, comidacoreana } = data;

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting={"Bienvenidos a Fast Food Asia"} />
          }
        />
        <Route path="/comidachina" element={<List list={comidachina} />} />
        <Route path="/comidachina/:name" element={<ItemDetail data={data} />} />
        <Route
          path="/comidajaponesa"
          element={<List list={comidajaponesa} />}
        />
        <Route
          path="/comidajaponesa/:name"
          element={<ItemDetail data={data} />}
        />
        <Route path="/comidacoreana" element={<List list={comidacoreana} />} />
        <Route
          path="/comidacoreana/:name"
          element={<ItemDetail data={data} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
