export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 3 Hexagons in a row, representing the legacy structure but modern */}
      {/* Hexagon 1 */}
      <path
        d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z"
        stroke="#DC2626"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 9.5L29 14.5V25.5L20 30.5L11 25.5V14.5L20 9.5Z"
        fill="#DC2626"
      />
      {/* Hexagon 2 */}
      <path
        d="M48 5L61 12.5V27.5L48 35L35 27.5V12.5L48 5Z"
        stroke="#DC2626"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M48 9.5L57 14.5V25.5L48 30.5L39 25.5V14.5L48 9.5Z"
        fill="#DC2626"
      />
      {/* Hexagon 3 */}
      <path
        d="M76 5L89 12.5V27.5L76 35L63 27.5V12.5L76 5Z"
        stroke="#DC2626"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M76 9.5L85 14.5V25.5L76 30.5L67 25.5V14.5L76 9.5Z"
        fill="#DC2626"
      />
      {/* Small Gold Diamond accents between hexagons */}
      <path d="M34 20L36.5 17L39 20L36.5 23L34 20Z" fill="#D4AF37" />
      <path d="M62 20L64.5 17L67 20L64.5 23L62 20Z" fill="#D4AF37" />
    </svg>
  );
}
