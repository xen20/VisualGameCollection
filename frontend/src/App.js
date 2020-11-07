import React, { Component } from "react";
import AddGame from "./components/addGame";
import "bootstrap/dist/css/bootstrap.min.css";
import AddGameBatch from "./components/addGameBatch";
import Navbar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    console.log("mnt");
  }

  handleCsvInput = () => {
    console.log("CSV input");
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

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <AddGame></AddGame>
        <AddGameBatch onCsvInput={this.handleCsvInput} randomNums={[1, 2, 3]} />
      </React.Fragment>
    );
  }
}

export default App;
