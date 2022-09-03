import React from 'react'
import logo from '../../assets/logo1.jpg'
import "./NavBar.css"
import CartWidget from '../CartWidget'

const NavBar = () => {
    return(
            <header class="header">
                <img src={logo} alt="logo" class="logo"/>
                <h1>DREAM PADEL</h1>
                <nav>
                    <ul class="nav-links">
                        <li><a href="">Paletas Importadas</a></li>
                        <li><a href="">Paletas Nacionales</a></li>
                    </ul>
                </nav>
                <CartWidget/>
                
            </header>
    )
}

export default NavBar
