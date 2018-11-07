import React, { Component } from 'react';
import List from './List'
import Form from './Form'

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn Rails', complete: true },
      {id: 2, name: 'Learn React', complete: false },
      {id: 3, name: 'Learn Redux', complete: false },
      {id: 4, name: 'Profit', complete: false }
    ]
  }

  addItem = (name) => {
    const id = Math.floor(( 1 + Math.random()) * 0x1000)
    const { todos } = this.state
    const todo = { name, id, complete: false }
    this.setState({ todos: [todo, ...todos] })
  }

render() {
return ( 
    <div>
      <Form />
      <List todos={this.state.todos}
      name="Todo list" />
    </div>
    );
  }
}

export default App;
