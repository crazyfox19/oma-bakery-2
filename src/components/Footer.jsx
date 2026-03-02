import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Products', to: '/products' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Baking Tips', to: '/blog' },
      { label: 'Recipes', to: '/blog' },
      { label: 'FAQ', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
      { label: 'Cookie Policy', to: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#581C87] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & description */}
          <div className="col-span-2">
            <Link to="/" className="font-pacifico text-2xl text-[#F59E0B]">
              Oma Bakery
            </Link>
            <p className="text-purple-200 mt-4 text-sm leading-relaxed max-w-xs">
              Bringing joy to every occasion with handcrafted baked goods made
              with love and the finest ingredients.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-4 text-white">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-purple-200 text-sm hover:text-[#F59E0B] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-purple-700 pt-8 text-center">
          <p className="text-purple-300 text-sm">
            &copy; {new Date().getFullYear()} Oma Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
