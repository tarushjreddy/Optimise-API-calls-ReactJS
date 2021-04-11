import React from "react";
import axios from "axios";

import "./App.css";
function App() {
  const onType = (e) => {
    const search = e.target.value;
    axios.get(``);
  };
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <input
        placeholder="please enter the text"
        type="text"
        onChange={onType}
      />
    </div>
  );
}

export default App;
