import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import {useForm} from 'react-hook-form'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
const PostModal = ({setPostModalData,get_all_posts}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const [title,setTitle] = useState('');
    console.log("token in modal",localStorage.getItem("token"));
    console.log(title);
    const submit = async() =>{
        const response = await axios.post("http://localhost:4000/api/v1/post/createpost",{
            title
        },{
            headers:{
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            }
        })
        toast.success("Post Created Sucessfully..")
        get_all_posts();
        setPostModalData(null);
        navigate('/feed/')
    }
    return (
      <div className='flex flex-col w-[600px] h-[500px] bg-white p-6 rounded-lg shadow-md shadow-slate-500 gap-4'>
          <div className='flex justify-between' onSubmit={()=>{submit}}>
             <div className='flex justify-center items-center gap-4 rounded-full p-3 cursor-pointer hover:bg-slate-200'>
                   <img className='h-14 w-14 rounded-full' src={user.image} alt=''/>
                   <div>
                    <div className='flex text-2xl'>
                      <p>{user.firstName} {user.lastName}</p>
                      <IoMdArrowDropdown className='w-6 h-6 cursor-pointer'/>
                    </div>
                    <div>
                      Post to Anyone
                    </div>
                   </div>
             </div>
             <button onClick={()=>{setPostModalData(null)}}>
             <RxCross2 className='h-6 w-6' />
             </button>
          </div>
          <div className=' border-b-2'>
               <textarea value={title} onChange={(e)=>{setTitle(e.target.value)}} className='w-[550px] h-[300px] text-2xl outline-none placeholder:text-2xl' placeholder='What do you want to talk about?'/>
          </div>
              <button onClick={submit} className={` self-end text-white  p-1 rounded-xl px-3 text-xl  ${title.length === 0 ? ('bg-slate-200 disabled'):('bg-blue-600')}  `}>
                   Post
              </button>
      </div>
    )
}

export default PostModal