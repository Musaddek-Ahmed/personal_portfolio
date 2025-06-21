'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react' 
import 'swiper/css'
import {BsArrowUpRight, BsGithub} from 'react-icons/bs'

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'
import SliderBtns from '@/components/ui/sliderBtns'

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'project 1',
    description: 'a social media website where user can post, delete and download images of high quality and search there choiceful category pictures.',
    stack: [{name: 'React'}, {name: 'TailwindCss'}, {name: 'Sanity'}],
    image: '/assets/projects/project2.png',
    live: 'https://lookme-social-media.netlify.app/login',
    github: 'https://github.com/Musaddek-Ahmed/lookme_frontend.git'
  },
{
  num: '02',
  category: 'fullstack',
  title: 'project 2',
  description: 'Docsy is a full-stack real-time collaborative document editor. It supports secure document sharing, real-time collaboration, user roles, and a modern responsive UI.',
  stack: [
    { name: 'Next.js 14' },
    { name: 'TypeScript' },
    { name: 'Clerk Auth' },
    { name: 'Liveblocks' },
    { name: 'Lexical Editor' },
    { name: 'TailwindCSS' },
    { name: 'Radix UI' }
  ],
  image: '/assets/projects/docsy.png',
  live: 'https://docsy-rho.vercel.app/',
  github: 'https://github.com/Musaddek-Ahmed/Docsy'
},

  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'I made this website for a company. I used HTML, CSS and Javascript here. Also used GSAP for animation. Complete frontend was developed by me.',
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'Javascript'}],
    image: '/assets/projects/project1.png',
    live: 'https://www.vercardo.com',
    github: 'https://github.com/Musaddek-Ahmed/vercardo.git'
  },
  
  {
    num: '04',
    category: 'fullstack',
    title: 'project 4',
    description: 'I made my own portfolio with help of NextJs, TailwindCss and Framer-motion. Also used EmailJs for getting visitors messages to my own email. I show cased my work along with my skill in my portfolio.',
    stack: [{name: 'NextJs'}, {name: 'TailwindCss'}, {name: 'Framer-motion'}],
    image: '/assets/projects/project5.png',
    live: 'https://personal-portfolio-two-rouge.vercel.app',
    github: 'https://github.com/Musaddek-Ahmed/personal_portfolio'
  },
  {
    num: '05',
    category: 'frontend',
    title: 'project 5',
    description: 'A SAAS modern landing page with mesmerizing UI with the help of NextJs and TailwindCSS',
    stack: [{name: 'NextJs'}, {name: 'TailwindCss'}, {name: 'Typescript'}],
    image: '/assets/projects/project7.png',
    live: 'https://xora-i.vercel.app',
    github: 'https://github.com/Musaddek-Ahmed/Xora'
  },
  {
    num: '06',
    category: 'frontend',
    title: 'project 6',
    description: 'A modern landing page of a gaming website implementing with the help of NextJs, Typescript and TailwindCSS',
    stack: [{name: 'NextJs'}, {name: 'TailwindCss'}, {name: 'Typescript'}],
    image: '/assets/projects/project-9.png',
    live: 'https://gamer-zone-nu.vercel.app',
    github: 'https://github.com/Musaddek-Ahmed/GamerZone'
  },
  {
    num: '07',
    category: 'frontend',
    title: 'project 7',
    description: 'A beautiful homepage of a travel planner website implementing with the help of NextJs and TailwindCSS',
    stack: [{name: 'NextJs'}, {name: 'TailwindCss'}, {name: 'Typescript'}],
    image: '/assets/projects/project6.png',
    live: 'https://traveleon.vercel.app',
    github: 'https://github.com/Musaddek-Ahmed/traveleon'
  },
  {
    num: '08',
    category: 'frontend',
    title: 'project 8',
    description: 'A beautiful homepage with core implementation of GSAP and minor animations to attract the audience.',
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'Javascript'}],
    image: '/assets/projects/project7.jpeg',
    live: 'https://musaddek-ahmed.github.io/makepill-clone/',
    github: 'https://github.com/Musaddek-Ahmed/makepill-clone'
  },
  {
    num: '09',
    category: 'fullstack',
    title: 'project 9',
    description: 'A weather forecast app with modern touch and various information and implementation of OpenWeatherAPI in fetching real data and making visually attractive and user-friendly.',
    stack: [{name: 'NextJs'}, {name: 'TailwindCss'}, {name: 'Typescript'}],
    image: '/assets/projects/project8.png',
    live: 'https://weather-app-musaddek.vercel.app/',
    github: 'https://github.com/Musaddek-Ahmed/weather-app'
  },

]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
     initial={{opacity: 0}}
     animate={{
      opacity: 1,
      transition: {delay:2.2, duration:0.4, ease: 'easeIn'}
     }}
     className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[400px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px]'>

              <div className='text-6xl text-white font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return(
                    <li key={index} className='text-xl text-accent'>
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-2xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-2xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>

          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
             spaceBetween={30}
             slidesPerView={1}
             className='xl:h-[520px] mb-12'
             onSlideChange={handleSlideChange}
            >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className='w-full'>
                        <div className='h-[400px] relative group flex justify-center items-center bg-pink-50/20'>
                          <div></div>

                          <div className='relative w-full h-full'>
                            <Image 
                              src={project.image}
                              fill
                              className='object-cover'
                              alt='image'
                            />
                          </div>
                        </div>
                    </SwiperSlide>
                  )
                })}

                <SliderBtns 
                 containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                 btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work