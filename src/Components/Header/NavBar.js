import React from 'react'
import logo from '../../assets/logo1.jpg'
import "./NavBar.css"
import CartWidget from '../CartWidget'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
            <header className='header'>
                <img src={logo} alt="logo" className='logo'/>
                <NavLink className='titulo' to='/' >DREAM PADEL</NavLink>
                <nav>
                    <ul className='nav-links'>
                        <li><NavLink to='/categoria/Importada' >Paletas Importadas</NavLink></li>
                        <li><NavLink to='/categoria/Nacional' >Paletas Nacionales</NavLink></li>
                    </ul>
                </nav>
                
                <NavLink to='/cart'>
                    <CartWidget/>
                </NavLink>
                
                
            </header>
    )
}

export default NavBar
