export default function WaveDivider({ topColor = '#FFFBEB', bottomColor = '#EDE9FE' }) {
  return (
    <div className="relative w-full leading-none -mt-px" style={{ color: bottomColor }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-[60px] sm:h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L0,40
             Q60,70 120,40
             Q180,10 240,40
             Q300,70 360,40
             Q420,10 480,40
             Q540,70 600,40
             Q660,10 720,40
             Q780,70 840,40
             Q900,10 960,40
             Q1020,70 1080,40
             Q1140,10 1200,40
             Q1260,70 1320,40
             Q1380,10 1440,40
             L1440,0 Z"
          fill={topColor}
        />
        <path
          d="M0,40
             Q60,70 120,40
             Q180,10 240,40
             Q300,70 360,40
             Q420,10 480,40
             Q540,70 600,40
             Q660,10 720,40
             Q780,70 840,40
             Q900,10 960,40
             Q1020,70 1080,40
             Q1140,10 1200,40
             Q1260,70 1320,40
             Q1380,10 1440,40
             L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}
