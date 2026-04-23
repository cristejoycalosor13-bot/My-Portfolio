export default function RoseBud({ size = 14, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="3.5" fill="#f9a8d4" />
      <circle cx="8" cy="5" r="3" fill="#f472b6" />
      <circle cx="11" cy="9.5" r="2.8" fill="#fbd0e7" />
      <circle cx="5" cy="9.5" r="2.8" fill="#fbd0e7" />
      <circle cx="8" cy="8" r="2" fill="#ec4899" />
    </svg>
  )
}
