import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/header";
import TV from "./components/MainTxv";

function App() {
  const title = "Morenito Streams!";
  const [turnOn, setTurnOn] = useState(false);
  const [tmdbId, setTmdbId] = useState("");
  const [validate, setValidate] = useState(() => {
    // Recuperar el valor de localStorage al iniciar
    const saved = localStorage.getItem("validate");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("validate", validate.toString());
  }, [validate])

  return (
    <div>
      <Header
        title={title}
        setTmdbId={setTmdbId}
        validate={validate}
        setValidate={setValidate}
      />
      <div className="flex justify-center items-center py-8">
        <TV setTurnOn={setTurnOn} turnOn={turnOn} tmdbId={tmdbId} />
        <span className="ml-2">v.1.0.0</span>
      </div>
    </div>
  );
}

export default App;
