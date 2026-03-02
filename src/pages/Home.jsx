import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import TestimonialCard from '../components/TestimonialCard'
import WaveDivider from '../components/WaveDivider'
import ScallopTop from '../components/ScallopTop'
import Sparkle from '../components/Sparkle'
import TagPill from '../components/TagPill'
import ProductCard from '../components/ProductCard'
import NewsletterSection from '../components/NewsletterSection'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
import products from '../data/products'

const testimonials = [
  {
    text: 'The cakes from Oma Bakery are absolutely divine! Every bite feels like a warm hug from grandma.',
    author: 'Mike Johnson',
  },
  {
    text: "Best bakery in town! Their croissants are flaky, buttery perfection. I'm a customer for life.",
    author: 'Sarah Williams',
  },
  {
    text: 'Ordered a custom birthday cake and it exceeded all expectations. Beautiful and delicious!',
    author: 'David Chen',
  },
]

const steps = [
  { number: 1, title: 'Choose', description: 'Pick your favorite cake flavor and design.' },
  { number: 2, title: 'Customize', description: 'Add personal touches and special requests.' },
  { number: 3, title: 'Order', description: 'Place and pay your order via online.' },
  { number: 4, title: 'Deliver', description: 'Your cake delivered fresh to your door.' },
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(products.length / 3)
  const paginatedProducts = products.slice((currentPage - 1) * 3, (currentPage - 1) * 3 + 3)

  return (
    <>
      {/* ===== Section 1: Testimonials Hero ===== */}
      <section className="bg-mint py-16 sm:py-24 relative overflow-hidden">
        <Sparkle className="top-10 left-[10%]" color="#F59E0B" size={28} rotation={15} />
        <Sparkle className="top-20 right-[15%]" color="#7C3AED" size={20} rotation={-20} />
        <Sparkle className="bottom-16 left-[20%]" color="#F59E0B" size={16} rotation={45} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Hear from our happy customers who keep coming back for more.
            </p>
          </div>

          {/* Laptop mockup */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-gray-800 rounded-xl border-8 border-gray-800 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-700">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <img
                src="/images/bakery-display.jpg"
                alt="Oma Bakery Display"
                className="w-full aspect-video object-cover"
              />
            </div>

            {/* Floating testimonial cards */}
            <TestimonialCard
              text={testimonials[0].text}
              author={testimonials[0].author}
              className="hidden sm:block absolute -left-24 top-12 rotate-[-3deg] z-10"
            />
            <TestimonialCard
              text={testimonials[1].text}
              author={testimonials[1].author}
              className="hidden sm:block absolute -right-24 bottom-8 rotate-[2deg] z-10"
            />
          </div>

          {/* Mobile testimonials */}
          <div className="sm:hidden mt-8 space-y-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} text={t.text} author={t.author} />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider topColor="#ECFDF5" bottomColor="#F3E8FF" />

      {/* ===== Section 2: Hero with Product ===== */}
      <section className="bg-lavender py-16 sm:py-24 relative overflow-hidden">
        <Sparkle className="top-8 right-[10%]" color="#F59E0B" size={24} rotation={30} />
        <Sparkle className="bottom-12 left-[8%]" color="#7C3AED" size={18} rotation={-15} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - text */}
            <div>
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Delight in every bites!
              </h1>
              <p className="text-gray-500 text-lg mb-8 max-w-md">
                Handcrafted with love, our baked goods bring warmth and joy to
                every moment. From classic breads to indulgent pastries, discover
                the taste of tradition.
              </p>
              <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wider hover:bg-accent-light transition-colors shadow-lg shadow-accent/25">
                SHOP NOW
              </button>
            </div>

            {/* Right - circular product */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 bg-lilac rounded-full overflow-hidden">
                  <img
                    src="/images/products/croissant.jpg"
                    alt="Croissant"
                    className="w-full h-full object-cover animate-[float_3s_ease-in-out_infinite]"
                  />
                </div>
                {/* Navigation arrows */}
                <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </button>
                {/* Product label */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md">
                  <span className="font-playfair font-bold text-gray-800">Fresh Croissant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#F3E8FF" bottomColor="#FFFBEB" />

      {/* ===== Section 3: Best Choice ===== */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - text */}
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                The Best Choice for Your Special Moments
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                At Oma Bakery, we believe every celebration deserves the perfect
                treat. Our expert bakers combine time-honored recipes with
                creative innovation to deliver baked goods that look as amazing
                as they taste.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                  <Plus size={20} />
                </div>
                <span className="font-medium text-gray-700">Why choose us?</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <TagPill label="Quality Ingredients" variant="filled" />
                <TagPill label="Personalized Designs" variant="filled" />
                <TagPill label="On-Time Delivery" variant="filled" />
                <TagPill label="Affordable Prices" variant="filled" />
                <TagPill label="Values" variant="outlined" />
              </div>
            </div>

            {/* Right - image bleeding off edge */}
            <div className="relative -mr-4 sm:-mr-6 lg:-mr-8">
              <img
                src="/images/products/cupcakes.jpg"
                alt="Cupcakes"
                className="w-full h-80 sm:h-[28rem] object-cover rounded-l-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#FFFBEB" bottomColor="#EDE9FE" />

      {/* ===== Section 4: Our Signature ===== */}
      <section className="bg-lilac py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Our Signature Collection
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Discover our most loved baked goods, crafted to perfection.
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

      <WaveDivider topColor="#EDE9FE" bottomColor="#F3E8FF" />

      {/* ===== Section 5: How to Order ===== */}
      <section className="bg-lavender py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-primary text-center mb-16">
            How to Order
          </h2>

          {/* Desktop zigzag pill layout */}
          <div className="hidden md:flex items-start justify-center gap-4 max-w-5xl mx-auto">
            {steps.map((step, i) => {
              const isTop = i % 2 === 0
              return isTop ? (
                <div key={step.number} className="flex flex-col items-center">
                  <div className="w-56 h-80 rounded-[100px] bg-cream flex flex-col items-center justify-center px-8 text-center">
                    <h3 className="font-playfair font-bold text-lg text-primary">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">{step.description}</p>
                    <div className="w-[2px] h-10 bg-gray-300 mt-5" />
                  </div>
                  <div className="w-20 h-20 rounded-full bg-primary text-white font-playfair font-bold text-3xl flex items-center justify-center shadow-lg z-10 -mt-4">
                    {step.number}
                  </div>
                </div>
              ) : (
                <div key={step.number} className="flex flex-col items-center mt-28">
                  <div className="w-20 h-20 rounded-full bg-primary text-white font-playfair font-bold text-3xl flex items-center justify-center shadow-lg z-10 -mb-4">
                    {step.number}
                  </div>
                  <div className="w-56 h-80 rounded-[100px] bg-cream flex flex-col items-center justify-center px-8 text-center">
                    <h3 className="font-playfair font-bold text-lg text-primary">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">{step.description}</p>
                    <div className="w-[2px] h-10 bg-gray-300 mt-5" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile vertical stack */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary text-white font-playfair font-bold text-3xl flex items-center justify-center shadow-lg z-10 -mb-4">
                  {step.number}
                </div>
                <div className="w-full max-w-[240px] h-80 rounded-[100px] bg-cream flex flex-col items-center justify-center px-8 text-center">
                  <h3 className="font-playfair font-bold text-lg text-primary">{step.title}</h3>
                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">{step.description}</p>
                  <div className="w-[2px] h-10 bg-gray-300 mt-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider topColor="#F3E8FF" bottomColor="#FFFBEB" />

      {/* Newsletter */}
      <NewsletterSection />

      <ScallopTop bgAbove="#FFFBEB" purple="#581C87" />
      <Footer />

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </>
  )
}
