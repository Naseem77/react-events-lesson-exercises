import React, { Component } from 'react';

export const Home = function () {
  return <div>Welcome to our page</div>
}

export const About = function () {
  return <div>It's great here</div>
}

export class SpotCheck2 extends Component {
  constructor() {
    super()
    this.state = {
      toggle: true
    }
  }

  /**
   * NOTE:
   * First, note that we’re using an arrow function for updateData
   * This is required because a React component does not automatically bind methods to itself
   * This means that this will be undefined inside the method, unless we use an arrow function*
   */

  toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <div >
        <button onClick={this.toggle}>Toggle</button>
        {this.state.toggle ? <Home /> : <About />}
      </div>
    );
  }
}


