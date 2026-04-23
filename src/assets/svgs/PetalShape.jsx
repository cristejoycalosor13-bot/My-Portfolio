export default function PetalShape({ fill = '#fce4ec' }) {
  return (
    <svg viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path
        d="M20 3 C28 10, 37 22, 37 36 C37 50, 29 57, 20 57 C11 57, 3 50, 3 36 C3 22, 12 10, 20 3Z"
        fill={fill}
        opacity="0.85"
      />
    </svg>
  )
}
