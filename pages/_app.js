import '@/styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

export default function App({ Component, pageProps }) {
  
  return<>
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700|Montserrat:400,700|Exo:400,700|Orbitron:400,700|Futura|Aileron:400,700&display=swap" rel="stylesheet"/>
  <Cursor/>
  <Navbar />
   <Component {...pageProps} />
   </>
}
