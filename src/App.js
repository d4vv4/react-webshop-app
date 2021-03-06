import "./App.css";
import React from "react";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/navigation/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
