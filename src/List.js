import React from 'react'
import Todo from './Todo'

const List = ({todos, name, todoClick}) => (

    <div>
        <h1> { name } </h1>
        <ul>
        { todos.map( item => 
        <Todo 
        key={item.id} 
        {...item}
        todoClick={todoClick} 
        /> ) }
      </ul>
    </div>

)

export default List