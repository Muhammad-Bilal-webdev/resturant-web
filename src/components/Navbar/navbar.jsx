import React, { useState,useContext} from "react";
import './Navbar.css'
import { assets, food_list } from '../../assets/assets'
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/context";


const Navbar = ({setshowlogin}) => {

    const [menu, setmenu] = useState("home")

    const { Cartitems,getTotalCartAmount } = useContext(StoreContext);

    return (




        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
              <Link to='/'> <a className="navbar-brand" href="#"> <img src={assets.logo} alt="" /> </a> </Link> 
              
               
               
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a onClick={() => setmenu("home")} id={menu === "home" ? "active" : ""} className="nav-link " aria-current="page" href="#home" >Home</a>
                        </li>

                        <li className="nav-item">
                            <a onClick={() => setmenu("menu")} id={menu === "menu" ? "active" : ""} className="nav-link active" aria-current="page" href="#Exploremenu.jsx">Menu </a>
                        </li>

                        <li className="nav-item">
                            <a onClick={() => setmenu("about")} id={menu === "about" ? "active" : ""} className="nav-link active" aria-current="page" href="#about">About Us</a>
                        </li>

                        <li className="nav-item">
                            <a onClick={() => setmenu("contact")} id={menu === "contact" ? "active" : ""} className="nav-link active" aria-current="page" href="#contact">Contact Us</a>
                        </li>


                    </ul>
                    <div className="d-flex">
                    <div className="cart">
                     <Link to='/cart'>  <img src={assets.basket_icon} alt="" /></Link>
                     {getTotalCartAmount()>2? <div className="dot"></div>:<></>}
                     
                    </div>
                        <button className="btn btn-outline-success" ><img src={assets.search_icon} alt="" /></button>
                        <button className="btn2" type="submit" onClick={()=>setshowlogin(true)}>Sign in</button>
                    </div>

                    
                </div>

                
           

        </nav>



    )
}

export default Navbar
