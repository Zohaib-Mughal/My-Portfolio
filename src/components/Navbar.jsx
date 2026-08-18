import { useState, useRef, useEffect } from 'react';
import logo from '../../public/favicon.svg';

const NAV_LINKS = [
  { id: 1, name: 'About me', href: '#about' },
  { id: 2, name: 'Skills', href: '#skills' },
  { id: 3, name: 'Projects', href: '#projects' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 text-white
        transition-colors duration-300 md:px-20
        ${scrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}
    >
      <img src={logo} alt="Logo" className="h-8 w-8" />

      <section className="hidden items-center space-x-10 md:flex">
        {NAV_LINKS.map(link => (
          <a key={link.id} href={link.href} className="p-1 hover:opacity-70 transition-opacity">
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2 text-xs font-bold tracking-wider text-black hover:bg-gray-200 transition-colors"
        >
          CONTACT ME
        </a>
      </section>

      <button
        className="text-2xl md:hidden hover:opacity-70 transition-opacity"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <section className="absolute right-4 top-16 w-48 rounded-xl bg-white p-4 text-center text-black shadow-xl md:hidden">
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.id} className="mb-2">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg p-2 hover:bg-gray-100"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-black p-2 text-xs font-bold tracking-wider text-white hover:bg-gray-800"
              >
                CONTACT ME
              </a>
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
}

export default Navbar;