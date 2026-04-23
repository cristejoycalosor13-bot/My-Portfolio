export default function FloralCorner({ size = 150, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Green leaves */}
      <ellipse cx="28" cy="88" rx="26" ry="11" fill="#bbf7d0" opacity="0.7" transform="rotate(-35 28 88)" />
      <ellipse cx="58" cy="58" rx="24" ry="10" fill="#86efac" opacity="0.65" transform="rotate(10 58 58)" />
      <ellipse cx="88" cy="28" rx="22" ry="9" fill="#bbf7d0" opacity="0.65" transform="rotate(55 88 28)" />
      <ellipse cx="15" cy="60" rx="18" ry="8" fill="#86efac" opacity="0.5" transform="rotate(-55 15 60)" />

      {/* Main rose cluster */}
      <circle cx="52" cy="52" r="22" fill="#fce7f3" opacity="0.85" />
      <circle cx="72" cy="42" r="18" fill="#fbcfe8" opacity="0.8" />
      <circle cx="42" cy="72" r="18" fill="#fbcfe8" opacity="0.75" />
      <circle cx="63" cy="67" r="15" fill="#f9a8d4" opacity="0.8" />
      <circle cx="57" cy="54" r="11" fill="#ec4899" opacity="0.6" />
      <circle cx="52" cy="52" r="6" fill="#db2777" opacity="0.7" />

      {/* Small accent buds */}
      <circle cx="130" cy="28" r="11" fill="#fde68a" opacity="0.75" />
      <circle cx="142" cy="18" r="8" fill="#fbbf24" opacity="0.65" />
      <circle cx="28" cy="130" r="9" fill="#fde68a" opacity="0.65" />
      <circle cx="18" cy="142" r="6" fill="#fbbf24" opacity="0.55" />

      {/* Connecting stems */}
      <path d="M57 75 Q82 68 92 28" stroke="#86efac" strokeWidth="1.8" fill="none" opacity="0.65" />
      <path d="M62 70 Q40 102 28 132" stroke="#86efac" strokeWidth="1.4" fill="none" opacity="0.5" />
      <path d="M75 45 Q112 35 132 28" stroke="#a7f3d0" strokeWidth="1.2" fill="none" opacity="0.4" />

      {/* Tiny petal dots */}
      <circle cx="100" cy="18" r="4" fill="#f9a8d4" opacity="0.5" />
      <circle cx="18" cy="100" r="3.5" fill="#f9a8d4" opacity="0.5" />
    </svg>
  )
}
