import React from 'react'

const GotoPlane = () => {
  return (
    <>
        <div class="w-[full] h-[90vh] sm:h-[100vh]">
            {/* <!-- navbar --> */}
            <div id="navbar" class="w-[100vw] flex justify-between">
                <img class="w-[120px] sm:w-[145px] md:w-[185px] mx-6" src="./NetFlix project image/Logo.png" alt="Logo image"></img>
                <div class="grid content-center text-xl font-semibold mx-6">Sign Out</div>
            </div>
            <hr></hr>
            <div class="w-full md:w-[70vw] mx-auto px-10 flex flex-col items-center">
                <i class="bi bi-check-circle text-5xl pt-24 text-[#f81212]"></i>
                <div class="mt-3">STEP 1 OF 3</div>
                <div class="text-4xl font-bold text-[#464849] my-3">Choose the plan.</div>
                <div class="">
                    <div class="text-xl my-3"><i class="bi bi-check-lg text-3xl text-red-700 font-black"></i>No commitments, cancel anytime.</div>
                    <div class="text-xl my-3"><i class="bi bi-check-lg text-3xl text-red-700 font-black"></i>Everything on Netflix for one low price.</div>
                    <div class="text-xl my-3"><i class="bi bi-check-lg text-3xl text-red-700 font-black"></i>No ads and no extra fees. Ever.</div>
                </div>
                <div class="pb-20 ">
                    <h1 class="w-[25vw] mx-auto text-3xl text-center py-3 my-10 rounded text-white bg-[rgb(231,14,14)]">Next</h1></div>
            </div>
        </div>
    
    </>
  )
}

export default GotoPlane;