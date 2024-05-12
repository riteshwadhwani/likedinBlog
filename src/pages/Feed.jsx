import React, { useEffect, useState } from 'react'
import { PiImageFill ,PiNotebook } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import PostCard from '../components/Home/PostCard';
import axios from 'axios';
import PostModal from '../components/PostModal';
import { set } from 'firebase/database';
const Feed = () => {
   const stories = [
      {
         title:"Behind Godrej Group historic split",
         ago:"19h ago",
         readers:"12122 readers"
      },
      {
         title:"Credit to large ink bank on track",
         ago:"20h ago",
         readers:"1500 readers"
      },
      {
         title:"Thriving at a tech top company",
         ago:"15h ago",
         readers:"2308 readers"
      },
      {
         title:"More law firm go local",
         ago:"19h age",
         readers:"524 readers"
      },
      {
         title:"Digital push cost bank",
         ago:"12h ago",
         readers:"312 readers"
      },
   ]
    const [postModalData,setPostModalData] = useState(null);
    const user = JSON.parse(localStorage.getItem("user"));
    const [posts,setPosts] = useState([]);
    const get_all_posts = async() =>{
      const response = await axios.get("http://localhost:4000/api/v1/post/getposts",{
        headers:{
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        }
      })
      setPosts(response.data.posts);
      console.log("response",response.data.posts);
    };
    useEffect(()=>{
       get_all_posts();
    },[])
  return (
    <div>
          <div className='w-10/12 mx-auto flex gap-6 scroll-smooth '>
               <div className='w-[18%] border h-[350px] bg-white rounded-md'>
                    <img className='mx-auto w-24 h-24 rounded-full mt-4 border border-white' src={user.image} alt='' />
         
               </div>
               <div className='w-[50%] flex flex-col gap-5  '>
                    <div className=' px-5 h-[130px] rounded-md bg-white py-3 flex flex-col gap-2'>
                       <div className='flex gap-4'>
                           <img src={user.image} className='h-14 w-14 rounded-full' alt=''/>
                           <button onClick={()=>{
                              setPostModalData({
                                 crossfunc:()=>{setPostModalData(null)},
                              })
                           }}  className='p-3 hover:bg-slate-100 border border-slate-600 w-[85%] rounded-3xl bg-white text-black'>Start a post
                           </button>
                       </div>
                       <div className='flex justify-center items-center gap-44'>
                          <button className='flex gap-2 items-center cursor-pointer'>
                             <PiImageFill className='w-6 h-6 text-blue-600'/>
                             <p>Media</p>
                          </button> 
                          <button className='flex gap-2 items-center cursor-pointer'>
                             <SlCalender className='w-5 h-5 text-amber-600'/>
                             <p>Media</p>
                          </button>
                          <button className='flex gap-2 items-center cursor-pointer'>
                             <PiNotebook className='w-6 h-6 text-amber-800'/>
                             <p>Media</p>
                          </button>
                       </div>

                       <div  className={` ${postModalData ? ('backdrop-blur-sm fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10'):(' hidden')}`}>
                           {
                             postModalData &&  <PostModal get_all_posts={get_all_posts} setPostModalData={setPostModalData}/>
                           }
                      </div>
     
                    </div>
               <div className='h-fit flex flex-col gap-3' >
               {
                           posts.map((data,index)=>{
                              return <PostCard data={data} key={index} get_all_posts={get_all_posts}/>
                           })
               }
               </div>
         
               </div>
               <div className='w-[24%] h-[550px] flex flex-col gap-7  border bg-white  p-7 rounded-lg'>
                      <p className=' font-semibold text-2xl'>LikedIn News</p>
                      <p className='text-2xl text-slate-400'>Top stories</p>
                      <div className='flex flex-col gap-5'>
                      {
                        stories.map((item,index)=>{
                           return <div className='flex flex-col hover:bg-slate-300 p-2 cursor-pointer '>
                                     <div className='font-semibold'>
                                        {item.title}
                                     </div>
                                     <div className='flex gap-2'>
                                         <p className=' text-sm text-slate-500'>
                                          {item.ago}
                                         </p>
                                         <p className=' text-sm text-slate-500'>
                                           {item.readers}
                                         </p>
                                     </div>
                               </div>
                        })
                      }
                      </div>
               </div>
         
         </div>
        
    </div>
  )
}

export default Feed