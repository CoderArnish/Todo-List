import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-white'>
      <nav id='nav' className='h-[60px] bg-opacity-75 flex justify-between items-center w-[92%] mx-auto'>
        <div id='logo' className='font-bold text-[#9333EA] font-roboto text-2xl'>
          TaskMate
        </div>
        <div id='list'>
          <ul className='flex items-center gap-[5vw]'>
            <li><a className='hover:text-gray-500 text-xl' href="#">Todo</a></li>
            <li><a className='hover:text-gray-500 text-xl' href="#">Project</a></li>
            <li><a className='hover:text-gray-500 text-xl' href="#">Team</a></li>
          </ul>
        </div>
        <div className='sign-up-logo hover flex space-x-3 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </div>
      </nav>
    </div>
  )
}
