"use client"
import { SunIcon } from '@heroicons/react/20/solid';
import { MoonIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

type NavigationProps = {
    
};

const Navigation:React.FC<NavigationProps> = () => {

    //const { darkMode, setDarkMode } = useDarkMode()
    const darkMode = true
    
    return <nav className={`flex h-14 bg-white items-center lg:px-[32px] justify-between`}>
        <div>
          <h1 className="text-[25px] font-semibold">Calculator</h1>
        </div>
        <div>
          {darkMode ? <SunIcon className="w-6 h-6 text-[#00308f] cursor-pointer" /> : <MoonIcon className="w-6 h-6 text-[#00308f] cursor-pointer" />}
        </div>
      </nav>;
}
export default Navigation;