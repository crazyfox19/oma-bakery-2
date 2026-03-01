export default function StepCard({ number, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 font-playfair">
        {number}
      </div>
      <h3 className="font-playfair font-bold text-lg text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
