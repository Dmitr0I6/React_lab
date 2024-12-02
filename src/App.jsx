import { useEffect, useState } from 'react'
import './App.css'
import Header from './UI/Header'
import Cards from './UI/Card'
import Slider from './UI/Slider'
import Footer from './UI/Footer'

function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (cartCount > 0){
      alert("Товар добавлен в корзину!");
    }
  },[cartCount]);

  return (
  <>
      <Header cartCount={cartCount}/>
      <Slider/>
      <Cards setCartCount = {setCartCount}/>
      <Footer/>
  </>
  );
}

export default App
