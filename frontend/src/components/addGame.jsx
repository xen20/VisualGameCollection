import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AddGame extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={this.styles}>
          <Button>Add Single game</Button>
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
