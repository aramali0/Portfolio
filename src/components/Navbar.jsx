import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFlagUsa, FaFlag } from 'react-icons/fa'; // Import flag icons
import ReactCountryFlag from 'react-country-flag';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import '../i18n'; // Import the i18n configuration

const Navbar = () => {
  const { t, i18n } = useTranslation("navbar");
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [language, setLanguage] = useState('fr');

  const changeLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-10 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} className='w-9 h-9 object-contain flex justify-center items-center' />
          <p className='text-white cursor-pointer text-[18px] font-bold flex'>
            ARAMALI&nbsp;
            <span className='md:block hidden'>| {t('engineering_student')}</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>
                {t(link.title.toLowerCase())}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex ml-[10px] gap-4'>
          <div onClick={changeLanguage} className='cursor-pointer'>
            {language === 'en' ? 
              <ReactCountryFlag countryCode="US" svg style={{ width: '1.5em', height: '1.5em' }} title="English" />
            : 
              <ReactCountryFlag countryCode="FR" svg style={{ width: '1.5em', height: '1.5em' }} title="English" />
            }
          </div>
        </div>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}>
                  <a href={`#${link.id}`}>{t(link.title.toLowerCase())}</a>
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