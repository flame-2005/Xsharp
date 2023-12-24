import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from './Homepage'
import Head from 'next/head';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen`}>
    <Head>
      <title>Futuristic Website</title>
      <meta name="description" content="Welcome to our futuristic website!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='blur'></div>

    <main className="flex flex-col items-center justify-center flex-1 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to Xsharp</h1>
      <p className="text-lg md:text-xl text-center mb-6">
        Explore the possibilities of tomorrow with us.
      </p>
      <Link href="/Homepage"><p
        
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out"
      >
        Explore
      </p></Link>
    </main>

    <footer className="text-center pb-4 text-white">
      <p>&copy; {new Date().getFullYear()} Futuristic Website. All Rights Reserved.</p>
    </footer>
  </div>
  )
}
