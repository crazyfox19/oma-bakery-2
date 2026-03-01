export default function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
        active
          ? 'bg-primary text-white'
          : 'bg-white text-gray-600 hover:bg-lavender'
      }`}
    >
      {label}
    </button>
  )
}
