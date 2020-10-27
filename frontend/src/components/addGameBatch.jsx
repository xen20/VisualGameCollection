import React, { Component } from "react";

class AddGameBatch extends Component {
  render() {
    return (
      <div>
        <span>
          <form>
            <label for="binput">Batch input</label>
            <input type="button" id="binput" name="binput"></input>
          </form>
        </span>
      </div>
    );
  }
}

export default AddGameBatch;
