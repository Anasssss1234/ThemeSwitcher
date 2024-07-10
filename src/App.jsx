import React from 'react'
import Card from './Card'
import { ThemeProvider } from './ThemeContext'
function App() {
  return (
    <div>
      <>
      <ThemeProvider>
      <Card/>
      </ThemeProvider>
    
      </>
      
   </div>
  )
}

export default App
