import WaveDivider from '../components/WaveDivider'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <section className="bg-lavender py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 text-center mb-10">
              Contact Us
            </h1>

            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white resize-none"
              />
              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-xl font-medium hover:bg-accent-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#F3E8FF" bottomColor="#581C87" />
      <Footer />
    </>
  )
}
