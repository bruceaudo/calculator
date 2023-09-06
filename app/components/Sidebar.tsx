import { CalculatorIcon, XMarkIcon } from '@heroicons/react/20/solid';
import React, { Dispatch, SetStateAction } from 'react';

type SidebarProps = {
    setOpen: Dispatch<SetStateAction<boolean>>
    setMode: Dispatch<SetStateAction<string>>
    mode: string
};

const Sidebar:React.FC<SidebarProps> = ({mode, setOpen, setMode}) => {
    
    return <div className="w-1/2 lg:w-1/5 md:w-1/3 fixed top-0 bottom-0 bg-white shadow-lg p-3">
        <div className="w-full flex items-center justify-end">
          <XMarkIcon onClick={() => setOpen(prev => !prev)} className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="w-full">
          <h2 className="font-semibold mb-5">Calculator</h2>
          <button onClick={() => {
              setMode("Standard");
              setOpen(prev => !prev);
            }} className={`${mode === "Standard" ? "bg-gray-100" : ""} text-black border-none rounded-md p-1.5 w-full flex items-center gap-2 mb-5`}>
            <CalculatorIcon className={`w-6 h-6 text-[#00308f]`} />
            Standard
          </button>

          {/** 
            <button onClick={() => {
                setMode("Scientific")
                setOpen(prev => !prev)
            }} className={`${mode === "Scientific" ? 'bg-gray-100' : ""} text-black border-none rounded-md p-1.5 w-full flex items-center gap-2 mb-5`}>
                <CalculatorIcon className='w-6 h-6 text-[#00308f]' />
                Scientific
            </button>
            */}
        </div>
      </div>;
}
export default Sidebar;