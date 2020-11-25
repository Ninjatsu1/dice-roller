import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <p>Dice roller</p>
        <input placeholder="d40" />
        <input placeholder="d60" />
        <input placeholder="d80" />
        <input placeholder="d10" />
        <input placeholder="d12" />
        <input placeholder="d20" />
        <input placeholder="d100" />
      </header>
    </div>
  );
}

export default App;
