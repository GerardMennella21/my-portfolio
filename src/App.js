import React, { useState } from "react"
import './App.css'
import 'animate.css'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from "./components/Resume";



function App() {
  const [currentPage, setCurrentPage] = useState('about-me')

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    if (currentPage === "about-me") {
      return <About />
    }
    if (currentPage === "portfolio") {
      return <Portfolio />
    }
    if (currentPage === "contact") {
      return <Contact />
    }
    if (currentPage === "resume") {
      return <Resume />
    }
  }
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header onPageChange={handlePageChange} />
      <main className='min-vh-100 d-flex justify-content-center align-items-center'>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
