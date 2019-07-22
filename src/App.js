import React from "react";

import GlobalStyle from "./styles/global";

import ButtonNormal from "./components/ButtonNormal";
import OutlineButton from "./components/OutlineButtons";
import ButtonRadio from "./components/ButtonRadio";
import ClientSearchbar from "./components/ClientSearchbar";

function App() {
  return (
    <>
      <GlobalStyle />

      <div className="container">
        <h1>Normal buttons</h1>
        <div className="components">
          <ButtonNormal />
        </div>
      </div>

      <div className="container">
        <h1>Outline buttons</h1>
        <div className="components">
          <OutlineButton />
        </div>
      </div>

      <div className="container">
        <h1>Button Radio</h1>
        <div className="components">
          <ButtonRadio />
        </div>
      </div>

      <div className="container">
        <h1> Client Seachbar </h1>
        <div className="components">
          <ClientSearchbar />
        </div>
      </div>

    </>
  );
}

export default App;
