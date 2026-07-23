'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GitBranch, ShieldAlert, Cpu, Terminal, ArrowUpRight, Globe, BookOpen } from 'lucide-react'

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Nethra AI',
      repoName: 'manishns2007/nethra-ai-forensics',
      subtitle: 'AI-Assisted Digital Forensics Platform',
      icon: Cpu,
      description:
        'An enterprise digital forensics platform automating evidence extraction, entity linkage, timeline reconstruction, and context-aware LLM investigations across disk & network logs.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'OCR', 'LLMs', 'Redis', 'Tesseract'],
      achievements: [
        'Automated digital evidence analysis with LLM-powered context insights',
        'Integrated multi-language OCR for automated document parsing',
        'Built secure role-based investigation workflow management',
        'Scalable containerized microservice backend architecture',
      ],
      github: 'https://github.com/manishns2007/NETHRA-AI',
      demo: 'https://github.com/manishns2007',
      caseStudy: 'AI-driven forensic parsing & automated entity correlation engine.',
    },
    {
      title: 'KernelOps',
      repoName: 'manishns2007/kernel-ops-sec',
      subtitle: 'Linux Kernel & System Baseline Hardening Security Tool',
      icon: Terminal,
      description:
        'A high-performance security utility for Linux system hardening, eBPF system call auditing, privilege escalation prevention, and automated CIS baseline policy enforcement.',
      technologies: ['C', 'Rust', 'Linux Kernel', 'eBPF', 'Systemd', 'Bash', 'Docker'],
      achievements: [
        'eBPF-based real-time syscall monitoring & process anomaly detection',
        'Automated CIS Linux benchmark compliance scanning & automated remediations',
        'Privilege escalation mitigation & system kernel parameter optimization',
        'Lightweight daemon with zero-overhead runtime resource consumption',
      ],
      github: 'https://github.com/manishns2007',
      demo: 'https://github.com/manishns2007',
      caseStudy: 'eBPF system call telemetry & kernel security baseline automation.',
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
    <section id="projects" className="py-20 bg-slate-50/40 relative border-t border-slate-200/70 overflow-hidden">
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
              Projects
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-8"
          >
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  {/* GitHub Repo Header Style Banner */}
                  <div className="bg-slate-900 text-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-blue-400" />
                      <span className="text-slate-400">repo /</span>
                      <span className="font-bold text-white">{project.repoName}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800/60 font-sans text-[11px] font-semibold">
                      Public Security Project
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-blue-600 font-semibold text-sm mt-1">{project.subtitle}</p>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-2 self-start">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-blue-600 text-white rounded-md text-xs font-bold transition-colors"
                        >
                          <GitBranch className="w-3.5 h-3.5" />
                          GitHub
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-xs font-bold border border-slate-200 transition-colors"
                        >
                          <Globe className="w-3.5 h-3.5 text-blue-600" />
                          Live Demo
                          <ArrowUpRight className="w-3 h-3 text-slate-400" />
                        </a>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed my-4">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                          Key Features &amp; Innovations
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, aIndex) => (
                            <li key={aIndex} className="grid grid-cols-[12px_1fr] gap-2 text-xs sm:text-sm text-slate-600 items-start">
                              <span className="text-blue-600 font-bold text-base leading-none select-none mt-0.5">•</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.map((tech, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-lg flex items-start gap-2 text-xs text-blue-950">
                          <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold">Case Study Focus: </span>
                            <span>{project.caseStudy}</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
