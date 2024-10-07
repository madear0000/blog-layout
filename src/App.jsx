import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/ContactUs';
import BlogPost from './pages/BlogPost';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog-post/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}
