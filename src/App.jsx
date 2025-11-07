import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [darkMode,setDarkMode]=useState(false)
  useEffect(()=>{ const saved = localStorage.getItem('darkMode')==='true'; setDarkMode(saved)},[])
  useEffect(()=>{ localStorage.setItem('darkMode', darkMode); if(darkMode) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark') },[darkMode])
  return (
    <div className={darkMode? 'dark' : ''}>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main id="main" className="max-w-[var(--max-w)] mx-auto pt-24 px-4">
          <Hero />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
