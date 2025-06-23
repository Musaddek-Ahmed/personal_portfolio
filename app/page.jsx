import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Social from '@/components/social'
import Photo from '@/components/photo'

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none mt-8 '>
            <span className='text-xl'>Frontend Developer</span>
            <h1 className='h1 mb-6 '>
              Hello I'm <br /> <span className=' text-accent'>Musaddek Ahmed</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies</p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a href="/Resumee.pdf" download>
              <Button
               variant='outline'
               size='lg'
               className='uppercase flex items-center gap-2'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl'/>
              </Button>
              </a>
              
              <div className='mb-8 xl:mb-0'>
                  <Social 
                   containerStyles='flex gap-6'
                   iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                  />
              </div>

               
            </div>

            <p className=' text-slate-400 mt-10 text-sm mb-10'>© {new Date().getFullYear()} Musaddek Ahmed. All rights reserved.</p>
            
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
                  <Photo/>
               </div>
        </div>
      </div>
    </section>
  )
}

export default Home
