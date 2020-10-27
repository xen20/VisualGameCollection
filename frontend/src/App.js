import React, { Component } from "react";
import AddGame from "./components/addGame";
import AddGameBatch from "./components/addGameBatch";
import NavBar from "./components/navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <span>
          <NavBar></NavBar>
          <AddGame></AddGame>
          <AddGameBatch></AddGameBatch>
        </span>
      </div>
    );
  }

  handleCsvInput = () => {
    return null;
  };

  handleNumericInput = () => {
    return null;
  };

  handleStringInput = () => {
    return null;
  };

  handleDateINput = () => {
    return null;
  };
}

export default App;
