
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu/Menu'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'

export default function Home() {
  return (
    <main className='bg-gradient-to-br from-white to-orange-200  w-screen relative'>
      <Navbar />
      <Hero />
      <Menu />
      <div className='absolute bottom-64 right-56 z-50'>
          <ChatBot />
      </div>
      <Footer />
    </main>
  )
}
