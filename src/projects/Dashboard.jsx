import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import link from './movie poster logo/attack_mob_poster.jpg';
import bg from './movie poster logo/FF-movies-ranked.avif';
import logo from './NetFlix project image/Logo.png';
import sm_logo from './NetFlix project image/netflix-N-logo-png.png';
import './style.css';
import Data from './Api';
import Data2 from './Api2';
import { useState } from 'react';


const Dashboard = (props) => {

    const [poster,setPoster] = useState(bg);
    const [name,setName] = useState('Fast & Fourious');
    const navigate = useNavigate();

    // play button event
    const playEvent=()=>{
        navigate('/video');
    }

    const clickedEvent = (id)=>{
        const selected = Data.find((curElem,index)=>{
            return id === index+1;
        });
        setPoster(selected.poster);
        setName(selected.name);
        props.setVidLink(selected.video);
    }

    const clickedEvent2 = (id)=>{
        const selected = Data2.find((curElem,index)=>{
            return id === index+1;
        });
        setPoster(selected.poster);
        setName(selected.name);
        props.setVidLink(selected.video);
    }

  return (
    <>
        
        <div id='dashboard' className=" w-full overflow-hidden bg-black text-white mb-3" >
        {/* <!-- hero section for mobile section --> */}
        <div className="sm:invisible sm:h-0 relative h-[60vh] flex flex-col justify-between items-start">
            <img className="absolute z-10 top-0 right-0 w-full h-[60vh]" src={link} alt=""></img>
            <div className="w-full flex justify-center">
                <img className="w-[120px] z-20 sm:w-[135px] md:w-[155px] mx-3" src={logo} alt="Logo image"></img>
            </div>
            {/* <!-- hero section buttons --> */}
            <div className="z-20 w-full flex justify-center items-center my-5">
                <div className="w-[420px] mx-8 flex justify-between items-center bg-[rgba(0,0,0,0.3)]">
                    <div className="flex flex-col items-center cursor-pointer">
                        <div className="text-5xl">+</div>
                        <div className="text-[10px]">playList</div>
                    </div>
                    <div className="px-2 py-0 rounded font-bold text-black bg-white cursor-pointer"><i className="bi bi-play-fill"></i> Play</div>
                    <div className="flex flex-col items-center cursor-pointer">
                        <div className="text-3xl"><i className="bi bi-exclamation-circle"></i></div>
                        <div className="text-[10px]">info</div>
                    </div>
                </div>
            </div>
            
        </div>
        
        {/* <!-- hero section for sm breakpoint --> */}
         {/* <!-- navbar --> */}
        <div className="invisible h-0 sm:visible sm:h-fit flex justify-between items-center" >
            <img className="w-[140px] h-20 mx-3" src={logo} alt="logo img"></img>
            <ul className="flex text-lg">
                <li className="mx-5 cursor-pointer hover:scale-110">TV Series</li>
                <li className="mx-5 cursor-pointer hover:scale-110">Movies</li>
                <li className="mx-5 cursor-pointer hover:scale-110">Recently Added</li>
                <li className="mx-5 mr-6 cursor-pointer hover:scale-110">My List</li>
            </ul>
        </div>
        <div className="invisible h-0 relative sm:visible sm:h-[60vh] md:h-[70vh] lg:h-[80vh] mx-5 flex flex-col justify-center items-start" >
           

            {/* <!-- hero text section --> */}
            <div className="z-10">
                <figure className="flex items-center">
                    <img className="w-[10px] h-4 mx-2" src={sm_logo} alt="logo img"></img><span className="tracking-[8px] text-gray-300"> FILM </span>
                </figure>
                <div className="text-5xl font-semibold">{name}</div>
                <div className="my-3 text-gray-300">
                    Description:- Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Illo, praesentium ullam?  Veritatis unde deserunt fugiat, optio nam dolore <br></br> mollitia placeat harum earum voluptate, a, sed cum id saepe quasi et. <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Illo, praesentium ullam?  Veritatis unde deserunt fugiat, optio nam dolore <br></br> mollitia placeat harum earum voluptate, a, sed cum id saepe quasi et.
                </div>
                <div className="w-full flex justify-start items-center my-5">
                    <div className="w-[200px] flex justify-between items-center">
                       <div onClick={playEvent} className="px-4 py-2 rounded font-semibold text-black bg-white cursor-pointer hover:scale-[1.1]"><i className="bi bi-play-fill"></i> Play</div>
                      
                        <div className="px-4 py-2 rounded font-semibold text-white bg-gray-500 cursor-pointer hover:scale-[1.1]">More Info</div>
                    </div>
                </div>
            </div>
            
            {/* <!-- background image --> */}
            <div className="absolute z-0">
                <figure className="fade_effect">
                    <img className=" top-0 right-0 w-[100vw] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]" src={poster} alt="background img"></img>
                </figure>
            </div>
        </div>
        {/* <!-- <hr> --> */}

        {/* <!-- scrolling secction --> */}
        <div id="wrapper" className="loop h-[35vh] overflow-y-scroll mx-5" >
            
        <div id="loop_container">
                <h1 className="text-sm ml-6 sm:text-lg sm:ml-12 mt-4 font-semibold">Bollywood</h1>
                <div className="w-full loop flex justify-between overflow-y-hidden overflow-x-scroll">
                {
                    Data2.map((curElem, index)=>{
                        return (<div key={index}  >
                            <img id={curElem.id} onClick={()=>clickedEvent2(curElem.id) } className="img min-w-[150px] h-[200px] rounded px-3 mx-0 py-1" src={curElem.logo} alt="image"></img>
                        </div>)
                    })
                }
                </div>
            </div>

            <div id="loop_container">
                <h1 className="text-sm ml-6 sm:text-lg sm:ml-12 mt-4 font-semibold">Hollywood</h1>
                <div className="loop flex overflow-y-hidden overflow-x-scroll">
                {
                    Data.map((curElem, index)=>{
                        return (<div key={index}  >
                            <img id={curElem.id} onClick={()=>clickedEvent(curElem.id) } className="img min-w-[130px] h-[200px] rounded mx-3 my-1" src={curElem.logo} alt="image"></img>
                        </div>)
                    })
                }
                </div>
            </div>
         </div>
    </div>    
    </>
  )
}

export default Dashboard;
