export default function ScallopBottom({ bgBelow = '#FFFBEB', purple = '#8B5CF6' }) {
  return (
    <div style={{ backgroundColor: bgBelow }} className="w-full">
      <svg
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ marginTop: '-1px' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L0,25
            C40,25 60,48 120,48
            C180,48 200,28 260,28
            C320,28 350,50 430,50
            C510,50 520,28 580,28
            C640,28 680,48 760,48
            C840,48 860,25 920,25
            C980,25 1020,46 1100,46
            C1180,46 1200,28 1260,28
            C1320,28 1360,48 1440,48
            L1440,0 Z"
          fill={purple}
        />
      </svg>
    </div>
  )
}
