import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/products', label: 'PRODUCTS' },
  { to: '/blog', label: 'BLOG' },
  { to: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const handleClick = (to) => {
    if (pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-cream shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-pacifico text-2xl text-primary">
            Oma Bakery
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => handleClick(to)}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors pb-1 ${
                    isActive
                      ? 'text-primary border-b-2 border-accent'
                      : 'text-gray-600 hover:text-primary'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-primary transition-colors">
              <ShoppingBag size={20} />
            </button>
            <button className="border-2 border-primary text-primary px-5 py-1.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">
              Register
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-gray-100 px-4 pb-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => { handleClick(to); setOpen(false) }}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-600'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex items-center gap-4 pt-3 border-t border-gray-100 mt-2">
            <button className="p-2 text-gray-600">
              <ShoppingBag size={20} />
            </button>
            <button className="border-2 border-primary text-primary px-5 py-1.5 rounded-full text-sm font-medium">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
