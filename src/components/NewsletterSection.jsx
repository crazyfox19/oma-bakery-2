export default function NewsletterSection() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/danish-pastry.jpg"
              alt="Danish pastry"
              className="rounded-2xl w-full h-48 object-cover"
            />
            <img
              src="/images/bakery-display.jpg"
              alt="Bakery display"
              className="rounded-2xl w-full h-48 object-cover mt-8"
            />
          </div>

          {/* Newsletter form */}
          <div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-500 mb-6">
              Subscribe to our newsletter and get the latest baking tips, new
              products, and special offers delivered to your inbox.
            </p>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <button
                type="submit"
                className="bg-accent text-white px-6 py-3 rounded-xl font-medium hover:bg-accent-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
