'use client'

import React from 'react'
import { FaHtml5, FaCss3, FaJs,FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { list } from 'postcss'

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
      cgpa: 'CGPA-3.16 out of 4.00'
    },
    {
      institution: 'Scholarshome School & College',
      degree: 'Higher secondary certificate',
      duration: '2016-2018',
      cgpa: 'GPA-5.00 out of 5.00'
    },
    {
      institution: 'Scholarshome School & College',
      degree: 'Secondary school certificate',
      duration: '2014-2016',
      cgpa: 'GPA-5.00 out of 5.00'
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
          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <ScrollArea className='sm:h-[650px] xl:h-[400px]'>
                  <ul className='grid grid-cols gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return(
                        <li 
                         key={index}
                         className='bg-[#232329] h-[310px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        > 
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                        </div>
                          
                          <h3 className='text-xl max-w-[268px] min-h-[68px] text-center lg:text-left'>{item.position}</h3>
                          <p className='text-accent'>{item.duration}</p>
                          <div>
                            <p>{item.description}</p>
                          </div>

                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            <TabsContent value='education' className='w-full'>
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <ScrollArea className='sm:h-[650px] xl:h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return(
                        <li 
                         key={index}
                         className='bg-[#232329] h-[310px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        > 
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.institution}</p>
                        </div>
                          
                          <h3 className='text-xl max-w-[268px] min-h-[68px] text-center lg:text-left capitalize'>{item.degree}</h3>
                          <p className='text-accent'>{item.duration}</p>
                          <div>
                            <p>{item.cgpa}</p>
                          </div>

                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    </div> 
                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 xl:gap-[30px]'>
                      {skills.skillList.map((skill, index)=> {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                  <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className='capitalize'>{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            </li>
                        )
                        
                      })}
                    </ul>
              </div>
            </TabsContent>
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index)=> {
                    return(
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl '>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume