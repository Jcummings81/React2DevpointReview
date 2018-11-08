import React, { Component } from 'react';
import List from './List'
import Form from './Form'
import Footer from './Footer'

class App extends Component {
  state = {
    todos: [],
    view: 'All'
  }

  setFilter = (view) => {
    this.setState({ view })
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
  const {todos, view } = this.state
return ( 
    <div>
      <Form addTodo={this.addItem} />
      <List 
      todos={todos}
      name="Todo list" 
      todoClick={this.handleClick}
      />
      <Footer view={view} setFilter={this.setFilter} />
    </div>
    );
  }
}

export default App;
