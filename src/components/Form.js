import React from 'react'

export default function Form({addTask}) {
  return (
    <div className='mr-3 mt-2 container flex justify-center items-center'>
      <form>
        <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
          <input type="text" placeholder='Add Task' className='bg-white h-16 w-96 rounded-3xl relative px-8 py-2 text-xl ring-2 ring-gray-400 focus:ring-2 focus:ring-gray-500' />
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle absolute ml-80 pointer-events-none" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
        </div>
      </form>
    </div>
  )
}
