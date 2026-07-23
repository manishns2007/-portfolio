'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, Code2, Award, Briefcase, GitPullRequest } from 'lucide-react'

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Featured Projects', value: '2+', icon: Code2 },
    { label: 'Certifications', value: '2', icon: Award },
    { label: 'SOC Internship', value: '1', icon: Briefcase },
    { label: 'Open Source', value: '2+', icon: GitPullRequest },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <motion.span
              variants={itemVariants}
              className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider border border-blue-200/80 inline-block"
            >
              Background & Overview
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            >
              I&apos;m an aspiring cybersecurity engineer based in Chennai with a passion for building
              secure systems and researching emerging security threats. My journey spans offensive
              security, application security, and AI-powered security tools, with hands-on experience
              in Active Directory, Windows/Linux administration, and digital forensics.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Education</h3>
                  <p className="text-xs font-medium text-slate-500">Academic Background</p>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900 text-base">B.Tech Information Technology</p>
                <p className="text-blue-600 font-semibold text-sm">Chennai Institute of Technology</p>
                <div className="flex items-center justify-between text-xs text-slate-500 mt-3 pt-2 border-t border-slate-100">
                  <span>Sep 2024 - May 2028</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Location & Availability</h3>
                  <p className="text-xs font-medium text-slate-500">Current Base</p>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900 text-base">Chennai, Tamil Nadu, India</p>
                <p className="text-slate-600 text-sm mt-1">Available for remote, hybrid, and on-site opportunities worldwide.</p>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-semibold text-emerald-700">Open for full-time internships & research roles</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
