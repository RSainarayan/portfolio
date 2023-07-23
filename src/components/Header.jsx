import React from 'react'
import { MdNightsStay, MdWbSunny } from 'react-icons/md';
import symbol from '../assests/symbol.png'

const Header = ({darkMode, setDarkMode}) => {
  return (
  <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <nav className="flex justify-between items-center py-5 px-5">
        <img src={symbol} className='w-12 md:w-25 ,md:h-50, object-top'/>
        
        <div onClick={() => setDarkMode(!darkMode)}>
            {
                darkMode ?(
                <MdNightsStay className='text-2xl cursor-pointer'/>
   ) :(
                <MdWbSunny className='text-2xl cursor-pointer'/>
            )}
            
            
        </div>
    </nav>
  </header>
    
  );
};

export default Header
