import React from 'react'
import logo from '../../assets/logo1.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./NavBar.css"
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
                <ShoppingCartOutlinedIcon fontSize="large" />
            </header>
    )
}

export default NavBar
