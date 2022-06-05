import React, { Component } from 'react';

class SpotCheck1 extends Component {
    //add another method called logHover, 
    //which prints "I was hovered!" when the *mouse enters* the button
    logClick() {
        console.log("I was clicked!")
    }
    logHover() {
        console.log("I was hovered!")
    }
    render() {
        return (
            <div>
                <button id="logger" onClick={this.logClick}>Click me</button>
                <button id="logger2" onMouseEnter={this.logHover}>Hover me</button>
            </div>
        );
    }
}

export default SpotCheck1;
