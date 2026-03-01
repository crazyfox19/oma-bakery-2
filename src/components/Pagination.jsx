import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {/* Left arrow */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirst}
        className={`w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center transition-colors ${
          isFirst
            ? 'opacity-40 cursor-not-allowed pointer-events-none text-primary'
            : 'text-primary hover:bg-lilac'
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Desktop: individual page numbers */}
      <div className="hidden md:flex items-center gap-2">
        {pages.map((n) => (
          <button
            key={n}
            onClick={() => onPageChange(n)}
            className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
              n === currentPage
                ? 'bg-primary text-white'
                : 'border-2 border-primary text-primary bg-transparent hover:bg-lilac'
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Mobile: "1 / 3" format */}
      <span className="md:hidden text-sm font-medium text-gray-700">
        {currentPage} / {totalPages}
      </span>

      {/* Right arrow */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLast}
        className={`w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center transition-colors ${
          isLast
            ? 'opacity-40 cursor-not-allowed pointer-events-none text-primary'
            : 'text-primary hover:bg-lilac'
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
