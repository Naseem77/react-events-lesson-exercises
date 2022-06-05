import React, { Component } from 'react';

class Conversation extends Component {
  changeDisConv = () => {
    this.props.changeDisConv()
  }
  render() {
    return (
      <div >
        <button className='back' onClick={this.changeDisConv}>Back</button>
        {this.props.convo.map((m, i) => <div key={i}><span>{m.sender === "self" ? "Me" : this.props.sender}:  </span> {m.text}</div>)}
      </div>
    );
  }
}

export default Conversation;
