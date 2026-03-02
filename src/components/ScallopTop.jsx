export default function ScallopTop({ bgAbove = '#FFFBEB', purple = '#8B5CF6' }) {
  return (
    <div style={{ backgroundColor: bgAbove }} className="w-full">
      <svg
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ marginBottom: '-1px' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50
            C50,50 80,15 150,15
            C220,15 240,50 310,50
            C380,50 400,15 480,15
            C560,15 580,50 650,50
            C720,50 750,15 830,15
            C910,15 930,50 1000,50
            C1070,50 1100,15 1180,15
            C1260,15 1280,50 1340,50
            C1400,50 1420,20 1440,20
            L1440,50 L0,50 Z"
          fill={purple}
        />
      </svg>
    </div>
  )
}
