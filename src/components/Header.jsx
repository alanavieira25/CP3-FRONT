import { Sun, Moon } from 'lucide-react'
export default function Header({darkMode,setDarkMode}){
  return (
    <header className="fixed inset-x-0 top-0 bg-white/90 dark:bg-neutral-900/80 backdrop-blur z-30 border-b">
      <div className="max-w-[var(--max-w)] mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-200 flex items-center justify-center text-white dark:text-black font-bold">A</div>
          <span className="font-semibold">Alana Vieira</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#hero" className="hover:text-neutral-600 dark:hover:text-neutral-300 focus-ring">Sobre</a>
          <a href="#projects" className="hover:text-neutral-600 dark:hover:text-neutral-300 focus-ring">Projetos</a>
          <a href="#contact" className="hover:text-neutral-600 dark:hover:text-neutral-300 focus-ring">Contato</a>
          <a href="https://github.com/alanavieira25" target="_blank" rel="noreferrer" className="hover:text-neutral-600 dark:hover:text-neutral-300">GitHub</a>
          <button onClick={()=>setDarkMode(!darkMode)} aria-label="Alternar tema" className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            {darkMode? <Sun/> : <Moon/>}
          </button>
        </nav>
      </div>
    </header>
  )
}
