import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    
    <>
     <Header />
     <main>
       <Hero />
       <Homepage />
     </main>
     <Footer />
    </>
  )
}

export default App
