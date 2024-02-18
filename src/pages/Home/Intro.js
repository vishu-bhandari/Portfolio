import React from 'react'

function Intro() {
  return (
    <>
        <div className='h-[80vh] bg-primary flex flex-col items-start  justify-center gap-8 py-10 '>
           <h1 className='text-white text-sm'>Hi , I am</h1>
           <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Vishu Bhandari</h1>
           <h1 className='text-7xl sm:text-3xl text-white font-semibold'>
            I build things for the web.
           </h1>
           <p className='text-white w-2/3 sm:w-[90%] '>
            I am a Fullstack Developer. Currently I am working as a React Freelancer and Working for dynamix India. 
            I am dedicated to crafting seamless and impactful web experiences through innovative design and robust development.
            
           </p>
           <button className='border-2 border-tertiary text-tertiary px-10 py-3 sm:px-5 sm:py-2 rounded-md'>Get Started</button>
        </div>
    </>
  )
}

export default Intro