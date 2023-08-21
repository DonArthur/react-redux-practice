import React from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

const index = () => {
  return (
    <div>
        <h2>Todos App</h2>
        <AddTodo />
        <Todos />
    </div>
  )
}

export default index