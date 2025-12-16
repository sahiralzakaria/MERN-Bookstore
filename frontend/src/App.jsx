import './App.css'
import Footer from './components/footer/Footer'
import { Header } from './components/header/Header'
import About from './pages/about/About';
import Authors from './pages/authors/Authors';
import Book from './pages/book/Book';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';
import HomePage from './pages/home/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>



  )
}

export default App
