import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  
   const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li ><NavLink style={navLinkStyles } to='/'>Shop</NavLink> </li>
            <li ><NavLink  style={navLinkStyles} to='/mens'>Men</NavLink> </li>
            <li > <NavLink  style={navLinkStyles} to='/womens'>Women</NavLink></li>
            <li ><NavLink  style={navLinkStyles} to='/kids'>kids</NavLink></li>
        </ul>
        <div className="nav-login-cart">
          <NavLink style={navLinkStyles} to='/login'><button>Login</button></NavLink>  
           <NavLink style={navLinkStyles} to='/cart'><img src={cart_icon} alt="" /></NavLink> 
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

