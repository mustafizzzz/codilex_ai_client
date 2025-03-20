import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NewsPage from './pages/NewsPage'

const queryClient = new QueryClient()
function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className='flex-grow'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/test" element={<TestPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </QueryClientProvider>




  )
}

export default App
