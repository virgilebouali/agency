import './globals.css';
import './scrollbar.css'
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { NavBar } from './components/Navbar/Navbar';


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
      <body className=" bg-black">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
