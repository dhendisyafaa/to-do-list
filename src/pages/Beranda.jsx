import React, { useState } from 'react'
import NavbarComponent from '../components/HeaderComponent'

const Beranda = () => {
  const [todo, setTodo] = useState("")
  const [tasks, setTasks] = useState([])

  // bisa submit walaupun terdapat task yang sama
  // belum terdapat perbedaan yang membedakan task sudah selesai atau belum, hanya centang biru (default dari checkbox) saja

  function handleSubmit(e) {
    e.preventDefault()
    if(todo.length === 0) return

    const newTodo = {
      id: tasks.length + 1,
      text: todo,
      completed: false,
    }

    setTasks(tasks => [...tasks, newTodo])
    setTodo("")
  }

  function deleteTodo(id) {
    const updatedTasks = tasks.filter((todo) => todo.id !== id)
    setTasks(updatedTasks)
  }

  function toggleComplete(e, id) {
    if(!e.target.checked) return

    const updatedTasks = tasks.map(item => {
      if(item.id === id) return {...item, completed: !item.completed}
      return item
    })

    setTasks(updatedTasks)
  }

  return (
    <>
      <NavbarComponent />
      <div className='mx-4 my-6'>
        <form onSubmit={handleSubmit} className='grid grid-cols-[auto_20%] gap-2'>
          <input autoFocus onChange={(e) => setTodo(e.target.value)} value={todo} type="text" className='border-2 border-accent rounded-md h-12 w-full pl-2 focus:outline-accent' placeholder="Add task..." />
          <button className='border-2 border-accent rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D61C4E" className="w-6 h-6 m-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </form>
        <div className="border border-accent mt-4 mb-4"></div>
          <p className='font-semibold'>Your Task</p>
          <div className="mt-4">
            {tasks.map((todo, index) =>
              <div key={index} className='flex justify-between items-center border border-accent rounded-md p-3 mb-3 shadow-[3px_3px_0px_0px_#a61C4E]'>
                <div className='flex justify-between w-full'>
                  <p className='font-semibold'>{todo.text}</p>
                  <div className='flex gap-2'>
                    <input type="checkbox" checked={todo.completed} onChange={(e) => toggleComplete(e, todo.id)}/>
                    {/* <input type="checkbox" /> */}
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D61C4E" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>

                  </div>
                </div>
              </div>
            )}
          </div>
      </div>
    </>
  )
}

export default Beranda