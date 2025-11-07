export default function Hero(){
  return (
    <section id="hero" className="text-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold">Alana Vieira Batista</h1>
      <p className="mt-4 max-w-3xl mx-auto opacity-80">Estudante de Desenvolvimento — focada em práticas web e programação com Python. Buscando oportunidades para aprender e contribuir.</p>
      <div className="mt-6 flex justify-center gap-3">
        <a href="https://github.com/alanavieira25" target="_blank" rel="noreferrer" className="btn-neutral focus-ring">Ver GitHub</a>
        <a href="https://www.linkedin.com/in/alana-vieira-batista-377b85334/" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg hover:scale-105 transition">LinkedIn</a>
      </div>
    </section>
  )
}
