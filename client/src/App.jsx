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
    
    <Router>
     <Header />
     <main>
          <Routes>
           <Route path="/" element={<Homepage />} exact/>
        
          </Routes>
     </main>
     <Footer />
    </Router>
  )
}

export default App
