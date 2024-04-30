import React, { useEffect } from 'react'
import { Navigate } from 'react-router';
import toast from 'react-hot-toast';

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token");
    
    if(token !==null){
        return children;
    }

  return <Navigate to={'/linkedin-signin'}/>
}

export default PrivateRoute