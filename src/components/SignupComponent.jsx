import React from 'react'
import {useForm} from 'react-hook-form'
import { useEffect } from 'react';
import Input from './formsComponents/Input';
import { useNavigate } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';
const SignupComponent = () => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors,isSubmitSuccessful}, reset} = useForm();

    useEffect(()=>{
        reset({

        });
    },[isSubmitSuccessful,reset])
    const submit = async(data) =>{
        const response = await axios.post("http://localhost:4000/api/v1/user/signup", {
              email:data.email,
              firstName:data.firstName,
              lastName:data.lastName,
              password:data.password
            });
            console.log("Response on signup....",response);
            localStorage.setItem("token",JSON.stringify(response.data.token));
            localStorage.setItem("user",JSON.stringify(response.data?.created_user));
            toast.success("Registered Successfully..")
            navigate("/feed/")
    }

  return (
    <div className='flex flex-col justify-center items-center gap-7'>
        <div className='text-4xl'>
        Make the most of your professional life
        </div>
       <form className=' flex flex-col gap-5 w-[600px] pt-7 h-[600px] shadow-md shadow-slate-500 rounded-lg p-5 bg-white'>
        
        <div className='flex justify-between gap-1'>
             <div className='flex flex-col w-[50%] '>
                <label>
                     firstName:
                </label>
                <Input  type={'text'} placeholder={'firstName'} {...register("firstName",{required:true})} />
                {
                 errors.firstName && <span> Email is required</span>
                }
            </div>
            <div className='flex flex-col w-[50%]'>
                <label>
                     lastName:
                </label>
                <Input  type={'text'} placeholder={'lastName'} {...register("lastName",{required:true})} />
                {
                 errors.lastName && <span> Email is required</span>
                }
            </div>
        </div>
       <div className='flex flex-col'>
           <label>
                Email:
           </label>
           <Input  type={'text'} placeholder={'Email'} {...register("email",{required:true})} />
           {
            errors.email && <span> Email is required</span>
           }
       </div>
       <div className='flex flex-col'>
           <label>
                Password:
           </label>
           <Input  type={'password'} placeholder={'password'} {...register("password",{required:true})} />
           {
            errors.email && <span> Password is required</span>
           }
       </div>
       <button onClick={handleSubmit(submit)} className='p-5 bg-blue-600 hover:bg-blue-800 rounded-full text-white font-semibold'>
        Sign up
       </button>
       <div className='flex gap-2 justify-center items-center'>
        <p className='text-2xl '>Already on Linkedin</p>
        <button className='text-xl font-bold text-blue-600' onClick={()=>{navigate('/linkedin-signup')}}>
          Sign in
        </button>
       </div>
       </form>
    </div>
  )
}

export default SignupComponent