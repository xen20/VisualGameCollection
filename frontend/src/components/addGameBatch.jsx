import React, { Component } from "react";

class AddGameBatch extends Component {
  echoNums() {
    console.log(this.props.randomNums[0]);
  }

  componentDidMount() {
    console.log("batch mnt");
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onCsvInput()}
          type="button"
          className="btn btn-primary"
        >
          Batch input
        </button>
      </div>
    );
  }
}

export default AddGameBatch;
