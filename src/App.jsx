import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // No BrowserRouter here
import { ThemeProvider } from "./contexts/ThemeContext";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loan from "./components/Loan";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ProductGrid2 from "./components/ProductGrid2";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Stats from "./components/Stats";
import About from "./components/About/About";


import Cart from './components/Cart';
import { CartProvider } from "./components/context/CartContext";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);

  return (
    <ThemeProvider>
      <CartProvider>
        <div
          className={`min-h-screen ${
            darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
        >
          {/* Navbar */}
          <Navbar toggleLogin={toggleLogin} />

          {/* Main Content */}
          <div className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <ProductDetails />
                    <ProductGrid />
                    <Features />
                    <FAQ />
                    <Stats />
                  </>
                }
              />
              
              <Route path="/about-us" element={<About />} />
              <Route path="/apply-loan" element={<Loan />} />
              <Route
                path="/shop"
                element={
                  <>
                    <Shop />
                    <ProductGrid2 />
                  </>
                }
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
          
         
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
