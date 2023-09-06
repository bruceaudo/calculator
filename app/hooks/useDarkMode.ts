import { useContext } from "react"
import { DarkModeContext } from "../contexts/Darkmode"

export const useDarkmode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    console.log('useDarkmode must be used within a DarkModeContextProvider')
  }
  return context
}
