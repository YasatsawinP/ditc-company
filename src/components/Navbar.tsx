import { NavLink } from 'react-router-dom'
import logoWhite from '@/assets/logo/logo-ditc-white.svg'

const navLinks = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Requirement', to: '/requirement' },
  { label: 'Personnel Management', to: '/personnel' },
  { label: 'Course Management', to: '/course' },
  { label: 'WIL', to: '/wil' },
]

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-primary flex items-center px-6 gap-8">
      <NavLink to="/dashboard" className="shrink-0">
        <img src={logoWhite} alt="DITC" className="h-8" />
      </NavLink>

      <div className="flex items-center gap-6">
        {navLinks.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? 'text-white font-bold underline underline-offset-4 text-sm whitespace-nowrap'
                : 'text-black font-semibold text-sm whitespace-nowrap transition-all duration-150 hover:text-white hover:underline hover:underline-offset-4 cursor-pointer'
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
