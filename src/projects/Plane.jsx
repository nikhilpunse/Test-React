import React from 'react'
import {Link} from 'react-router-dom';
import logo from './NetFlix project image/Logo.png';

const Plane = () => {
  return (
    <>
        <div className="w-[full] h-[90vh] sm:h-[100vh]">
        {/* <!-- navbar --> */}
        <div id="navbar" className="w-[100vw] flex justify-between">
            <img className="w-[120px] sm:w-[145px] md:w-[185px] mx-6" src={logo}></img>
            <div className="grid content-center text-xl font-semibold mx-6">Sign Out</div>
        </div>
        <hr></hr>
        <div className="w-full md:w-[70vw] mx-auto px-10">
            <div className="mt-3">STEP 1 OF 3</div>
            <div className="text-3xl font-bold text-[#464849] my-3">Choose the plan that’s right for you</div>
            <div className="text-xl"><i className="bi bi-check-lg text-3xl text-red-700 font-black"></i> Watch all you want. Ad-free.</div>
            <div className="text-xl"><i className="bi bi-check-lg text-3xl text-red-700 font-black"></i>Recommendations just for you.</div>
            <div className="text-xl"><i className="bi bi-check-lg text-3xl text-red-700 font-black"></i>Change or cancel your plan anytime.</div>
            <div className="flex justify-end my-10">
                <div className="w-[120px] h-[120px] bg-[#e94b23] hover:bg-[#e94b23] flex justify-center items-center text-xl text-white mx-2">Mobile</div>
                <div className="w-[120px] h-[120px] bg-red-300 hover:bg-[#e94b23] flex justify-center items-center text-xl text-white mx-2">Basic</div>
                <div className="w-[120px] h-[120px] bg-red-300 hover:bg-[#e94b23] flex justify-center items-center text-xl text-white mx-2">Standard</div>
                <div className="w-[120px] h-[120px] bg-red-300 hover:bg-[#e94b23] flex justify-center items-center text-xl text-white mx-2">Premium</div>
            </div>
            <div className="flex justify-between items-center my-3 font-semibold">
                <div className="">Monthly Price</div>
                <div className="ml-40"><i className="bi bi-currency-dollar"></i>149</div>
                <div className=""><i className="bi bi-currency-dollar"></i>199</div>
                <div className=""><i className="bi bi-currency-dollar"></i>499</div>
                <div className="mr-12"><i className="bi bi-currency-dollar"></i>649</div>
            </div>
            <hr></hr>
            <div className="flex justify-between items-center my-3 font-semibold">
                <div className="">Video Quality</div>
                <div className="ml-40">Good</div>
                <div className="">Good</div>
                <div className="">Better</div>
                <div className="mr-12">Best</div>
            </div>
            <hr></hr>
            <div className="flex justify-between items-center my-3 font-semibold">
                <div className="">Resolution</div>
                <div className="ml-48">480</div>
                <div className="">480</div>
                <div className="">1080</div>
                <div className="mr-12">4K+HDR</div>
            </div>
            <hr></hr>
            <div className="flex justify-between items-center my-3 font-semibold">
                <div className="">Device can you use to Watch</div>
                <div className="ml-16"><i className="bi bi-phone"></i>Phone</div>
                <div className=""><i className="bi bi-phone"></i>Phone</div>
                <div className=""><i className="bi bi-laptop"></i>Computer</div>
                <div className="mr-12"><i className="bi bi-tv"></i>tv</div>
            </div>
            <hr></hr>
            <div className="text-xs text-gray-700 my-10">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
                Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</div>
            <div className="pb-20">
                <Link to='/dashboard'> <h1 className="w-[30vw] mx-auto text-3xl text-center py-3  rounded text-white bg-[rgb(231,14,14)]">Next</h1></Link></div>
        </div>
    </div>
    </>
  )
}

export default Plane;