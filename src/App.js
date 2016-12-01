import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: props.tasks,
      newItemValue: ''
    }
  }

  onNewValue(e) { // Search input handler
   console.log('new task entered', e.target.value);
   this.setState({
     newItemValue: e.target.value
   });
  }

  onTaskSubmit(e) {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.newItemValue),
      newItemValue: ""
    })
  }

  onTaskClick(index, e) {
    var head = this.state.tasks.slice(0, index)
    var tail = this.state.tasks.slice(index + 1, this.state.tasks.length)
    this.setState({
      tasks: head.concat(tail)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My To-Do List</h2>
        </div>
        <div>
        <form onSubmit={this.onTaskSubmit.bind(this)}>
          <input type="text" placeholder="I need to. . ." value={this.state.newItemValue} onChange={this.onNewValue.bind(this)} />
          <button>Add</button>
        </form>
        </div>

        <div className="AList">
          <ul>
          {this.state.tasks.map((task, index) => {
            return (<li onClick={this.onTaskClick.bind(this, index)} key={index}>{task}</li>)
          })}
          </ul>
        </div>

        </div>

    );
  }
}

export default App;
