import React from "react";
import NavBar from "./Components/Header/NavBar"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart"
import { BrowserRouter, Routes , Route } from 'react-router-dom'


const App = () =>{
  return ( 
      <>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Dream Padel"/>} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Bienvenidos a Dream Padel"/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
      </>
    
  )
}

export default App
