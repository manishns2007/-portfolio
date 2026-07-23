'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FileText, Mail, Trophy, Code, Rocket } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen flex items-center justify-center pt-20 pb-8 bg-white overflow-hidden"
    >
      {/* Subtle background design elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/20 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-gradient-to-br from-slate-100/60 to-blue-50/30 blur-2xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Hero Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900"
            >
              Manish Bhalajy N S
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-base sm:text-lg font-bold text-blue-600 leading-snug"
            >
              Cybersecurity Engineer specializing in Offensive Security, Application Security &amp; Digital Forensics.
            </motion.h2>

            <div className="space-y-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <motion.p variants={itemVariants}>
                Passionate Cybersecurity Engineer focused on building security-first software, conducting vulnerability research, and analyzing complex attack surfaces.
              </motion.p>

              <motion.p variants={itemVariants}>
                Experienced in SOC operations, Active Directory security, digital forensics automation, and secure backend microservice architecture.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </a>

              <a
                href="https://github.com/manishns2007"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/nsmanish"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold border border-slate-200 transition-all"
              >
                LinkedIn
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 text-blue-600 border border-blue-200 rounded-lg text-xs font-bold transition-all cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact
              </button>
            </motion.div>
          </div>

          {/* Right Column: Profile Picture (5 cols, aligned parallel) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <motion.div variants={itemVariants}>
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-slate-100 shadow-md relative bg-slate-100">
                <Image
                  src="/profilepic.jpg"
                  alt="Manish Bhalajy N S"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
