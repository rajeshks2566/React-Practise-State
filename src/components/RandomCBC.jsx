// random number using CBC-Onclick

import React, { Component } from 'react'

export default class RandomCBC extends Component {
    state = {
        count:0,
    }

    // random function
    getRandom = () => {
        this.setState({count:Math.round(Math.random()*100)})
    }
  render() {
    return (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.getRandom}>Click to get Random Number</button>
      </div>
    )
  }
}
