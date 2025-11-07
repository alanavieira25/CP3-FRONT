export default function Contact(){
  return (
    <section id="contact" className="p-10">
      <h2 className="text-2xl font-bold mb-4">Contato</h2>
      <form className="max-w-md grid gap-3" onSubmit={e=>{e.preventDefault(); alert('Mensagem enviada (simulada)')}}>
        <input className="border p-2 rounded" type="text" placeholder="Nome" required />
        <input className="border p-2 rounded" type="email" placeholder="Email" required />
        <textarea className="border p-2 rounded" rows="4" placeholder="Mensagem" required></textarea>
        <button className="btn-neutral mt-2" type="submit">Enviar</button>
      </form>
    </section>
  )
}
