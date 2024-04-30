import React from 'react'
import {IoHomeSharp,IoHomeOutline} from 'react-icons/io5'
import {BsPeopleFill} from 'react-icons/bs'
import {IoMdPeople} from 'react-icons/io'
import { HiShoppingBag } from "react-icons/hi2";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { BiMessageDetail } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";
import { TbBellFilled ,TbBellRinging2Filled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useLocation ,matchPath } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const navitems =[
{
  id:1,
  item:'Home',
  path : "/feed/",
  normal_icon: <IoHomeOutline className='w-6 h-6 text-slate-500 hover:text-black'/>,
  focus_icon : <IoHomeSharp className='w-6 h-6 text-black'/>
},
{
  id:2,
  item:'My Network',
  path : '/network',
  normal_icon: <BsPeopleFill className='w-6 h-6 text-slate-500 hover:text-black'/>,
  focus_icon : <IoMdPeople className='w-6 h-6 text-black'/>
},
{
  id:3,
  item:'Jobs',
  path : '/jobs',
  normal_icon: <HiShoppingBag className='w-6 h-6 text-slate-500 hover:text-black'/>,
  focus_icon : <PiShoppingBagOpenFill className='w-6 h-6 text-black'/>
},
{
  id:4,
  item:'Messaging',
  path : '/messages',
  normal_icon: <BiMessageDetail className='w-6 h-6 text-slate-500 hover:text-black'/>,
  focus_icon : <TbMessages className='w-6 h-6 text-black'/>
},
{
  id:5,
  item:"Notifications",
  path : '/notifications',
  normal_icon : <TbBellFilled className='w-6 h-6 text-slate-500 hover:text-black'/>,
  focus_icon :  <TbBellRinging2Filled className='w-6 h-6 text-black'/>
}
];

const Navbar = () => {
  const location = useLocation();
  console.log("location",location.pathname);
  const token = localStorage.getItem("token");

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }
  return (
    <div className=' bg-white p-3'>
         <div className='w-10/12 flex justify-between mx-auto'>
              {
                token && <div className='flex p-3 relative justify-center items-center gap-6'>
                 <div>
                    <FaLinkedin className='w-12 h-12 text-blue-600'/>
                 </div>
                 <div className='flex relative'>
                  <input placeholder='search' className='p-2 w-[300px] bg-gray-100 rounded-md'/>
                  <IoIosSearch className='w-6 h-6 absolute translate-x-[260px] translate-y-2 '/>
                 </div>

              </div>
              }
              {
                !token  && <Link to={'/'} className='flex justify-center items-center'>
                  <p className='text-3xl text-blue-600 font-bold'>Linked</p>
                  <FaLinkedin className='w-12 h-12 text-blue-600'/>

                </Link> 
              }
              {
                (location.pathname !== "linkedin-signin" || location.pathname !== "linkedin-signup") && <div className='flex gap-4'>
                <div className='flex gap-2'>
              {
                 token && navitems.map((item,index)=>(
                  <Link to={item?.path} key={index}>
                    {
                      matchRoute(item?.path) ? (
                        <div className='flex flex-col justify-center items-center p-3'>
                          <div>
                          {item.focus_icon}
                          </div>
                          <p>
                            {item.item}
                          </p>

                        </div>
                      ) : (
                        <div className='flex flex-col justify-center items-center p-3 group'>
                        <div className='group-hover:text-black' >
                          {item.normal_icon}
                          </div>
                          <p className='group-hover:text-black'>
                            {item.item}
                          </p>

                        </div>
                      )
                    }
                  </Link>
                ))
              }

              </div>
              {
                !token && <div className='flex justify-center items-center gap-5'>
                <Link to={'/linkedin-signup'} className='p-3 text-gray-600 font-semibold'>
                  Join Now
                </Link>
                <Link to={'/linkedin-signin'} className='p-3 border border-blue-600 hover:bg-blue-100 rounded-full text-blue-600 text-xl font-semibold flex items-center justify-center'>
                  Sign In
                </Link>
              </div> 
              }
                </div>
              }

         </div>
    </div>
  )
}

export default Navbar