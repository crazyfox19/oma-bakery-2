export default function TestimonialCard({ text, author, className = '' }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 max-w-xs ${className}`}
    >
      <p className="text-gray-600 text-sm leading-relaxed mb-4">"{text}"</p>
      <p className="font-semibold text-primary text-sm">— {author}</p>
    </div>
  )
}
