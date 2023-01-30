import React from 'react'

const InputComponent = (props) => {
  
  return (
    <div>
      <form action="" className='grid grid-cols-[auto_20%] gap-2'>
        <input onChange={props.theValue} type="text" className='border-2 border-accent rounded-md h-12 w-full pl-2 shadow-[3px_2px_0px_0px_#8e8e8e] focus:outline-accent' placeholder="Add task..." />
        <button onClick={props.onClickToDo} className='border-2 border-accent rounded-lg shadow-[3px_2px_0px_0px_#8e8e8e]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D61C4E" className="w-6 h-6 m-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default InputComponent