import React from 'react'

const Common = (props) => {
  return (
    <section className="container md:w-[90vw] md:mx-auto flex flex-col sm:flex-row items-center ">
        <div className=" order-[2] w-[100%] sm:w-[50%] m-3 sm:h-[80vh] flex flex-col justify-center items-start ">
            <h2 className="text-lg sm:text-4xl ">{props.name} <strong className="text-blue-700 ">TechDeveloper </strong></h2>
            <h2 className="text-sm sm:text-lg font-medium my-2 text-gray-400">WE are the team of talented Web Developer</h2>
            <p className="py-1 px-2 sm:py-2 sm:px-4 my-4 text-sm sm:text-base w-fit rounded-3xl text-white bg-blue-500 cursor-pointer ">{props.btn}</p>
        </div>
        <div className="w-[50%] sm:w-[50%] sm:order-[2] imganimation flex justify-center sm:justify-end items-center ">
            <img className=" w-[75%] h-[75%]" src={props.imgsrc} alt="header-image"/>
        </div>
    </section>
  )
}

export default Common