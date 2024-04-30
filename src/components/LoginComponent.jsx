import React from 'react'
import {useForm} from 'react-hook-form'
import { useEffect } from 'react';
import Input from './formsComponents/Input';

const LoginComponent = () => {
    const {register,handleSubmit,formState:{errors,isSubmitSuccessful}, reset} = useForm();

    useEffect(()=>{
        reset({

        });
    },[isSubmitSuccessful,reset])

  return (
    <div>
       <form>
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
       </form>
    </div>
  )
}

export default LoginComponent