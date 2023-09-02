"use client"
import { SetStateAction, useState } from "react"
import { createContext } from "react"


export interface DarkMode {
    darkMode: boolean
    setDarkMode: React.Dispatch<SetStateAction<boolean>>
}

export interface DarkModeContextProps {
    darkMode: DarkMode
    setDarkMode: React.Dispatch<SetStateAction<DarkMode>>
}

export const defaultMode: DarkMode = {
    darkMode: false,
    setDarkMode: () => {}
}

export const DarkModeContext = createContext<DarkModeContextProps>({
    darkMode: defaultMode,
    setDarkMode: () => { }
})

export interface Props {
    children: React.ReactNode
}

export const DarkModeContextProvider = ({ children }: Props) => {
    const [darkMode, setDarkMode] = useState(defaultMode)

    return <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        {children}
    </DarkModeContext.Provider>
}