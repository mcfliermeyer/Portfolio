import React from "react";
import { createGlobalStyle } from "styled-components";
import Theme from "./theme/Theme";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Theme>
      <div className="App">
        <NavBar />
      </div>
    </Theme>
  );
}

export default App;
