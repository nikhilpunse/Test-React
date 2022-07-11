import React from 'react';
import {Link} from 'react-router-dom';
import bg from './NetFlix project image/netflix background img.jpg';
import logo from './NetFlix project image/Logo.png';

const Login = () => {
  return (
    <>
        <div className="relative overflow-hidden w-[full] h-[90vh] sm:h-[100vh] text-white bg-[rgba(0,0,0,0.5)]">
        {/* <!-- navbar --> */}
        <div id="navbar" className="w-[100vw] flex justify-between">
            <img className="w-[120px] sm:w-[135px] md:w-[155px] mx-3" src={logo} alt="Logo image"></img>
        </div>

        {/* <!-- login form --> */}
        <div className="block mx-auto p-6 rounded-lg shadow-lg bg-[rgba(0,0,0,0.7)] max-w-md">
            <form className="flex flex-col items-center justify-center">
              <div className="form-group mb-6">
                <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-white text-4xl py-8">Sign In</label>
                <input type="email" className="form-control
                  block
                  w-[300px]
                  px-3
                  py-4
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
                  aria-describedby="emailHelp" placeholder="Enter email"></input>
                
              </div>
              <div className="form-group mb-6">
                
                <input type="password" className="form-control block
                  w-[300px]
                  px-3
                  py-4
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
                  placeholder="Password"></input>
              </div>
              <Link to='/GotoPlane'>
              <button type="submit" className="
                my-5
                px-[120px]
                py-4
                bg-[rgb(200,0,0)]
                text-white
                font-medium
                text-lg
                leading-tight
                rounded
                shadow-md
                hover:shadow-lg
                 focus:shadow-lg focus:outline-none focus:ring-0
                 active:shadow-lg
                transition
                duration-150
                ease-in-out">Sign In</button></Link>
                <div className="form-group form-check mb-6 text-gray-500">
                    <input type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-gray-300 checked:bg-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer"
                      id="exampleCheck1"></input>
                    <label className="form-check-label inline-block" htmlFor="exampleCheck1">Remember me</label>
                    <label className="form-check-label inline-block ml-16" htmlFor="exampleCheck1">Need Help?</label>
                  </div>
            </form>
            <div className="text-gray-500 mx-12 my-5">New to Netflix? <span className="text-white">Sign Up now </span></div>
            <div className="text-gray-500 mx-12 text-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className="underline text-blue-600" href="#"> Learn more.</a></div>
          </div>

        {/* <!-- background-image --> */}
       <figure className=" ">
            <img className="absolute scale-[2] sm:scale-[1.7] md:w-[100vw] md:scale-[1] h-[100vh] top-0 -z-10"  src={bg} alt="background-image"></img>
        </figure>
        <div className="absolute bottom-0 w-[100vw] h-2 bg-slate-800"></div>
     </div>
    </>
  )
}

export default Login;