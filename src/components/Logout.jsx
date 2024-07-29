import React, { useContext, useState } from 'react'
import { AuthContext } from '../authentication/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const [error,setError] = useState("")
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

   const handleLogout = () =>{
       logOut().then(() => {
        alert("Logout!")
        navigate(from,{replace: true})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
       
   }

  return (
    <div className='h-screen bg-slate-200 flex items-center justify-center'>
        <button className='bg-myblack px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout