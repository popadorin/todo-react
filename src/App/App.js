import React, { Component } from 'react';
import Todo from '../components/Todo/Todo';
import './App.css';

const initTodoItems = [
  { index: 1, value: 'learn react', done: false },
  { index: 2, value: 'Go shopping', done: true },
  { index: 3, value: 'buy flowers', done: true }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo initItems={ initTodoItems } />
      </div>
    );
  }
}

export default App;
