'use client'

import React from 'react'
import { FaHtml5, FaCss3, FaJs,FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'

const about = {
  title: 'About me',
  description: 'I am a self-taught front-end developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. I bring a proven track record of success in creating high-quality, responsive websites and web applications. In addition to my technical skills, I possess excellent communication, leadership, and problem-solving skills',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Musaddek Ahmed'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+880) 1820-896472'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Bangladeshi'
    },
    {
      fieldName: 'Email',
      fieldValue: 'musaddek59@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Bangla, Hindi'
    },
  ]
}

const experience = {
  title: "My experience",
  items: [
    {
      company: 'InnovexIT',
      position: 'Front-End Developer',
      duration: 'February 2024 - Present',
      description: 'Collaborated with a team of five in-house web designers to create innovative UI design and used Nextjs 14, tailwindCSS, and Typescript. Authored code fixes & enhancements for inclusion in future code releases and patches.'
    },
    {
      company: 'Codexpro',
      position: 'Mentor',
      duration: '2022 - 2024',
      description: 'Taught the basics of Python programming language to the students and helped them build modern projects with the help of the Python library.'
    },
  ]
}

const education = {
  title: 'My education',
  items: [
    {
      institution: 'Leading University',
      degree: 'B.sc in Computer Science & Engineering',
      duration: '2019-2023',
      cgpa: '3.16 out of 4.00'
    },
    {
      institution: 'Scholarshome School & College',
      degree: 'Higher secondary certificate',
      duration: '2016-2018',
      cgpa: '5.00 out of 5.00'
    },
    {
      institution: 'Scholarshome School & College',
      degree: 'Secondary school certificate',
      duration: '2014-2016',
      cgpa: '5.00 out of 5.00'
    },

  ]
}

const skills= {
  title: 'My skills',
  skillList: [
    {
      icon: <FaHtml5/>,
      name: 'html 5',
    },
    {
      icon: <FaCss3/>,
      name: 'Css 3',
    },
    {
      icon: <FaJs/>,
      name: 'javascript',
    },
    {
      icon: <FaReact/>,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs/>,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss/>,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs/>,
      name: 'node.js',
    },

  ]
}



const Resume = () => {
  return (
    <motion.div
     initial = {{opacity: 0}}
     animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'},
     }}
     className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume