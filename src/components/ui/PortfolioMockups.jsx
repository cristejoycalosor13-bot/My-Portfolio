/* Six realistic portfolio mockup components */

export function BloomBoutiquePost() {
  return (
    <div className="bg-white w-full h-full flex flex-col font-body text-gray-800 select-none">
      {/* Instagram header */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-100">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-300 flex items-center justify-center text-white text-xs font-bold shadow-sm">B</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold leading-tight">bloom.boutique.cebu</p>
          <p className="text-[10px] text-gray-400 leading-tight">Cebu City, Philippines</p>
        </div>
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
        </svg>
      </div>

      {/* Post image */}
      <div className="flex-1 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 flex items-center justify-center relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-2 right-2 w-16 h-16 rounded-full bg-rose-200 opacity-40 blur-xl" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-pink-200 opacity-50 blur-xl" />

        <div className="text-center z-10 px-4">
          <div className="flex justify-center gap-1 mb-2 text-2xl">🌸🌷🌸</div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-sm border border-rose-100">
            <p className="text-[10px] font-semibold text-rose-400 uppercase tracking-widest mb-0.5">New Arrivals</p>
            <h3 className="font-serif text-lg font-bold text-rose-700 leading-tight">Summer</h3>
            <h3 className="font-serif text-lg font-bold text-rose-700 leading-tight">Collection</h3>
            <div className="flex gap-1.5 justify-center mt-2">
              {['Floral','Elegant','Cebu'].map(t => (
                <span key={t} className="bg-rose-100 text-rose-500 text-[9px] font-medium px-1.5 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <p className="text-[10px] text-rose-400 mt-2 font-medium">Shop now — link in bio ✨</p>
        </div>
      </div>

      {/* Actions */}
      <div className="px-3 py-2">
        <div className="flex items-center gap-3 mb-1.5">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <svg className="w-5 h-5 text-gray-600 ml-auto" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </div>
        <p className="text-[11px] font-semibold">1,284 likes</p>
        <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-2">
          <span className="font-semibold text-gray-700">bloom.boutique.cebu</span> 🌸 New arrivals are here, anak! Fall in love with our Summer 2025 collection — handpicked, locally crafted, and made for the modern Cebuana. 💕 <span className="text-rose-400">#BloomBoutique #CebuFashion #SummerOOTD</span>
        </p>
      </div>
    </div>
  )
}

export function CafeDelaIslaPost() {
  return (
    <div className="bg-white w-full h-full flex flex-col font-body select-none">
      {/* Facebook post header */}
      <div className="flex items-start gap-2 p-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0">C</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-gray-800 leading-tight">Café dela Isla</p>
          <div className="flex items-center gap-1">
            <p className="text-[10px] text-gray-400">April 18 at 10:00 AM · </p>
            <svg className="w-2.5 h-2.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
        </div>
        <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
      </div>

      <p className="px-3 text-xs text-gray-700 mb-2 leading-relaxed">
        ☕ <span className="font-semibold">BOGO ALERT!</span> Buy 1 Get 1 on ALL espresso drinks every Saturday, 2–5 PM. Bring a friend and enjoy the Cebu sunset with us! 🌅
      </p>

      {/* Image area */}
      <div className="flex-1 bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full -translate-y-8 translate-x-8 opacity-50" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-amber-200 rounded-full translate-y-8 -translate-x-6 opacity-50" />
        <div className="z-10 text-center">
          <div className="text-5xl mb-2">☕</div>
          <div className="bg-white rounded-2xl px-5 py-3 shadow-md border border-amber-100 text-center">
            <p className="text-amber-800 font-black text-xl leading-tight">Buy 1</p>
            <p className="text-orange-400 font-bold text-xs uppercase tracking-widest">Get 1 FREE</p>
            <div className="w-full h-px bg-amber-100 my-2" />
            <p className="text-amber-700 text-[10px] font-medium">Every Saturday · 2 – 5 PM</p>
            <div className="mt-2 inline-block bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
              April only!
            </div>
          </div>
        </div>
      </div>

      {/* Reactions */}
      <div className="px-3 py-2 border-t border-gray-100">
        <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1.5">
          <span>😍❤️👍 <span className="font-medium">412</span></span>
          <span>38 comments · 91 shares</span>
        </div>
        <div className="flex justify-around border-t border-gray-100 pt-1.5">
          {['👍 Like','💬 Comment','↗ Share'].map(a => (
            <span key={a} className="text-[10px] font-semibold text-gray-500">{a}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function UCEventFlyer() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-5 select-none relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)' }}>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div className="text-center z-10">
        <p className="text-[9px] uppercase tracking-[0.2em] text-purple-300 font-medium">University of Cebu</p>
        <p className="text-[9px] uppercase tracking-[0.15em] text-purple-400">College of Information Technology</p>
        <div className="w-10 h-px bg-purple-500 mx-auto mt-1.5" />
      </div>

      <div className="text-center z-10 flex-1 flex flex-col items-center justify-center">
        <div className="text-5xl mb-3">🎤</div>
        <p className="text-[9px] uppercase tracking-[0.2em] text-purple-300 mb-1">Annual Tech Summit</p>
        <h2 className="text-white font-black text-3xl leading-none mb-0.5">TECH</h2>
        <h2 className="text-purple-300 font-black text-3xl leading-none mb-3">TALKS '25</h2>
        <p className="text-purple-200 text-[10px] mb-4 max-w-[160px] text-center leading-relaxed">
          Networking Night, Keynote Speakers & Live Demos
        </p>
        <div className="flex gap-2">
          {[
            { top: 'MAY 18', bot: 'Saturday' },
            { top: '6:00 PM', bot: 'onwards' },
            { top: 'UC Gym', bot: 'Main Campus' },
          ].map(({ top, bot }) => (
            <div key={top} className="bg-white/10 backdrop-blur-sm rounded-lg px-2.5 py-2 text-center border border-white/10">
              <p className="text-white font-bold text-xs">{top}</p>
              <p className="text-purple-300 text-[9px]">{bot}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="z-10 flex flex-col items-center gap-2">
        <div className="bg-yellow-400 text-yellow-900 text-[10px] font-black px-5 py-1.5 rounded-full tracking-wider shadow-lg">
          FREE ENTRANCE
        </div>
        <p className="text-purple-400 text-[9px]">Bring your student ID</p>
      </div>
    </div>
  )
}

export function AnalyticsReport() {
  const bars = [40, 65, 45, 80, 55, 92, 70]
  const days = ['M','T','W','T','F','S','S']

  return (
    <div className="bg-gray-50 w-full h-full p-4 flex flex-col gap-3 font-body select-none">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-xs text-gray-800">📊 Monthly Report</p>
          <p className="text-[10px] text-gray-400">April 2025 · bloom.boutique.cebu</p>
        </div>
        <div className="flex items-center gap-1 bg-green-100 text-green-700 text-[9px] font-bold px-2 py-0.5 rounded-full">
          <span>↑</span> 18%
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'New Followers', value: '+847', change: '↑ 12%', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
          { label: 'Total Reach',   value: '12.4K', change: '↑ 31%', color: 'text-blue-600',    bg: 'bg-blue-50',    border: 'border-blue-100' },
          { label: 'Engagement',    value: '8.3%',  change: '↑ 5%',  color: 'text-violet-600',  bg: 'bg-violet-50',  border: 'border-violet-100' },
          { label: 'Post Saves',    value: '234',   change: '↑ 22%', color: 'text-rose-600',    bg: 'bg-rose-50',    border: 'border-rose-100' },
        ].map(({ label, value, change, color, bg, border }) => (
          <div key={label} className={`${bg} border ${border} rounded-xl p-2.5`}>
            <p className={`font-black text-base ${color} leading-none`}>{value}</p>
            <p className="text-[9px] text-gray-500 mt-0.5">{label}</p>
            <p className={`text-[9px] font-semibold ${color} mt-0.5`}>{change}</p>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="flex-1 bg-white rounded-xl p-3 border border-gray-100 flex flex-col">
        <p className="text-[10px] font-semibold text-gray-500 mb-2 uppercase tracking-wide">Weekly Post Performance</p>
        <div className="flex items-end gap-1.5 flex-1 pb-1">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-lg"
                style={{
                  height: `${h}%`,
                  background: h >= 80
                    ? 'linear-gradient(to top, #f43f5e, #fb7185)'
                    : 'linear-gradient(to top, #fda4af, #fecdd3)',
                }}
              />
              <span className="text-[8px] text-gray-400 font-medium">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ContentSeriesGrid() {
  const posts = [
    { emoji: '🍲', bg: 'linear-gradient(135deg,#fff7ed,#fed7aa)', title: 'Sinigang ni Lola', tag: 'Recipe' },
    { emoji: '🥗', bg: 'linear-gradient(135deg,#f0fdf4,#bbf7d0)', title: 'Fresh Salad Bowl', tag: 'Healthy' },
    { emoji: '🍰', bg: 'linear-gradient(135deg,#fdf2f8,#f9a8d4)', title: 'Mango Float', tag: 'Dessert' },
    { emoji: '☕', bg: 'linear-gradient(135deg,#fffbeb,#fde68a)', title: 'Morning Brew', tag: 'Drinks' },
    { emoji: '🍛', bg: 'linear-gradient(135deg,#fff7ed,#fdba74)', title: 'Adobo Special', tag: 'Main' },
    { emoji: '🍡', bg: 'linear-gradient(135deg,#fdf4ff,#e9d5ff)', title: 'Puto Bumbong', tag: 'Local' },
  ]

  return (
    <div className="bg-white w-full h-full flex flex-col font-body select-none">
      {/* Instagram profile mini header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white text-[10px] font-bold">L</div>
        <div>
          <p className="text-[11px] font-semibold">lolaskitchen.cebu</p>
          <p className="text-[9px] text-gray-400">Home-cooked Cebuano meals 🍲</p>
        </div>
        <button className="ml-auto text-[9px] font-bold text-white bg-rose-500 px-2.5 py-1 rounded-full">Follow</button>
      </div>

      {/* Grid */}
      <div className="flex-1 grid grid-cols-3 gap-0.5 bg-gray-200">
        {posts.map((post, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-2 relative overflow-hidden"
            style={{ background: post.bg }}
          >
            <span className="text-3xl leading-none mb-1">{post.emoji}</span>
            <span className="text-[9px] font-bold text-gray-700 text-center leading-tight">{post.title}</span>
            <span className="text-[8px] text-gray-500 mt-0.5 bg-white/60 px-1.5 py-0.5 rounded-full">{post.tag}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function NewsletterCover() {
  return (
    <div className="w-full h-full flex flex-col font-body select-none relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #be123c 0%, #e11d48 45%, #f43f5e 100%)' }}>

      {/* BG decoration */}
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/10" />

      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 z-10">
        <div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-rose-200 font-medium">UC Informatics</p>
          <p className="text-white font-black text-sm leading-tight">The Digital Byte</p>
        </div>
        <div className="text-right">
          <div className="bg-white/20 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Issue #12</div>
          <p className="text-rose-200 text-[9px] mt-0.5">April 2025</p>
        </div>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col justify-center px-4 py-3 z-10">
        <div className="text-4xl mb-3">💻</div>
        <p className="text-[9px] uppercase tracking-[0.2em] text-rose-300 font-semibold mb-1">Cover Story</p>
        <h2 className="text-white font-black text-xl leading-snug mb-3">
          AI in the Classroom:<br />
          <span className="text-rose-200">Our Students Speak</span>
        </h2>
        <div className="space-y-1.5">
          {[
            { dot: 'bg-yellow-400', text: 'Campus Tech Updates & Announcements' },
            { dot: 'bg-rose-300',   text: 'Student Spotlight: Meet the Innovators' },
            { dot: 'bg-white',      text: 'Upcoming Org Events · May 2025' },
          ].map(({ dot, text }) => (
            <div key={text} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
              <p className="text-[10px] text-rose-100 leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-black/20 z-10">
        <p className="text-[9px] text-rose-300">cristejoycalosor13@gmail.com</p>
        <div className="flex gap-1">
          {['📘','📸','🎵'].map(i => <span key={i} className="text-xs">{i}</span>)}
        </div>
      </div>
    </div>
  )
}
