import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Carrusel from './components/Carrusel'
import Productos from './components/Products'
import Carrito from './components/Carrito'

const STORAGE_KEY = 'gamestore-carrito'

function loadCart() {
  try{
    const carrito_productos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(carrito_productos) ? carrito_productos : [];
  } catch(error){
    return [];
  };
}

function App() {

  const [cart, setCart] = useState(loadCart());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart])

  // Agregar producto al carrito
  const addToCart = (product) => {
    const cartItem = {
      ...product, // Copia del producto
      itemId: crypto.randomUUID(), //Asignar ID único a la instancia del producto
    };

    setCart((currentCart) => [...currentCart, cartItem]);
  };

  // Eliminar producto del carrito
  const removeFromCart = (productoId) => {
    setCart((currentCart) => currentCart.filter(item => item.itemId !== productoId))
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Carrusel />
        <Productos addToCart={addToCart}/>
        <Carrito cart={cart} removeFromCart={removeFromCart}/>
      </main>
      <Footer />
    </>
  )
}

export default App
