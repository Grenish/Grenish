import { useState } from 'react'
import { navLinks } from '../Constants';

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <div className='w-[149px] h-[58px]'>
            <h1 className="font-base">GRENISH</h1>
        </div>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
            font-normal
            cursor-pointer
            text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
            text-white mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
