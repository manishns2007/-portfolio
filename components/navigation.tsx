'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GitBranch } from 'lucide-react'

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['hero', 'projects', 'experience', 'recognition', 'skills', 'contact']
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 160 && rect.bottom >= 100
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'recognition', label: 'Recognition' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-slate-200/80 ${
        isScrolled ? 'py-3 shadow-xs' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Sleek Monogram Logo */}
          <Link href="/" className="group flex items-center focus:outline-hidden" aria-label="Home">
            <span className="px-2.5 py-1 text-xs font-black font-mono tracking-widest text-slate-900 group-hover:text-blue-600 group-hover:border-blue-200 bg-slate-50 border border-slate-200 rounded-md transition-all shadow-2xs">
              NSM
            </span>
          </Link>

          {/* Navigation Links & Actions */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <nav className="flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2.5 py-1.5 text-sm font-semibold transition-colors relative cursor-pointer ${
                    activeSection === item.id
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://drive.google.com/file/d/1AtPt5_U9OTY-vDUhYQ_kpw8ihXHKjMPI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all shadow-2xs"
              >
                Resume
              </a>

              <a
                href="https://linkedin.com/in/n-s-manish007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/manishns2007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="GitHub"
              >
                GitHub
                <GitBranch className="w-4 h-4 text-slate-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
