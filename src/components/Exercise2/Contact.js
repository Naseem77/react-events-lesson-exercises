import React, { Component } from 'react';

class Contact extends Component {
  displayConvo = () => {
    this.props.displayConvo(this.props.name)
  }
  render() {
    return (
      <div key={this.props.name}>
        <h3 onClick={this.displayConvo}>{this.props.name}</h3>
      </div>
    );
  }
}

export default Contact;
