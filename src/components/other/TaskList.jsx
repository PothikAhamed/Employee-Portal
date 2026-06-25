import React from 'react'
import TaskUnder from '../Tasklist/TaskUnder'

const TaskList = () => {
  return (
    <>
    <div className="
      grid 
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-5
      mt-20
      px-5
      md:px-10
      lg:px-20
      mx-auto
      max-w-7xl
    ">


      <div className="
        px-8 
        py-5 
        bg-[#1e272e] 
        shadow
        shadow-black 
        rounded-[5px]
        text-white
      ">
        <span className='text-2xl font-semibold'>0</span>
        <h2 className='text-xl font-medium mt-2'>New Task</h2>
      </div>



      <div className="
        px-8 
        py-5 
        bg-[#1e272e] 
        shadow
        shadow-black 
        rounded-[5px]
        text-white
      ">
        <span className='text-2xl font-semibold'>0</span>
        <h2 className='text-xl font-medium mt-2'>Completed</h2>
      </div>



      <div className="
        px-8 
        py-5 
        bg-[#1e272e] 
        shadow
        shadow-black 
        rounded-[5px]
        text-white
      ">
        <span className='text-2xl font-semibold'>0</span>
        <h2 className='text-xl font-medium mt-2'>Pending</h2>
      </div>



      <div className="
        px-8 
        py-5 
        bg-[#1e272e] 
        shadow 
        shadow-black 
        rounded-[5px]
        text-white
      ">
        <span className='text-2xl font-semibold'>0</span>
        <h2 className='text-xl font-medium mt-2'>Failed</h2>
      </div>


    </div>
    <div>
      <TaskUnder/>
    </div>
    </>
  )
}

export default TaskList