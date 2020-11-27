import React, { Component } from "react";
import AddGame from "./components/addGame";
import "bootstrap/dist/css/bootstrap.min.css";
import AddGameBatch from "./components/addGameBatch";
import "./App.css";
import Menu from "./components/menu";

class App extends Component {
  state = {};

  handleCsvInput = () => {
    console.log("CSV input");
  };

  handleNumericInput = () => {
    return null;
  };

  handleStringInput = () => {
    return null;
  };

  handleDateInput = () => {
    return null;
  };

  handleMenuClick = () => {
    console.log("Menu input");
  };

  handleSingleInput = () => {
    console.log("single input");
  };

  render() {
    return (
      <React.Fragment>
        <Menu onDropdownclick={this.handleMenuClick} />
        <AddGame onSingleInput={this.handleSingleInput} />
        <AddGameBatch onCsvInput={this.handleCsvInput} />
      </React.Fragment>
    );
  }
}

export default App;
