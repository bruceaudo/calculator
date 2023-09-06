"use client"
import { Bars3Icon, ClockIcon, SunIcon } from '@heroicons/react/20/solid';
import { MoonIcon } from '@heroicons/react/24/solid';
import React, { Dispatch, SetStateAction } from 'react';
import { useDarkmode } from '../hooks/useDarkmode';

type NavigationProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
};

const Navigation: React.FC<NavigationProps> = ({setOpen}) => {
    
    const { darkMode, setDarkMode } = useDarkmode();
    
    return <nav className={`flex h-14 ${darkMode.darkMode ? "bg-black text-white" : "bg-white"} items-center lg:px-[32px] px-[16px] justify-between`}>
        <div className="flex items-center gap-3">
          <Bars3Icon onClick={() => setOpen(prev => !prev)} className="w-6 h-6 cursor-pointer" />
          <h1 className="text-[25px] font-semibold">Calculator</h1>
        </div>
        <div className="flex items-center gap-3">
          {darkMode.darkMode ? <SunIcon onClick={() => setDarkMode(
                    prev => ({ ...prev, darkMode: false })
                  )} className="w-6 h-6 text-[#00308f] cursor-pointer" /> : <MoonIcon onClick={() => setDarkMode(
                    prev => ({ ...prev, darkMode: true })
                  )} className="w-6 h-6 text-[#00308f] cursor-pointer" />}
          <ClockIcon className="w-6 h-6 text-[#00308f] cursor-pointer lg:hidden" />
        </div>
      </nav>;
}
export default Navigation;