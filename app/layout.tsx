import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import SocialLinks from '@/components/SocialLinks'
import EmailSidebar from '@/components/EmailSidebar'

export const metadata: Metadata = {
  title: 'Your Name | Frontend Developer',
  description: 'Frontend Developer specializing in React, Angular, and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <SocialLinks />
        <EmailSidebar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
