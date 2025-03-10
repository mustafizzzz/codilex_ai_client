import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'


function App() {


  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>




  )
}

export default App
