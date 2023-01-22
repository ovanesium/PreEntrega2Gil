import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <main>
            <NavBar />
            <ItemListContainer greeting={"Bienvenidos a Fast Food Asia"} />
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
