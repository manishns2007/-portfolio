'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Share2, GitBranch, MapPin, Send, CheckCircle2, FileText } from 'lucide-react'

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nsmanish2007@gmail.com',
      href: 'mailto:nsmanish2007@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9789970655',
      href: 'tel:+919789970655',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: 'https://maps.google.com/?q=Chennai',
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
    <footer id="contact" className="py-20 bg-slate-50/50 relative border-t border-slate-200/70 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[250px] bg-gradient-to-tr from-blue-100/30 to-indigo-50/20 blur-3xl rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
            >
              Contact
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Info & Social CTA Buttons (5 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">Let&apos;s Connect</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Open for opportunities in offensive security, application security, SOC analysis, and vulnerability research. Reach out directly or send a message.
                </p>
              </div>

              <div className="space-y-3">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : '_blank'}
                      rel={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                      className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex items-center gap-3.5 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{method.label}</span>
                        <span className="text-slate-900 font-bold text-xs sm:text-sm truncate block group-hover:text-blue-600 transition-colors">
                          {method.value}
                        </span>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Quick Links Row */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href="https://drive.google.com/uc?export=download&id=1AtPt5_U9OTY-vDUhYQ_kpw8ihXHKjMPI"
                  download="resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Resume
                </a>

                <a
                  href="https://linkedin.com/in/n-s-manish007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/manishns2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-lg text-xs font-bold transition-all"
                >
                  <GitBranch className="w-3.5 h-3.5 text-blue-600" />
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* Right Column: Interactive Contact Form (7 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Send a Message</h3>

                {formSubmitted ? (
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto" />
                    <h4 className="font-bold text-slate-900 text-base">Message Sent Successfully!</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">Thank you for reaching out. I will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Security Collaboration / Opportunity"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-all shadow-xs cursor-pointer"
                    >
                      Send Message
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
            <span>© {new Date().getFullYear()} Manish Bhalajy N S. All rights reserved.</span>
            <span>Designed &amp; Built for Cybersecurity Operations</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
