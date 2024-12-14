import React, { useState } from 'react'
import './Loginpopup.css'
import '../../assets/assets'
import { assets } from '../../assets/assets'

const Loginpopup = ({setshowlogin}) => {

  const [currentstate,setcurrentstate]=useState("login")
  return (
    <div className='login-popup'>

      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />

          </div>

          <div className="input-container">
            {currentstate==="login"?<></>:  <input type="text" placeholder='Your name' required />}
          
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Your password' required />
            
          </div>
          <button>{currentstate==="Sign Up"?"Create account":"Login"}</button>
           
           <div className="login-popup-conditions">
            <input type="checkbox" />
            <p>By continuing,i agree to the term of use & privacy policy</p>
           </div>

           <div className="login-popup-condition2">
           {currentstate==="login"?  <p>Create a new account? <span onClick={()=>setcurrentstate("Sign Up")}>Click here</span></p>
           : <p>Already have an account? <span onClick={()=>setcurrentstate("login")}>Login here</span></p>}
         </div>
       

      </form>
      
    </div>
  )
}

export default Loginpopup
