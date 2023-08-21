import { useSelector } from 'react-redux'
import { removeTodo } from '../../containers/todo/todoSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Todos = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(todos)
    }, [todos])

  return (
    <div className='bg-teal-600 p-4 pb-8 rounded-lg'>
        {todos.length === 0 ? (
            <div>Add some task...</div>
        ) : (
            todos.map((item) => {
                return (
                    <div className='flex justify-center items-center mt-4 gap-4' key={item.id}>
                        <div className="w-60">{item.text}</div>
                        <div 
                            className='bg-green-800 py-2 px-3 rounded cursor-pointer hover:bg-green-700' 
                            onClick={() => dispatch(removeTodo(item.id))}
                        >
                            Remove task
                        </div>
                    </div>
                )
            })
        )}
    </div>
  )
}

export default Todos