import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Han - Personal Website',
  description: 'Welcome to the personal website of Han. Explore my projects, blog, and more!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
