import React from 'react'
import Background from './componenets/Background'
import Foreground from './componenets/Foreground'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App
