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

  onButtonClick() { // Button click handler
    console.log('You want to ', this.state.newItemValue);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My To-Do List</h2>
        </div>
        <div>
          <input type="text" placeholder="I need to. . ." onChange={this.onNewValue.bind(this)} />
          <button onClick={this.onButtonClick.bind(this)}>Add</button>
        </div>

        <div className="AList">
          <ul>
          {this.props.tasks.map(function(each){
            return (<li>{each}</li>)
          })}
          </ul>
        </div>

        </div>

    );
  }
}

export default App;
