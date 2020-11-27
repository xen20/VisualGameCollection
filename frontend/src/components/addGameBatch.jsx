import React, { Component } from "react";

class AddGameBatch extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onCsvInput()}
          type="button"
          className="btn btn-primary"
        >
          Add multiple games
        </button>
      </div>
    );
  }
}

export default AddGameBatch;
