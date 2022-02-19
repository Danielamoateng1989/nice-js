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
import { Login } from './components/Login/Login';
import DateTimePicker from './components/DateTimePicker/dateTimePicker';

const App = () => {
  return (
    
    <Router>
     <Header />
     <main>
          <Routes>
           <Route path="/login" element={<Login />}/>
           <Route path="/" element={<Homepage />} exact/>
           <Route path="/services/:id" element={<Servicespage />}/>
           <Route path="/dateandtime" element={<DateTimePicker />}/>
          </Routes>
     </main>
     <Footer />
    </Router>
  )
}

export default App
