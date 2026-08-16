import React, { useState } from 'react'

  const NAV_LINKS = [
  { id: 1, name: 'About me', href: '#about' },
  { id: 2, name: 'Skills', href: '#skills' },
  { id: 3, name: 'Projects', href: '#projects' },
];

function Navbar() {
    const [open, setOpen] = useState(false);
  
    
  return (  
    <nav className="flex justify-between items-center p-4 bg-transparent text-black px-20">

      <section className="logo">
        <h2 className="text-xl font-bold">ZM</h2>
      </section>

      <section className="links space-x-10 hidden md:flex" >
        {NAV_LINKS.map(link => (
          <a key={link.id} href={link.href} className="p-1">
            {link.name}
          </a>
        ))}
        <a href="#contact" className="bg-black text-white rounded-4xl px-2 item-center p-1" >
          Contact me
        </a>
      </section>
      <button className="md:hidden text-2xl hover:text-blue-500 hover:cursor-pointer" aria-label='Toggle navigation' onClick={() => setOpen(prev => !prev)}>
        {open ? '✕' : '☰'}
      </button>
        {open && (
          <section className="md:hidden absolute top-13 right-0 p-4 transition duration-300 ease-in-out w-40 rounded-xl text-center">
            <ul>
                {NAV_LINKS.map(link => (
                    <li key={link.id} className="mb-2">
                        <a href={link.href} className="block p-2 text-black px-2 text-center p-1 w-30">
                            {link.name}
                        </a>
                    </li>
                ))}
              <li><a href="#contact" className="block p-2 bg-black text-white rounded-4xl px-2 text-center p-1 w-30 ">
                Contact me
              </a></li>
            </ul>
          </section>
        )}
    </nav>
  )
}

export default Navbar
