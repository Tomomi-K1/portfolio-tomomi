import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Tomomi Kosaka Portfolio",
  description: "Tomomi Kosaka's portfolio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <canvas className='canvas1'></canvas>
        {children}
      </body>
    </html>
  )
}
