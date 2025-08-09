import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Flow15 15 minutes a day to master modern tools',
  description: 'Micro-courses in AI and productivity with a 30-day habit calendar.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold">Flow15</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/courses">Courses</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/account">Account</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <footer className="border-t py-10 text-sm text-muted">
          <div className="mx-auto max-w-6xl px-4 flex flex-wrap gap-4 justify-between">
            <span>© {new Date().getFullYear()} Flow15</span>
            <div className="flex gap-4">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/cookies">Cookies</Link>
              <Link href="/refunds">Refunds</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
