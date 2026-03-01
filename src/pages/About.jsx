import WaveDivider from '../components/WaveDivider'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <section className="bg-lavender py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              About Us
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Oma Bakery was founded with a simple mission — to bring the warmth
              and love of homemade baking to everyone. Inspired by traditional
              family recipes passed down through generations, every product we
              make carries the heart and soul of artisan craftsmanship. From our
              kitchen to your table, we promise quality, freshness, and a taste
              that feels like home.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#F3E8FF" bottomColor="#581C87" />
      <Footer />
    </>
  )
}
