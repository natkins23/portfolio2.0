import Image from 'next/image'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import MapAnimation from './MapAnimations'

const MapDetails = () => {
  return (
    <div className="absolute top-0 left-0">
      <MapAnimation imgClassName={'test'} imgContainerClass={'test'} />
      {
        //change top / left here for LA starting point
      }
      <div className="absolute -top-[8.5rem] left-7  sm:-top-[9.2rem] sm:left-10  md:-top-[8.5rem] md:left-5 lg:-top-[8.5rem] lg:left-6  xl:-top-[15rem] xl:left-9 w-14 h-14 z-50 font-semibold dark:font-normal ">
        <div className="flex">
          <div className="group-hover:scale-110 group-hover:-translate-y-1 group-hover:-translate-x-1 transition duration-500 ">
            <FaLocationDot className="absolute text-darkBlue dark:text-yellow-400 w-14 h-14" />
            <FaLocationDot className="absolute text-blue-600 dark:text-[#012485] z-40 w-[3.1rem] h-[3.1rem] mt-[.13rem] ml-[.2rem]" />
            <div className="absolute w-5 h-5 left-[1.15rem] top-[.8rem] z-50 group-hover:scale-150 group-hover:z-50 transition duration-500">
              <Image
                src="/portrait.jpg"
                alt="headshot"
                fill
                className="rounded-full shadow-xl"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="relative top-20 -left-5 h-8 w-40 animate-shimmer animate-duration-[8000ms] items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(45deg,#395bbf,45%,#5b93f5,55%,#3956a8)] dark:bg-[linear-gradient(45deg,#002aa3,45%,#0341ad,55%,#012485,80%,#002aa3)] bg-[length:200%_100%] py-1 px-2 text-base whitespace-nowrap  transition-all focus:outline-none  duration-300 ml-1 mt-10 lg:mt-10 ">
            Los Angeles, CA
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapDetails
