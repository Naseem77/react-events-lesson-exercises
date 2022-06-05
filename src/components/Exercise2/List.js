import React, { Component } from 'react';
import Contact from './Contact';
class List extends Component {
  render() {
    let contact = this.props.contacts
    return (
      <div >
        {contact.map((c, i) => <Contact key={i} name={c} displayConvo={this.props.displayConvo} />)}
      </div>
    );
  }
}

export default List;
