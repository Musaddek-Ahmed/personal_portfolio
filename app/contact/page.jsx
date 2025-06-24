'use client'
import React from 'react'
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import emailjs from '@emailjs/browser';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Description } from '@radix-ui/react-dialog'
import {motion} from 'framer-motion'


const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Phone',
    description: '(+880) 1820-896472'
  },
  {
    icon: <FaEnvelope/>,
    title: 'Email',
    description: 'musaddek59@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: 'Address',
    description: 'Uttar Kazitula, Electric Supply Road, Sylhet'
  },
]

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, 
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        },
      );
  };
  return (
    <motion.section
     initial={{opacity: 0}}
     animate={{
      opacity: 1,
      transition: {delay:2.2, duration:0.4, ease: 'easeIn'}
     }}
     className='py-6'
     >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input name='name' type='name' placeholder='Name'/>
                <Input name='email' type='email' placeholder='Email Address'/>
                <Input name='phone' type='phone' placeholder='Phone Number'/>
              </div>
              <Textarea
              name='message'
               className='h-[200px]'
               placeholder='Type your message here...'
              />
              <Button size='md' className='max-w-40'>Send message</Button>
              {success && <span className='text-accent capitalize'>sent successfully! </span>}
              {error && <span className='text-red-600 capitalize'>something went wrong! </span>}
            </form>
          </div>

          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return(
                  <li key={index} className='flex items-center gap-6'>
                      <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[28px]'>{item.icon}</div>

                      </div>
                      <div>
                        <p>{item.title}</p>
                        <h3>{item.description}</h3>
                      </div>
                  </li>
                )
              })}
            </ul>
            </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Contact