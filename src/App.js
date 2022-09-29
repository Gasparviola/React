import React from "react";
import NavBar from "./Components/Header/NavBar"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart"
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import CartProvider from "./context/CartContext";


const App = () =>{
  return ( 
      <>
        <BrowserRouter>
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Dream Padel"/>} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Bienvenidos a Dream Padel"/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </>
    
  )
}

export default App
