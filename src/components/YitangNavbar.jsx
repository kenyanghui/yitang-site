import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navLinks = [
  { path: '/#dual', label: '方法论', hash: 'dual' },
  { path: '/#agenda', label: '课程', hash: 'agenda' },
  { path: '/fde/canvas.html', label: '画布', external: true },
  { path: '/fde/guide.html', label: '工作坊指南', external: true },
  { path: '/about', label: '关于' },
]

export default function YitangNavbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goHash = (hash) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || menuOpen ? 'bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[.06]' : 'bg-white/60 backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[19px] font-bold tracking-tight text-[#1d1d1f]">一堂·AI FDE</span>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) =>
            l.external ? (
              <a key={l.label} href={l.path} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{l.label}</a>
            ) : l.hash ? (
              <Link key={l.label} to={l.path} onClick={() => goHash(l.hash)} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{l.label}</Link>
            ) : (
              <Link key={l.label} to={l.path} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{l.label}</Link>
            )
          )}
          <Link to="/fde/" className="text-[13px] font-medium text-white bg-indigo-600 rounded-full px-4 py-1.5 hover:bg-indigo-500 transition-colors">报名</Link>
        </div>
        <button className="md:hidden text-[#1d1d1f]" onClick={() => setMenuOpen(!menuOpen)} aria-label="菜单">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/[.06] px-4 py-4 space-y-3">
          {navLinks.map((l) =>
            l.external ? (
              <a key={l.label} href={l.path} className="block text-[15px] text-[#1d1d1f]">{l.label}</a>
            ) : (
              <Link key={l.label} to={l.path} onClick={() => goHash(l.hash)} className="block text-[15px] text-[#1d1d1f]">{l.label}</Link>
            )
          )}
          <Link to="/fde/" className="block text-center text-[14px] font-medium text-white bg-indigo-600 rounded-full px-4 py-2">报名</Link>
        </div>
      )}
    </nav>
  )
}
