import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Nav from './components/Nav'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App