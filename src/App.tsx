import React, { useState } from "react";

import "./App.css";
import Header from "./components/header";
import TV from "./components/MainTxv";

function App() {
  const title = "Morenito Streams!";
  const [turnOn, setTurnOn] = useState(false);

  return (
    <div>
      <Header title={title} />
      <TV setTurnOn={setTurnOn} turnOn={turnOn} />
    </div>
  );
}

export default App;
