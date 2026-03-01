export default function TagPill({ label, variant = 'filled' }) {
  const base = 'rounded-full px-4 py-1.5 text-sm font-medium inline-block'
  const styles =
    variant === 'filled'
      ? 'bg-primary text-white'
      : 'border-2 border-primary text-primary'

  return <span className={`${base} ${styles}`}>{label}</span>
}
