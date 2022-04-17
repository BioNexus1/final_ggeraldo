import React, { Component } from 'react';
import './../../styles/NavBar/NavBar.css';
import logo from './../../assets/images/logo/v2/logo.png'
class NavBar extends Component {
    
    render() {
        return (
            <div>
                <div className='navBar' >
                <img className='navLogo' src={logo} />
                    <ul className='navList' >
                        <li><a href='#'>Dashboard</a></li>
                        <li><a href='#'>Productos</a></li>
                        <li><a href='#'>Planes</a></li>
                        <li><a href='#'>Nosotros</a></li>
                    </ul>


                </div>
            </div>
        );
    }
}

export default NavBar;