'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Trophy } from 'lucide-react'

export function Certifications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: 'Zscaler Cybersecurity Fundamentals',
      issuer: 'Zscaler',
      year: '2025',
      description: 'Cybersecurity 101 - Foundational cybersecurity concepts, zero trust principles, and cloud security practices.',
    },
    {
      title: 'Cyber Security & Ethical Hacking Training',
      issuer: 'Razz Security Academy',
      year: '2025',
      description: 'Comprehensive ethical hacking, penetration testing methodology, network security, and vulnerability assessment.',
    },
  ]

  const achievements = [
    {
      title: 'CyberHack V4 Finalist',
      description: 'Top 20 Finalist among 1,000+ national participants in cybersecurity threat analysis & hackathon.',
      year: '2026',
    },
    {
      title: 'Import Paradox Hackathon Finalist',
      description: 'Top 50 Finalist among 500+ competing engineering teams.',
      year: '2026',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="recognition" className="py-20 bg-white relative border-t border-slate-200/70 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-10"
        >
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
            >
              Recognition
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-bold">{item.year}</span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-base">{cert.title}</h3>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-semibold">{cert.year}</span>
                  </div>
                  <p className="text-blue-600 font-bold text-xs mb-1.5">{cert.issuer}</p>
                  <p className="text-slate-600 text-xs sm:text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
