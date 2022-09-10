import './App.css';
import React, { useState } from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import useLocalStorage from 'use-local-storage';

const App = ({CurrentTheme, changeTheTheme}) => {
  const [theme, setTheme] = useLocalStorage("theme", "light")

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    // console.log(theme)
  }

  return (
    <div className="app" data-theme={theme}
    >
      <Navbar CurrentTheme={theme} changeTheTheme={switchTheme}/>
      <Home/>
      <Portfolio/>
      <About/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default App
