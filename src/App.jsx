import React, { useState } from "react";
import "./app.css";
import Start from "./LayoutCompornents/Start";
import Main from "./LayoutCompornents/Main";

function App() {
  const [start, setStart] = useState([0]);
  const [name, setName] = useState([0]);

  const startList = {
    0: <Start name={name} setStart={setStart} setName={setName} />,
    1: <Main setStart={setStart} name={name} />,
  };

  return startList[start];
}

export default App;
