import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";

import googleLogo from "../assets/google-logo.svg";

const Login = () => {
    const { login, loginWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    //handle signup with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password).then((userCredential) => {
        const user = userCredential.user;
        alert("Login Successfull!")
        navigate(from,{replace: true})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
    
  };

  //handle sign up with google account
  const handleRegister =() => {
    loginWithGoogle().then((result) => {
        const user = result.user;
        alert("Sign up Successfull!");
        navigate(from,{replace: true})
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-semibold ">Welcome Back,<br/>Login to your account</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogin}
                className="py-8 text-base leading-6 space-y-3 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>
                {error?<p className="text-red-600 text-base">Incorrect Email or Password</p>:""}
                <div className="relative w-full  flex flex-col justify-center gap-y-2">
                  <button className="bg-myblack text-white text-md text-bold rounded-md px-8 py-1.5">
                    Login
                  </button>
                  <p>
                  Don't have an account?
                  <Link to="/sign-up" className="text-blue-500 underline ml-1">
                    Sign up here
                  </Link>
                  
                </p>
                </div>
              </form>
            </div>

            <hr/>
            <div className="flex w-full justify-center border">
                <button onClick={handleRegister} className="block"><img src={googleLogo} alt="" className="h-8 w-8 inline-block"/>Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login