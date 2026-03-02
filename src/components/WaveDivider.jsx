export default function WaveDivider({ topColor = '#FFFBEB', bottomColor = '#EDE9FE' }) {
  return (
    <div className="w-full" style={{ backgroundColor: bottomColor }}>
      <svg
        viewBox="0 0 1440 55"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ marginBottom: '-1px' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L0,25 C40,25 60,48 120,48 C180,48 200,28 260,28 C320,28 350,52 430,52 C510,52 520,30 580,30 C640,30 680,50 760,50 C840,50 860,25 920,25 C980,25 1020,46 1100,46 C1180,46 1200,30 1260,30 C1320,30 1360,52 1440,52 L1440,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  )
}
