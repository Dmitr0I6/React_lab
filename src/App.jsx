import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './UI/Home'
import NotFound from './UI/NotFound';
import Blog from './UI/Blog';
import Cart from './UI/Cart';
import { ThemeProvider } from './Context/ThemeContext';


function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (cartCount > 0){
      alert("Товар добавлен в корзину!");
    }
  },[cartCount]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home cartCount={cartCount} setCartCount={setCartCount}/>}/>
          <Route path="/Blog" element = {<Blog cartCount={cartCount}/>}/>
          <Route path="/Cart" element = {<Cart cartCount={cartCount} setCartCount={setCartCount}/>}/>
          <Route path = "*" element = {<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
