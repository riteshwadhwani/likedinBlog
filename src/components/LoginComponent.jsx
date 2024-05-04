import React from 'react'
import {useForm} from 'react-hook-form'
import { useEffect } from 'react';
import Input from './formsComponents/Input';
import { useNavigate } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';

const LoginComponent = () => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors,isSubmitSuccessful}, reset} = useForm();

    useEffect(()=>{
        reset({

        });
    },[isSubmitSuccessful,reset])
    const submit = async(data) =>{
        const response = await axios.post('http://localhost:4000/api/v1/user/signin',{
          email:data.email,password:data.password
        });
        console.log("response in signin...",response.data?.existing_user);
        localStorage.setItem("token",JSON.stringify(response.data.token));
        localStorage.setItem("user",JSON.stringify(response.data?.existing_user));
        toast.success("Log In Sucessfully....")
        navigate('/feed/');
      
    }

  return (
    <div className='flex justify-center items-center'>
       <form className=' flex flex-col gap-5 w-[400px] pt-7 h-[600px] shadow-md shadow-slate-500 rounded-lg p-5 bg-white'>
        <div className='flex flex-col gap-1'>
            <div className='font-semibold text-3xl'>
              Sign in
            </div>
            <div>
              Stay updated on your professional world.
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
        Sign in
       </button>
       <div className='flex gap-2 justify-center items-center'>
        <p className='text-2xl '>New to Linkedin</p>
        <button className='text-xl font-bold text-blue-600' onClick={()=>{navigate('/linkedin-signup')}}>
          Join now
        </button>
       </div>
       </form>
    </div>
  )
}

export default LoginComponent