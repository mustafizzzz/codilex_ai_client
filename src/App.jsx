import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NewsPage from './pages/NewsPage'
import AboutPage from './pages/AboutPage'
import Register from './pages/Auth/Register'
import VerifyOtp from './pages/Auth/VerifyOtp'
import { Toaster } from "@/components/ui/sonner"
import SucessMessageCard from './pages/Auth/SucessMessageCard'
import Login from './pages/Auth/Login'


const queryClient = new QueryClient();

function Layout() {
  const location = useLocation();

  // Define authentication-related routes
  const authRoutes = ["/register", "/verify-otp", "/registration-success", "/success", "/login"];

  // Check if the current route is an auth page
  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Navbar />}

      <main className="flex-grow">
        <Routes>

          {/* Auth pages */}
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/success" element={<SucessMessageCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />

          {/* Regular pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </main>


      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
