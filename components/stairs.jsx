import React from 'react'
import {animate, motion} from "framer-motion"

const stairAnimation = {
  initial: {
    top: '0%',
    filter: 'blur(0px)',
    scale: 0.95,
    opacity: 0.7,
  },
  animate: {
    top: '100%',
    filter: 'blur(4px)',
    scale: 1,
    opacity: 1,
  },
  exit: {
    top: ['100%', '0%'],
    filter: 'blur(0px)',
    scale: 0.95,
    opacity: 0.5,
  },

}

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
    {[...Array(6)].map((_, index) => {
      return (
      <motion.div
       key={index}
       variants={stairAnimation}
       initial='initial'
       animate='animate'
       exit='exit'
       transition={{
        duration: 0.4,
        ease: 'easeInOut',
        delay: reverseIndex(index) * 0.1,
       }}
       className='h-full w-full bg-[#00b7ff] relative'
      />
      )
    })}
    </>
  )
}

export default Stairs