"use client"

import { Input } from "../ui/input"




export default function SwitchInput({isChecked, onToggle}: {
 isChecked: 'triangular' | 'trapezoidal'
 onToggle: () => void;
}) {

    return(
        <>
        <label className="shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
            <Input type="checkbox" className="sr-only" checked={isChecked === 'triangular'} onChange={onToggle}/>
        
         
          <span  className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked === 'triangular' ? 'text-primary bg-[#f4f7ff]' : 'text-body-color' }`}>
                Triangular
          </span>
          <span className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${isChecked === 'trapezoidal' ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'}`}>
                Trapezoidal
          </span>
        </label> 
        </>
    )
}