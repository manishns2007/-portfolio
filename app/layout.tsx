import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Manish Bhalajy N S | Cybersecurity Engineer',
  description:
    'Portfolio of Manish Bhalajy N S - Aspiring cybersecurity engineer specializing in offensive security, application security, and security research. Based in Chennai.',
  keywords: [
    'cybersecurity',
    'security engineer',
    'offensive security',
    'application security',
    'security research',
    'digital forensics',
    'active directory',
    'penetration testing',
  ],
  creator: 'Manish Bhalajy N S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manishbhalajy.com',
    title: 'Manish Bhalajy N S | Cybersecurity Engineer',
    description:
      'Portfolio of Manish Bhalajy N S - Aspiring cybersecurity engineer specializing in offensive security, application security, and security research.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-900 font-sans selection:bg-blue-600/10 selection:text-blue-700 min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
