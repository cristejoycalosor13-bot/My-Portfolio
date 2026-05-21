import RoseBud from '../../assets/svgs/RoseBud'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-rose-900 to-rose-800 text-rose-100 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <RoseBud size={16} className="opacity-80" />
          <span className="font-display italic text-rose-200 text-xl">Criste Joy Calosor</span>
          <RoseBud size={16} className="opacity-80" />
        </div>
        <p className="font-body text-rose-300 text-sm mb-5 italic">
          Graphic Designer ✦ Video Editor ✦ AI Creative
        </p>

        <div className="flex justify-center gap-5 mb-6">
          <a
            href="tel:09298415211"
            className="flex items-center gap-1.5 text-rose-300 hover:text-gold-DEFAULT transition-colors text-sm font-body"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            0929-841-5211
          </a>
          <a
            href="mailto:cristejoycalosor13@gmail.com"
            className="flex items-center gap-1.5 text-rose-300 hover:text-gold-DEFAULT transition-colors text-sm font-body"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            cristejoycalosor13@gmail.com
          </a>
        </div>

        <div className="w-24 h-px bg-rose-700 mx-auto mb-4" />
        <p className="font-body text-rose-400 text-xs">
          © {year} Criste Joy Calosor · Made with love from Cebu, Philippines
        </p>
      </div>
    </footer>
  )
}
