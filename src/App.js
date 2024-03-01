import './App.css'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
      </Router>
    </div>
    
    );
}

export default App;
