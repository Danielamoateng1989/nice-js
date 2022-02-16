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
import Servicespage from './pages/Servicespage'

const App = () => {
  return (
    
    <Router>
     <Header />
     <main>
          <Routes>
           <Route path="/" element={<Homepage />} exact/>
           <Route path="/service/:id" element={<Servicespage />}/>
          </Routes>
     </main>
     <Footer />
    </Router>
  )
}

export default App
