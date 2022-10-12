import { useState } from 'react'

export const useSettings = () => {
  const [isAutoMode, setIsAutoMode] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleAutoMode = () => setIsAutoMode(previousState => !previousState)
  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState)
  return {
    isAutoMode,
    toggleAutoMode,
    isDarkMode,
    toggleDarkMode,
  }
}