'use client'
import React from 'react'
import { AuroraBackground } from './ui/aurora-background'
import { ModeToggle } from './ModeToggle'
import Image from 'next/image'
import { FaArrowDown, FaLocationArrow } from 'react-icons/fa'
import { Link } from 'react-scroll'
import GridBackground from './ui/GridBackground'
import next from 'next'
import { FiGithub } from 'react-icons/fi'
import { CiLinkedin } from 'react-icons/ci'
import { FaXTwitter } from 'react-icons/fa6'
import ScrollButton from './ui/BentoComponents/ScrollButton'

const Hero = () => {
  return (
    <div className="" id="home">
      <AuroraBackground>
        <GridBackground />
        <div className="max-w-[100vw] h-[85vh] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center z-50">
          <p className="uppercase tracking-widest pb-10 pt-20 md:pt-0 text-xl text-center text-darkBlue font-semibold dark:font-normal dark:text-white max-w-80">
            <span className="animate-fade-right animate-delay-[3000ms] ">Code.</span>{' '}
            <span className="animate-fade-right animate-delay-[3500ms]">Create.</span>{' '}
            <span className="animate-fade-right animate-delay-[4000ms] ">Innovate.</span>
          </p>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-5  ">
            <div className="flex max-w-[100vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-start gap-3 ">
              <h1 className="text-center md:text-start w-full justify-start text-5xl md:text-5xl lg:text-6xl font-semibold animate-fade-right animate-delay-[1000ms] ">
                Hi, I&apos;m <span className="text-purple-400">Nathan</span>
              </h1>
              <p className="text-center md:text-start w-full pl-1 md:tracking-wider text-2xl md:text-lg lg:text-2xl animate-fade-up animate-delay-[1200ms] font-semibold dark:font-normal ">
                A Next.js Developer
              </p>
              <div className="flex items-center justify-center md:justify-start w-full">
                <div className="relative md:top-0 md:-left-2 z-50">
                  <div className="flex items-center justify-center pb-2 gap-3">
                    <a
                      href="https://github.com/natkins23"
                      target="_blank"
                      rel="noopener noreferrer">
                      <div className="w-12 h-12 rounded-full hover:bg-slate-900">
                        <FiGithub className="w-full h-full p-3" />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nathancwatkins/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <div className="w-12 h-12 rounded-full hover:bg-slate-900">
                        <CiLinkedin className="w-full h-full p-2" />
                      </div>
                    </a>
                    <a
                      href="https://x.com/nathancwatkins"
                      target="_blank"
                      rel="noopener noreferrer">
                      <div className="w-12 h-12 rounded-full hover:bg-slate-900">
                        <FaXTwitter className="w-full h-full p-3" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center md:justify-start justify-center ">
                <ScrollButton link="about" text="See more" className="" />
              </div>
            </div>
            <div className="w-[20rem] h-[20rem] relative">
              <div className="aspect-square w-full h-full relative">
                <div className="absolute inset-0 dark:bg-black/20 animate-delay-[3500ms] animate-fade-left rounded-full z-10"></div>
                <Image
                  src="/portrait.jpg"
                  className="rounded-full object-cover"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Nathan's portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
}

export default Hero
