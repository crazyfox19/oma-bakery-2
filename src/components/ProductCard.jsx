import { ShoppingBag } from 'lucide-react'

export default function ProductCard({ image, name, price }) {
  return (
    <div className="bg-lilac rounded-2xl overflow-hidden group">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-accent text-white font-poppins font-bold text-sm px-3 py-1 rounded-full shadow-md">
          ${price}
        </span>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-playfair font-bold text-gray-800">{name}</h3>
          <p className="text-accent font-semibold">${price}</p>
        </div>
        <button className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition-colors">
          <ShoppingBag size={18} />
        </button>
      </div>
    </div>
  )
}
