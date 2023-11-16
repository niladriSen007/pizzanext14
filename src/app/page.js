
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <main className='bg-gradient-to-br from-white to-orange-300 h-screen w-screen'>
      <Navbar />
      <Hero />
      <Menu />
    </main>
  )
}
