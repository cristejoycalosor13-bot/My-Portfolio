export default function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`bg-white/70 backdrop-blur-md border border-white/80 shadow-glass rounded-2xl ${className}`}
    >
      {children}
    </div>
  )
}
