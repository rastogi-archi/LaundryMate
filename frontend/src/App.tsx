import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import ContactUs from "./pages/ContactUs"
import BookMachine from "./pages/BookMachine"
import About from "./pages/About"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/book-machine" element={<BookMachine/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
