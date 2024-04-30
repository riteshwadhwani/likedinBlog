import React from 'react'
import { PiImageFill ,PiNotebook } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import PostCard from '../components/Home/PostCard';
import {useForm} from 'react-hook-form'
const Home = () => {
    const {register,handleSubmit,formState:{errors,isSubmitSuccessful},reset} = useForm();
  return (
    <div>
          <div className='w-10/12 mx-auto flex gap-6  '>
               <div className='w-[18%] border h-[350px] bg-white rounded-md'>
                    <img className='mx-auto w-24 h-24 rounded-full mt-4 border border-white' src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
         
               </div>
               <div className='w-[50%] h-[120px]  border bg-white rounded-md'>
                    <div className=' px-5 py-3 flex flex-col gap-2'>
                       <div className='flex gap-4'>
                           <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='h-14 w-14 rounded-full' alt=''/>
                           <input className='p-3 border border-slate-600 w-[85%] rounded-3xl bg-white placeholder:text-black' placeholder='Start A Post' />
                       </div>
                       <div className='flex justify-center items-center gap-44'>
                          <buton className='flex gap-2 items-center cursor-pointer'>
                             <PiImageFill className='w-6 h-6 text-blue-600'/>
                             <p>Media</p>
                          </buton> 
                          <button className='flex gap-2 items-center cursor-pointer'>
                             <SlCalender className='w-5 h-5 text-amber-600'/>
                             <p>Media</p>
                          </button>
                          <button className='flex gap-2 items-center cursor-pointer'>
                             <PiNotebook className='w-6 h-6 text-amber-800'/>
                             <p>Media</p>
                          </button>
                       </div>
     
                    </div>
                    <div className='mt-5'>
                       <PostCard/>
                    </div>
         
               </div>
               <div className='w-[28%] h-[300px]  border bg-white rounded-md'>
         
               </div>
         
         </div>
        
    </div>
  )
}

export default Home