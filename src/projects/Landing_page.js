import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './NetFlix project image/Logo.png';
import bg from './NetFlix project image/netflix background img.jpg';
import img1 from './NetFlix project image/tv.png';
import img2 from './NetFlix project image/netflix img mob.jpg';
import img3 from './NetFlix project image/netflix img device-pile-in.png';
import img4 from './NetFlix project image/netflix img.png';
import data from './Questions';
import Accordion from './Accordion';

const Landing_page = () => {
  return (
    <>
        <div className="relative overflow-hidden w-[full] h-[90vh] sm:h-[100vh] text-white bg-[rgba(0,0,0,0.5)]">
        {/* <!-- navbar --> */}
        <div id="navbar" className="w-[100vw] flex justify-between">
            <img className="w-[120px] sm:w-[135px] md:w-[155px] mx-3" src={Logo} alt="Logo image"></img>
            <ul className="flex justify-center items-center sm:text-[20px] ">
                <li > <select name="" className="bg-black text-white px-1 py-1 border rounded border-white sm:mx-3">
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                    </select> 
                </li>
                <li className="px-3 py-1 my-3 mx-2 flex sm:text-[20px] sm:py-2 bg-red-600 text-white rounded font-semibold text-sm sm:mr-12 sm:mx-5">Sign In</li>
            </ul>
        </div>

        {/* <!-- Front text --> */}
        <div className=" min-w-[250px] max-w-[500px] md:max-w-[800px] px-5 mx-auto text-center mt-20 leading-tight flex flex-col justify-center items-center">
            <h2 className="text-[28px] font-[700] sm:text-[50px]">Unlimited movies, TV shows and more.</h2>
            <h3 className="text-[18px] my-5 font-semibold sm:text-[24px]">Watch anywhere. Cancel anytime.</h3>
            <h5 className="my-2 font-semibold sm:text-[24px]">Ready to watch? Enter your email to create or restart your membership.</h5>
            <form className="mx-center my-3 md:my-6 flex flex-col md:flex-row items-center" action="">
                <input className="w-[80vw] text-black font-semibold rounded max-w-[500px] border px-5 py-3 md:py-5" type="text" placeholder="Email Address"></input>
                <Link to="/login"> <input className="py-3 px-4 my-3 md:my-0 md:py-4 bg-red-600 text-white rounded font-semibold sm:text-[20px] md:text-[26px] " value="Get Started >" type="submit"></input></Link>
            </form>
        </div>
        {/* <!-- background-image --> */}
       <figure className=" ">
            <img className="absolute scale-[2] sm:scale-[1.7] md:w-[100vw] md:scale-[1] h-[100vh] top-0 -z-10"  src={bg} alt="background-image"></img>
        </figure>
        <div className="absolute bottom-0 w-[100vw] h-2 bg-slate-800"></div>
     </div>

    {/* <!-- tv section --> */}
    <div className="relative overflow-hidden w-[full] h-[90vh] sm:h-[100vh] text-white bg-black flex flex-col justify-center items-center md:flex-row md:h-[80vh] ">
        <div className="md:mx-20">
            <h2 className=" text-center md:text-left md:mx-5 text-[28px] font-[700] sm:text-[50px] pt-24 md:pt-14">Enjoy on your TV.</h2>
                <h3 className="text-center md:text-left text-[18px] my-5 font-semibold sm:text-[24px] px-5">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
        </div>
        <figure className="lg:mx-20">
            <img className="" src={img1} alt=""></img>
        </figure>
        <div className="absolute bottom-0 w-[100vw] h-2 bg-slate-800"></div>
    </div>

    {/* <!-- mobile section --> */}
    <div className="relative overflow-hidden w-[full] h-[90vh] sm:h-[100vh] text-white bg-black flex flex-col justify-center items-center md:flex-row md:h-[80vh] ">
        <div className="md:order-2 md:mx-20">
            <h2 className="text-center md:text-left md:mx-5 text-[28px] font-[700] sm:text-[50px] pt-24 md:pt-14">Download your shows to watch offline.</h2>
                <h3 className="text-center md:text-left text-[18px] my-5 font-semibold sm:text-[24px] px-5">Save your favourites easily and always have something to watch.</h3>
        </div>
        <figure className="md:order-1">
            <img className="" src={img2} alt=""></img>
        </figure>
        <div className="absolute bottom-0 w-[100vw] h-2 bg-slate-800"></div>
    </div>

    {/* <!-- device section --> */}
    <div className="relative overflow-hidden w-[full] h-[90vh] sm:h-[100vh] text-white bg-black flex flex-col justify-center items-center md:flex-row md:h-[80vh] ">
        <div className="md:mx-20">
            <h2 className="text-center md:text-left md:mx-5 text-[28px] font-[700] sm:text-[50px] pt-24 md:pt-14">Watch everywhere.</h2>
                <h3 className="text-center md:text-left text-[18px] my-5 font-semibold sm:text-[24px] px-5">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
        </div>
        <figure className="mx-20 md:mr-20">
            <img className="" src={img3} alt=""></img>
        </figure>
        <div className="absolute bottom-0 w-[100vw] h-2 bg-slate-800"></div>
    </div>

    {/* <!-- kides section --> */}
    <div className="relative overflow-hidden w-[full] h-[90vh] sm:h-[100vh] text-white bg-black flex flex-col justify-center items-center md:flex-row md:h-[80vh] ">
        <div className="md:order-2 md:w-[50vw] md:mx-10 md:my-32">
            <h2 className="text-center md:text-left md:mx-5 text-[28px] font-[700] sm:text-[50px] pt-24 md:pt-14">Create profiles for children.</h2>
                <h3 className="text-center md:text-left text-[18px] my-5 font-semibold sm:text-[24px] px-5">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
        </div>
        <figure className="mx-20 md:mx-0 md:order-1">
            <img className=" md:w-[450px]" src={img4} alt=""></img>
        </figure>
    </div>
    <div className="bottom-0 w-[full] h-2 bg-slate-800"></div>

    {/* <!-- frequently questions --> */}
    <div className="relative overflow-hidden w-[full] text-white bg-black flex flex-col justify-center items-center py-6">
        <div className="flex flex-col justify-center items-center">
            <div className="w-full sm:w-[80vw] accordian">
                <h1 className="text-center text-[28px] sm:text-[45px] font-[700] py-2 sm:py-10">Frenquintly Ask questions</h1>
                {
                    data.map((curElem)=>{
                        return <Accordion key={curElem.id} curElem={curElem}/>
                    })
                }

            </div>
            
            <div className="text-center  px-5 py-2 text-[28px]">
               Ready to watch? Enter your email to create <br></br> or restart your membership.
            </div>
            <form className="mx-center my-3 md:my-6 flex flex-col md:flex-row items-center" action="">
                <input className="w-[80vw] max-w-[500px] text-black font-semibold border px-5 py-3 md:py-5" type="text" placeholder="Email Address"></input>
                <input className="py-3 px-4 my-3 md:my-0 md:py-4 bg-red-600 rounded font-semibold sm:text-[20px] md:text-[26px] " value="Get Started >" type="submit"></input>
            </form>
        </div>
        
    </div>
    <div className="bottom-0 w-[full] h-2 bg-slate-800"></div>

    {/* <!-- footer section --> */}
    <div className="w-full bg-black py-10 text-slate-600">
        <h1 className="px-5">Questions? Call 000-800-040-1843</h1>
        {/* <!-- container --> */}
        <div className="flex justify-between items-center mx-12 my-5 sm:invisible sm:h-0">
            <ul>
                <li>FAQ</li>
                <li>Account</li>
                <li>Investor Relation</li>
                <li>Ways to Watch</li>
                <li>Privacy</li>
                <li>Corporate Information</li>
                <li>Speed</li>
                <li>Only on Netflix</li>
            </ul>
            <ul>
                <li>Help Center</li>
                <li>Media Center</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Coikies Preferences</li>
                <li>Contact Us</li>
                <li>Legal Notice</li>
            </ul>
        </div>
        <div className="flex justify-between items-center mx-5 invisible sm:visible h-0 sm:h-fit">
            <ul>
                <li>FAQ</li>
                <li>Investor Relation</li>
                <li>Speed</li>
                <li>Privacy</li>
            </ul>
            <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Coikies Preferences</li>
                <li>Legal Notice</li>
            </ul>
            <ul>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
            </ul>
            <ul>
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <ul className="flex justify-start items-center sm:text-[20px] mx-3 sm:my-12">
            <li > <select name="" className="bg-black px-6 py-4 border border-slate-600 rounded sm:mx-3">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select> 
            </li>
            
        </ul>
        <p className="mx-3 my-3 sm:my-0">Netflix India</p>
    </div>
    </>
  )
}

export default Landing_page;