import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import WaveDivider from '../components/WaveDivider'
import ScallopTop from '../components/ScallopTop'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
import products from '../data/products'

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(products.length / 3)
  const paginatedProducts = products.slice((currentPage - 1) * 3, (currentPage - 1) * 3 + 3)

  return (
    <>
      <section className="bg-lavender py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Our Products
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto">
              Explore our freshly baked collection
            </p>
          </div>

          <div className="transition-opacity duration-300">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      <ScallopTop bgAbove="#F3E8FF" purple="#581C87" />
      <Footer />
    </>
  )
}
