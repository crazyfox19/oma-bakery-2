import { Link } from 'react-router-dom'

export default function BlogCard({ image, title, slug }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="font-playfair font-bold text-gray-800 mb-3">{title}</h3>
        <Link
          to={`/blog/${slug}`}
          className="text-primary font-medium text-sm hover:text-accent transition-colors"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  )
}
