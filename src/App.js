import React from "react";

import GlobalStyle from "./styles/global";
import { ToastContainer } from 'react-toastify';

import ButtonNormal from "./components/ButtonNormal";
import OutlineButton from "./components/OutlineButtons";
import ButtonRadio from "./components/ButtonRadio";
import ClientSearchbar from "./components/ClientSearchbar";
import ToastButton from './components/Toast';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />

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

      <div className="container">
        <h1> Toast </h1>
        <div className="components">
          <ToastButton />
        </div>
      </div>

    </>
  );
}

export default App;
