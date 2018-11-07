import React, { Component } from 'react';
import List from './List'
import Form from './Form'

class App extends Component {
  state = {
    todos: []
  }

  addItem = (name) => {
    const id = Math.floor(( 1 + Math.random()) * 0x1000)
    const { todos } = this.state
    const todo = { name, id, complete: false }
    this.setState({ todos: [todo, ...todos] })
  }

  handleClick= (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id ) {
          return {
            ...todo, 
            complete: !todo.complete
          }
        }
        return todo
    })
  })
  }

render() {
return ( 
    <div>
      <Form addTodo={this.addItem} />
      <List todos={this.state.todos}
      name="Todo list" 
      todoClick={this.handleClick}
      />
    </div>
    );
  }
}

export default App;
