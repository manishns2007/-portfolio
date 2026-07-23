'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 text-slate-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Shield className="w-4 h-4" />
              </div>
              <p className="text-slate-900 text-sm font-bold">
                Manish Bhalajy N S
              </p>
              <span className="text-slate-300">•</span>
              <p className="text-slate-500 text-xs sm:text-sm">
                © {currentYear} All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/manishns2007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/nsmanish"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.721-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.733 0-9.637h3.554v1.36c.425-.654 1.185-1.585 2.882-1.585 2.105 0 3.681 1.376 3.681 4.336v5.526zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.771-1.715 1.921-1.715 1.149 0 1.916.762 1.916 1.715 0 .953-.767 1.715-1.922 1.715zm1.581 11.597H3.771V9.27h3.147v11.182zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
                </svg>
              </a>
              <a
                href="mailto:nsmanish2007@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500 pt-6 border-t border-slate-100">
            <p>Designed with executive precision</p>
            <span>•</span>
            <p>Next.js 16 + Tailwind CSS + Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
