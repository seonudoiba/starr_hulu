import React from 'react'

export const Header = () => {
  return (
    <header className="md:flex justify-between p-3 items-center bg-pink-500 text-white">
        <div className="pb-4 md:p-0">
          <h2 className='grid place-items-center text-4xl pl-12 font-mono font-bold'>Starr</h2>
        </div>
        <div className="flex justify-around ">
            <div className='px-6 flex flex-col items-center group'>
                <svg className="w-4 md:w-6 h-4 md:h-6 group-hover:animate-bounce  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span className='group-hover:opacity-0'>Home</span> 
            </div>
            <div className='px-6 flex flex-col items-center group'>
                <svg className="w-4 md:w-6 h-4 md:h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>                
                <span className='group-hover:opacity-0'>Verified</span> 
            </div>
            <div className='px-6 flex flex-col items-center group'>
                <svg className="w-4 md:w-6 h-4 md:h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                <span className='group-hover:opacity-0'>Collection</span> 
            </div>
            <div className='px-6 flex flex-col items-center group'>
                <svg className="w-4 md:w-6 h-4 md:h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <span className='group-hover:opacity-0'>Search</span> 
            </div>
            <div className='px-6 flex flex-col items-center group'>
                <svg className="w-4 md:w-6 h-4 md:h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className='group-hover:opacity-0'>Profile</span> 
            </div>
            
            
        </div>
      </header>
  )
}
