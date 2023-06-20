import React from "react";
import BlogPage from "./pages/blogpage/BlogPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Investment from "./pages/investment/Investment";
import Contact from "./pages/contact/Contact";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import ServicesPage from "./pages/servicesPage/ServicesPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to= '/greenpath'/>} />
      <Route path="/greenpath" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<BlogPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
