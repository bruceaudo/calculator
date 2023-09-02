"use client"
import { useContext } from 'react'
import { DarkModeContext } from '../contexts/Darkmode'

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    console.log('useDarkMode must be used within a DarkModeContextProvider')
  }
  return context
}
