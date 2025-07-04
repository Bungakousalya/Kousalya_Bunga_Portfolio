// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logoo, menu, close } from '../assets';

/**
 * Navbar component - Responsive navigation bar
 */
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo and name */}
        <Link to='/' className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logoo} alt='logo' className='w-7 h-7 sm:w-9 sm:h-9 object-contain' /> {/* Smaller logo on mobile */}
          <p className='text-white text-[16px] sm:text-[18px] font-bold cursor-pointer'>Kousalya Bunga</p>
        </Link>

        {/* Desktop Navbar - hidden on mobile */}
        <ul className='list-none hidden sm:flex flex-row gap-8 sm:gap-10'> {/* Smaller gap on smaller screens */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar toggle - visible only on mobile */}
        <div className='sm:hidden flex justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[24px] h-[24px] object-contain cursor-pointer' // Smaller icon on mobile
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile menu dropdown */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-4 black-gradient absolute top-16 z-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
            <ul className='list-none flex flex-col justify-end items-start gap-3'> {/* Smaller gap on mobile */}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins text-[14px] hover:text-white font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;