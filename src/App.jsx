import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Banner from './components/banner/banner'



function App() {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
     
    </div>
  )
}

export default App
