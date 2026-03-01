export default function Sparkle({
  color = '#F59E0B',
  size = 24,
  rotation = 0,
  className = '',
  symbol = '✦',
}) {
  return (
    <span
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        color,
        fontSize: size,
        transform: `rotate(${rotation}deg)`,
        lineHeight: 1,
      }}
    >
      {symbol}
    </span>
  )
}
