import { useState } from 'react'
const list = [
  {id:1,name:'cp2-front',link:'https://github.com/alanavieira25/cp2-front',desc:'Projeto front-end com HTML/CSS'},
  {id:2,name:'materia_py',link:'https://github.com/alanavieira25/materia_py',desc:'Scripts e exercícios em Python'},
  {id:3,name:'webdev',link:'https://github.com/alanavieira25/webdev',desc:'Atividades de web development'}
]
export default function Projects(){
  const [q,setQ]=useState('')
  const filtered = list.filter(p=>p.name.toLowerCase().includes(q.toLowerCase()))
  return (
    <section id="projects" className="p-8 mt-6">
      <h2 className="text-2xl font-bold mb-4">Projetos</h2>
      <div className="flex gap-4 items-center mb-4">
        <input aria-label="Pesquisar projetos" value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar..." className="border p-2 rounded w-full max-w-md" />
        <p className="text-sm opacity-70">{filtered.length} encontrados</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map(p=> (
          <a key={p.id} href={p.link} target="_blank" rel="noreferrer" className="card hover:scale-105 hover:shadow-lg transition">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm mt-2 opacity-80">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
