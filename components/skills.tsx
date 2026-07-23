'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShieldCheck, Code, Database, Server, Terminal, Cloud } from 'lucide-react'

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: 'Security',
      icon: ShieldCheck,
      skills: [
        'Web Application Security',
        'Network Security',
        'Active Directory',
        'Linux Security',
        'Digital Forensics',
      ],
    },
    {
      category: 'Security Tools',
      icon: Server,
      skills: [
        'Burp Suite',
        'Nmap',
        'Wireshark',
        'Metasploit',
        'Gobuster',
        'ffuf',
      ],
    },
    {
      category: 'Programming',
      icon: Code,
      skills: [
        'Python',
        'Java',
        'SQL',
        'JavaScript',
      ],
    },
    {
      category: 'Technologies',
      icon: Cloud,
      skills: [
        'FastAPI',
        'Docker',
        'PostgreSQL',
        'Git',
        'eBPF',
        'React',
        'Celery',
        'Redis',
      ],
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
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="py-20 bg-slate-50/40 relative border-t border-slate-200/70 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
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
              Skills
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{category.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs rounded-md hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
