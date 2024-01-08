import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import {Lemon} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const lemon = Lemon({subsets: ['latin'], weight:  ['400']})

const metadata: Metadata = {
  title: 'Trade Bay',
  description: 'The truly free market place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
        />
        {children}
        </body>
    </html>
  )
}
