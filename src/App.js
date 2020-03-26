import React from "react";
// import logo from "./assets/logo.svg";
import "./styles/App.scss";
import data from "./data.json";
import SimpleList from "./components/simple-list";

function App() {
  return (
    <div className="App">
      <h2>People List</h2>

      <SimpleList list={data} />
    </div>
  );
}

export default App;
