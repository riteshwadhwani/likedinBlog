import React from 'react'

const LogoutModal = ({modalData}) => {
  return (
    <div className=' flex flex-col gap-5 justify-center items-center'>
        <div>
           {modalData.text1}
        </div>
        <div className='flex  gap-4'>
           <button onClick={()=>{modalData.clearfun()}} className='p-2 font-bold bg-green-400 rounded-xl'>
           {modalData.btntxt1}
           </button>
           <button onClick={()=>{modalData.logountfun()}} className='p-2 font-bold bg-red-400 rounded-xl'>
           {modalData.btntxt2}
           </button>
        </div>
    </div>
  )
}

export default LogoutModal