import './index.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



const App = () => {
  return (
    
    <>
     <Header />
     <main>
       <>   
          
           <Homepage />
        </>
     </main>
     <Footer />
    </>
  )
}

export default App
