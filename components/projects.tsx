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
      title: 'KernelOps',
      repoName: 'manishns2007/kernel-ops-sec',
      subtitle: 'Linux Runtime Detection & Response Platform using eBPF',
      icon: Terminal,
      description:
        'Developing a Linux runtime security platform that leverages eBPF for kernel-level telemetry collection to monitor process execution, file operations, and network activity. Implements MITRE ATT&CK-aligned threat detection and policy-based response with minimal system overhead.',
      technologies: ['eBPF', 'C', 'libbpf', 'Rust', 'SQLite', 'Docker', 'Linux'],
      achievements: [
        'Kernel-level telemetry collection for process execution, file operations & network activity',
        'MITRE ATT&CK-aligned threat detection and policy-based response engine',
        'High-performance Linux runtime security platform with minimal system overhead',
      ],
      github: 'https://github.com/manishns2007',
      demo: 'https://github.com/manishns2007',
      caseStudy: 'eBPF system call telemetry & kernel security baseline automation.',
    },
    {
      title: 'Nethra AI',
      repoName: 'manishns2007/nethra-ai-forensics',
      subtitle: 'Digital Forensics & Cyber Investigation Platform',
      icon: Cpu,
      description:
        'Built a digital forensics platform for cyber investigations, enabling automated evidence processing, OCR, AI-assisted entity extraction, relationship analysis, and interactive investigation workflows through knowledge graphs and GraphRAG.',
      technologies: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Celery', 'Redis', 'Cytoscape.js'],
      achievements: [
        'Automated digital evidence processing and multi-format document OCR parsing',
        'AI-assisted entity extraction and automated relationship analysis engine',
        'Interactive investigation workflows with dynamic knowledge graphs & GraphRAG',
      ],
      github: 'https://github.com/manishns2007/NETHRA-AI',
      demo: 'https://github.com/manishns2007',
      caseStudy: 'AI-driven forensic parsing & automated entity correlation engine.',
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
