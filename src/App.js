import React from "react";
import "./App.css";
import UseMemo3 from "./ex/UseMemo3";
import UseCallback1 from "./components/UseCallback1";
import API1 from "./components/API1";
import Pixabay1 from "./components/Pixabay1";
import Gallery from "./gallery/Gallery";

const App = () => {
  return (
    <>
      {/*<h1>리액트</h1>
      <UseCallback1 />
      <API1 />
      <Pixabay1 />*/}
      <Gallery />
    </>
  );
};

export default App;
