import React, { Component } from 'react';
import Task from './Task'
class SpotCheck5 extends Component {

  constructor() {
    super()
    this.state = {
      tasks: [
        { text: "Take out trash", complete: false },
        { text: "Trash talk Carrie", complete: true },
        { text: "Carry boxes upstairs", complete: false }
      ]
    }
  }

  markComplete = text => {
    let currentTasks = [...this.state.tasks]
    currentTasks.find(t => t.text === text).complete = true
    this.setState({ tasks: currentTasks }) //remember that when your key and value have the same name, you can use this shortcut
  }

  render() {
    return this.state.tasks
      .filter(t => !t.complete)
      .map(t => <Task task={t} markComplete={this.markComplete} />)
  }
}

export default SpotCheck5;
