'use client'
import React from 'react'
import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'requirements analysis'
  },
  {
    num: '02',
    title: 'ask about deadlines and restrictions'
  },
  {
    num: '03',
    title: 'setting up the environment'
  },
  {
    num: '04',
    title: 'programming'
  },
  {
    num: '05',
    title: 'testing my results'
  },
  {
    num: '06',
    title: 'supporting and scaling my code'
  }
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
         initial={{opacity: 0}}
         animate={{
          opacity: 1,
          transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
         }}
         className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return(
              <div key={index}>
                <div className='hover:text-accent'>
                <div className='text-4xl font-bold pb-2 '>{service.num}</div>
                  <BsArrowDownRight/>
              </div>
              <h2 className='uppercase text-xl pt-2'>{service.title}</h2>
              <div className='py-2 border-b border-white/20 w-full'></div>
              </div>    
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services