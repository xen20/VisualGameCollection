import React, { Component } from "react";

class AddGame extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={this.styles}>
          <form>
            <label className="sr-only" htmlFor="textf">
              Name
            </label>
            <input
              type="text"
              id="textf"
              name="textf"
              placeholder="Text"
            ></input>
            <label className="sr-only" htmlFor="numf">
              Name
            </label>
            <input
              type="number"
              id="numf"
              name="numf"
              placeholder="Number"
            ></input>
            <label className="sr-only" htmlFor="datef">
              Name
            </label>
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
