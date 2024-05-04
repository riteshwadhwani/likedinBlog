import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const PostCard = ({data,get_all_posts}) => {
  const [liked,setLiked] = useState(false);
  const user = JSON.parse(localStorage.getItem("token"));
 
  const postItems = [
    {
      icon:<SlLike className='h-8 w-8'/>,
      name:"Like"
    },
    {
      icon:<FaRegCommentDots className='h-8 w-8'/>,
      name:"Comment"
    },
    {
      icon:<BiRepost className='h-8 w-8'/>,
      name:"Repost"
    },
    {
      icon:<IoIosSend className='h-8 w-8'/>,
      name:"Repost"
    },
  ]
  const post = data._id;
  const likefunc = async() =>{
      const response = await axios.post("http://localhost:4000/api/v1/post/createlike",{
       post
      },{
        headers:{
          Authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      setLiked(true);
      get_all_posts();
  }
  const unlikefun = async() =>{

  }
  return (
    <div className=' border h-[300px] rounded-xl bg-white p-4'>
       <div className='flex justify-between'>
           <div className='flex justify-center items-center gap-2'>
              <img className='h-14 w-14 rounded-full' src={data.user.image} alt=''/>
              <div className=' py-1'>
                <p className=' font-semibold text-xl hover:text-blue-600 cursor-pointer hover:underline'>{data.user.firstName} {data.user.lastName}</p>
              </div>
           </div>
           <div className='flex gap-2'>
              <button>
              <HiDotsHorizontal className='h-7 w-7'/>
              </button>
              <button>
              <RxCross2 className='h-7 w-7'/>
              </button>
           </div>
       </div>
             {/* title */}
        <div className='p-2  flex h-fit min-h-28 items-center'>
            <p className='text-xl'>
              {data.title}
            </p>
        </div>
        {/* likes */}
        <div className='p-2 border-b flex'>
           <div className='flex justify-center items-center gap-2'>
               <button  className='rounded-full bg-blue-600 text-white p-1'>
                  <SlLike className=' '/>
               </button>

               <p>{data.likes.length}</p>
           </div>
        </div>
         {/* like comment repost send */}
        <div className='flex justify-between px-7 py-4'>
        {
          postItems.map((item,index)=>{
            return index==0 ? (liked ? (<button onClick={unlikefun} key={index} className='p-2 w-[25%] rounded-2xl text-blue-500 hover:bg-slate-100 flex justify-center items-center gap-2'>
            <div className='text-blue-500'>
               {item.icon}
               </div>
               <p>
                {item.name}
               </p>
            </button>) : (<button onClick={likefunc} key={index} className='p-2 w-[25%] rounded-2xl hover:bg-slate-100 flex justify-center items-center gap-2'>
            <div >
               {item.icon}
               </div>
               <p>
                {item.name}
               </p>
            </button>)) :(<button key={index} className='p-2 w-[25%] rounded-2xl hover:bg-slate-100 flex justify-center items-center gap-2'>
               <div >
               {item.icon}
               </div>
               <p>
                {item.name}
               </p>
            </button>)
          })
        }
        </div>
    </div>
  )
  
}

export default PostCard