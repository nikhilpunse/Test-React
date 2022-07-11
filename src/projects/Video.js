import React from 'react';
import {Link} from 'react-router-dom';
import link from './fast forious.mp4';
const Video = (props) => {
  return (
    <>
        <div id='video'>
            <Link to='/dashboard'> <div className="absolute top-3 left-28 z-10 text-2xl bg-slate-200 rounded w-fit drop-shadow-md cursor-pointer hover:text-white hover:bg-slate-500 px-1"><i className="bi bi-arrow-left"></i> Back</div> </Link>
            <video className="relative w-[100vw] h-[100vh]" src={props.vidLink} alt='video' controls autoPlay></video>
        </div>
    </>
  )
}

export default Video;