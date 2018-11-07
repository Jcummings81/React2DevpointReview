import React from 'react'
import Todo from './Todo'

const List = ({todos, name}) => (

    <div>
        <h1> { name } </h1>
        <ul>
        { todos.map( item => <Todo key={item.id} {...item} /> ) }
      </ul>
    </div>

)

export default List