"use client"
import { Bars3Icon, ClockIcon, SunIcon } from '@heroicons/react/20/solid';
import { MoonIcon } from '@heroicons/react/24/solid';
import React, { Dispatch, SetStateAction } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

type NavigationProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
};

const Navigation: React.FC<NavigationProps> = ({setOpen}) => {
    
    const darkMode = true
    
    return <nav className={`flex h-14 bg-white items-center lg:px-[32px] px-[16px] justify-between`}>
        <div className="flex items-center gap-3">
          <Bars3Icon onClick={()=>setOpen(prev => !prev)} className="w-6 h-6 cursor-pointer" />
          <h1 className="text-[25px] font-semibold">Calculator</h1>
        </div>
        <div className="flex items-center gap-3">
            {darkMode ? <SunIcon className="w-6 h-6 text-[#00308f] cursor-pointer" /> : <MoonIcon className="w-6 h-6 text-[#00308f] cursor-pointer" />}
            <ClockIcon className='w-6 h-6 text-[#00308f] cursor-pointer' />
        </div>
      </nav>;
}
export default Navigation;