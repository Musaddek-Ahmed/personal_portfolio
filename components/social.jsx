import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn, FaWhatsapp, FaFacebookMessenger} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/Musaddek-Ahmed'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/musaddek-ahmed-486400181/'},
    {icon: <FaWhatsapp/>, path: 'https://wa.link/yuhzna'},
    {icon: <FaFacebookMessenger/>, path: 'https://m.me/musaddek.ahmed.758'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })

        }
    </div>
  )
}

export default Social