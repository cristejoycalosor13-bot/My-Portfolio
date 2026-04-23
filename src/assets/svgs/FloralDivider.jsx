export default function FloralDivider({ className = '' }) {
  return (
    <svg
      width="260"
      height="28"
      viewBox="0 0 260 28"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Center rose */}
      <circle cx="130" cy="14" r="7" fill="#fce7f3" />
      <circle cx="130" cy="8"  r="5" fill="#f9a8d4" />
      <circle cx="136" cy="16" r="4.5" fill="#fbd0e7" />
      <circle cx="124" cy="16" r="4.5" fill="#fbd0e7" />
      <circle cx="130" cy="19" r="4" fill="#f9a8d4" />
      <circle cx="130" cy="14" r="3" fill="#ec4899" />

      {/* Left vine */}
      <path d="M122 14 Q90 11 45 14" stroke="#f9a8d4" strokeWidth="1.5" fill="none" opacity="0.8" />
      <path d="M88 14 Q83 9 78 11"  stroke="#f9a8d4" strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="45" cy="14" r="3.5" fill="#f9a8d4" opacity="0.8" />
      <circle cx="78" cy="11" r="3"   fill="#fde68a" opacity="0.85" />
      <circle cx="60" cy="13" r="2"   fill="#fbd0e7" opacity="0.6" />

      {/* Right vine */}
      <path d="M138 14 Q170 11 215 14" stroke="#f9a8d4" strokeWidth="1.5" fill="none" opacity="0.8" />
      <path d="M172 14 Q177 9 182 11"  stroke="#f9a8d4" strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="215" cy="14" r="3.5" fill="#f9a8d4" opacity="0.8" />
      <circle cx="182" cy="11" r="3"   fill="#fde68a" opacity="0.85" />
      <circle cx="200" cy="13" r="2"   fill="#fbd0e7" opacity="0.6" />
    </svg>
  )
}
