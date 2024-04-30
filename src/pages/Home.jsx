import React from 'react'

const Home = () => {
  return (
    <div className='flex p-4 mx-auto w-11/12'>
        <div className='flex flex-col w-[50%] gap-10'>
           <div className='text-8xl text-orange-900'>Welcome to your professional community.</div>
           <p className='text-2xl font-bold '>The professional networking platform for connecting with colleagues, finding jobs, and advancing your career.</p>
        </div>
        <div className='w-[50%]'>
            <img src='https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4'/>
        </div>
    </div>
  )
}

export default Home