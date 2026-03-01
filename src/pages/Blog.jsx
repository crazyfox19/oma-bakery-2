import { useState } from 'react'
import FilterPill from '../components/FilterPill'
import BlogCard from '../components/BlogCard'
import NewsletterSection from '../components/NewsletterSection'
import WaveDivider from '../components/WaveDivider'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
import blogPosts from '../data/blogPosts'

const filters = ['TIPS & TRICK', 'NEW ARTICLE', 'PROMOTIONS']

export default function Blog() {
  const [active, setActive] = useState('TIPS & TRICK')
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / 3)
  const paginatedPosts = blogPosts.slice((currentPage - 1) * 3, (currentPage - 1) * 3 + 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-lavender py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Cake Journal
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">
            Explore baking tips, new recipes, and the latest from our kitchen.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <FilterPill
                key={f}
                label={f}
                active={active === f}
                onClick={() => setActive(f)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="transition-opacity duration-300">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
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

      {/* Newsletter */}
      <NewsletterSection />

      <WaveDivider topColor="#FFFBEB" bottomColor="#581C87" />
      <Footer />
    </>
  )
}
