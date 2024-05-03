import './globals.css';
import './scrollbar.css'
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { NavBar } from './components/Navbar/Navbar';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: 'Crafters',
  description: 'On vous accompagne dans la création de vos projets web et mobiles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
