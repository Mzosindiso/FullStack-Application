import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import Terms from './components/Terms&Conditions';
import Policy from './components/Privacypolicy';
import Accessibility from './components/Accessibility';
import Glossary from './components/Glossary';
import ReturnsAndShipping from './components/Returns&Shipping';

function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Policy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/shipping" element={<ReturnsAndShipping />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
