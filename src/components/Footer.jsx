export default function Footer(){
  return (
    <footer className="text-center p-6 mt-10 border-t dark:border-neutral-800">
      <p>© {new Date().getFullYear()} — Alana Vieira Batista</p>
      <div className="mt-3">
        <a href="https://github.com/alanavieira25" target="_blank" rel="noreferrer" className="hover:underline mr-4">GitHub</a>
        <a href="https://www.linkedin.com/in/alana-vieira-batista-377b85334/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
      </div>
    </footer>
  )
}
