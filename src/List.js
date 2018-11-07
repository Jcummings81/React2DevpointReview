import React from 'react'

const List = ({todos, name}) => (

    <div>
        <h1> { name } </h1>
        <ul>
        { todos.map( todo => 
          <li key={todo.id}> {todo.id} - {todo.name} </li> 
        )}  
      </ul>
    </div>

)

export default List