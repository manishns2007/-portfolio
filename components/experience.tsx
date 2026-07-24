'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase, GitBranch, ArrowUpRight } from 'lucide-react'

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  interface ResponsibilityItem {
    text: string
    prUrl?: string
    prLabel?: string
  }

  interface ExperienceItem {
    title: string
    company: string
    period: string
    location: string
    description: string
    responsibilities: ResponsibilityItem[]
    technologies: string[]
  }

  const experiences: ExperienceItem[] = [
    {
      title: 'Security Operations Center Intern',
      company: 'CyArt Tech',
      period: 'May 2026 - Present',
      location: 'Remote',
      description: 'Security engineering and SOC platform development for CyBreach enterprise security operations.',
      responsibilities: [
        {
          text: 'Engineered core backend modules for CyBreach, focusing on enterprise security operations and threat visibility.',
        },
        {
          text: 'Audited application workflows, strengthened API security controls, and improved backend data pipelines.',
        },
      ],
      technologies: ['SOC Analytics', 'Vulnerability Assessment', 'API Security', 'Python', 'Docker'],
    },
    {
      title: 'Open Source Contributor',
      company: 'Elite Coders',
      period: 'Jan 2026 - Present',
      location: 'Remote',
      description: 'Active contributor to open-source developer security, background worker runtimes, and compiler tooling.',
      responsibilities: [
        {
          text: 'Implemented JWT-based authentication, middleware, and request validation for CertiVault, an open-source document vault — merged PR tagged security by maintainers.',
          prUrl: 'https://github.com/Krishnx21/CertiVault/pull/29',
          prLabel: 'View PR',
        },
        {
          text: 'Engineered background worker runtime improvements and async task processing for CNTRL (Engineering contribution).',
          prUrl: 'https://github.com/Omnikon-Org/CNTRL/pull/52',
          prLabel: 'View PR',
        },
        {
          text: 'Expanded test coverage and test suite execution reliability for JugaadLang (Testing contribution).',
          prUrl: 'https://github.com/JugaadLang/jugaadlang/pull/79',
          prLabel: 'View PR',
        },
      ],
      technologies: ['Node.js', 'Express.js', 'TypeScript', 'JWT', 'Testing & CI', 'REST APIs'],
    },
    {
      title: 'Founding Builder',
      company: 'OxCode',
      period: 'July 2026 - Present',
      location: 'Remote',
      description: 'Selected as one of 100 Founding Builders for OxCode from a competitive applicant pool.',
      responsibilities: [
        {
          text: 'Evaluated early-stage platform builds, conducting security vulnerability assessments and submitting detailed bug reports.',
        },
        {
          text: 'Collaborated with product teams to refine API endpoints, usability, and developer workflows.',
        },
      ],
      technologies: ['Python', 'Bug Reporting', 'Product Feedback', 'API Security'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="experience" className="py-20 bg-white relative border-t border-slate-200/70 overflow-hidden">
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
              Experience
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                      <p className="text-blue-600 font-bold text-sm">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-3">{exp.description}</p>

                <div className="space-y-3 mb-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Responsibilities &amp; Contributions</h4>
                  {exp.responsibilities.map((resp, rIndex) => (
                    <div key={rIndex} className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 text-xs sm:text-sm text-slate-600">
                      <div className="grid grid-cols-[12px_1fr] gap-2 items-start flex-1">
                        <span className="text-blue-600 font-bold text-base leading-none select-none mt-0.5">•</span>
                        <span className="leading-relaxed">{resp.text}</span>
                      </div>
                      {resp.prUrl && (
                        <a
                          href={resp.prUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-blue-600 text-white rounded-md text-xs font-bold transition-colors self-start sm:self-auto flex-shrink-0 ml-5 sm:ml-0 shadow-2xs"
                        >
                          <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                          <span>View PR</span>
                          <ArrowUpRight className="w-3 h-3 text-slate-400" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
