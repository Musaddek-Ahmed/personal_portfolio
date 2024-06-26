import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button' 

//components
import Nav from './nav'
import MobileNav from './mobile_nav'

const Header = () => {
  return (
    <header className='py-8 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href="/">
        <h1 className='text-3xl font-semibold'>
          Musaddek<span className='text-accent'>.</span>
        </h1>
        </Link>

        {/* desktop nav */}
        <div className='hidden xl:flex items-center gap-8'>
        <Nav />
        <Link href="/contact">
          <Button className="bg-accent text-black font-bold">Hire me</Button>
        </Link>
        </div>

        {/* mobile nav */}
        <div className='xl:hidden'>
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}

export default Header