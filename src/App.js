import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [squares, setSquares] = useState("", "", "", "", "", "", "", "", "");
  const [player, setPlayer] = useState(true);

  return (
    <div className="App">
      <Square
        player={player}
        setPlayer={setPlayer}
        squares={squares}
        setSquares={setSquares}
      />
      ;
    </div>
  );
}

export default App;
