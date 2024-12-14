import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import Placeorder from './pages/placeorder/placeorder'
import Footers from './components/footer/Footers'
import Loginpopup from './components/loginpopup/Loginpopup'






const App = () => {

  const [showlogin,setshowlogin] =useState(false);
  
  return (
    <div className='app'>

      {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}

      <Navbar setshowlogin={setshowlogin}/>

     

      

      <Routes>

        <Route path='/' element={<Home/>} />

        <Route path='/cart' element={<Cart/>} />

        <Route path='/placeorder' element={<Placeorder/>} />

      </Routes>

      <Footers/>

     
      
    </div>
  )
}

export default App
