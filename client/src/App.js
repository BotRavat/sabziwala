import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import Cart from './pages/cart/Cart'; // Import the Cart element
import Wishlist from './pages/wishlist/Wishlist'; // Import the Wishlist element
import Blog from './pages/blog/Blog'; // Import the Blog element
import ProductDetail from './pages/productDetail/ProductDetail';
import AllProducts from './pages/allProducts/AllProducts';
import AuthPage from './pages/signin/AuthPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element=<Homepage/> />
        <Route path="/cart" element=<Cart/> />
        <Route path="/wishlist" element=<Wishlist/> />
        <Route path="/auth" element=<AuthPage/> />
        <Route path="/blog" element=<Blog/> />
        <Route path="/product/:productId" element=<ProductDetail/> />
        <Route path="//all-products" element=<AllProducts/> />
      </Routes>
    </Router>
  );
}

export default App;
