import React, { Component } from "react";

class AddGame extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold",
    font: "calibri",
  };

  render() {
    return (
      <div>
        <span style={this.styles}>
          <form>
            <label for="textf">Text:</label>
            <input type="text" id="textf" name="textf"></input>
            <label for="numf">Numerics:</label>
            <input type="number" id="numf" name="numf"></input>
            <label for="datef">Date:</label>
            <input type="date" id="datef" name="datef"></input>
          </form>
        </span>
      </div>
    );
  }

  assignFieldType() {
    // TODO: in future, this should be a switch statement that uses enums - if only JS supported enums :) maybe with move to TS.
    const type = this.props.fieldType;

    if (type === "text") return "text";
    if (type === "number") return "number";
    if (type === "date") return "date";

    // TODO: in future, return array/tuple that will return all parts of label and input that may be dynamic.
  }
}

export default AddGame;
