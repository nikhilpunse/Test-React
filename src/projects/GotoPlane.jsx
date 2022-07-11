import React from 'react';
import {Link} from 'react-router-dom';
import logo from './NetFlix project image/Logo.png';

const GotoPlane = () => {
  return (
    <>
        <div className="w-[full] h-[90vh] sm:h-[100vh]">
         {/* <!-- navbar --> */}
        <div id="navbar" className="w-[100vw] flex justify-between">
            <img className="w-[120px] sm:w-[145px] md:w-[185px] mx-6" src={logo} alt="Logo image"></img>
            <div className="grid content-center text-xl font-semibold mx-6">Sign Out</div>
        </div>
        <hr></hr>
        <div className="w-full md:w-[70vw] mx-auto px-10 flex flex-col items-center">
            <i className="bi bi-check-circle text-5xl pt-24 text-[#f81212]"></i>
            <div className="mt-3">STEP 1 OF 3</div>
            <div className="text-4xl font-bold text-[#464849] my-3">Choose the plan.</div>
            <div className="">
                <div className="text-xl my-3"><i className="bi bi-check-lg text-3xl text-red-700 font-black"></i>No commitments, cancel anytime.</div>
                <div className="text-xl my-3"><i className="bi bi-check-lg text-3xl text-red-700 font-black"></i>Everything on Netflix for one low price.</div>
                <div className="text-xl my-3"><i className="bi bi-check-lg text-3xl text-red-700 font-black"></i>No ads and no extra fees. Ever.</div>
            </div>
            <div className="pb-20 ">
                <Link to='/Plane'>
                <h1 className="w-[25vw] mx-auto text-3xl text-center py-3 my-10 rounded text-white bg-[rgb(231,14,14)]">Next</h1></Link></div>
        </div>
        </div>
    </>
  )
}

export default GotoPlane;