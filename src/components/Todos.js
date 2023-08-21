import { useSelector } from 'react-redux'
import '../styles/todos.css'
import { removeTodo } from '../containers/todo/todoSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Todos = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(todos)
    }, [todos])

  return (
    <div className='todo-container'>
        {todos.length === 0 ? (
            <div>Add some task</div>
        ) : (
            todos.map((item) => {
                return (
                    <div className='todo' key={item.id}>
                        <div className="text">{item.text}</div>
                        <div 
                            className='status btn' 
                            onClick={() => dispatch(removeTodo(item.id))}
                        >
                            Click to complete
                        </div>
                    </div>
                )
            })
        )}
    </div>
  )
}

export default Todos