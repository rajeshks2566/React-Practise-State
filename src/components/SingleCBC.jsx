// Change state value using class based component using OnClick

import React, { Component } from "react";
export default class SingleCBC extends Component {
  // constructor method
  // constructor()
  // {
  //     super();
  //     this.state = {
  //         number:0,
  //     }
  // }

  // direct state method
  state = {
    number: 0,
    };
    
    // to update state value write a function
    ChangeState = () =>
    {
        this.setState({ number:100})
        }

  render() {
    return (
      <div>
            <h1>{this.state.number}</h1>
            <button onClick={this.ChangeState}>Click to change state value</button>
      </div>
    );
  }
}
