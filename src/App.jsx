import React from 'react'
import Navbar from "./Navbar/Navbar"
import Homepage from "./Homepage/Homepage"
import Login from './Login/Login'
import Booking from './Booking/Booking'
import Cart from './Cart/Cart'
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
    <Routing>
      <Navbar/>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path='booking' element={<Booking/>} />
<Route path='cart' element={<Cart/>} />

        <Route path='login' element={<Login/>} />
      </Routes>
    </Routing>
    </>
  )
}

export default App
