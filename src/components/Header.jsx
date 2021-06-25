import React from 'react';

import '../assets/styles/components/Header.css'

const Header = () => {
    return(
    <header className="header">
        <img className="header__img" src="C:\Users\CAMILO GUERRERO\Desktop\FRONT-END-DEV\IMG\logo-platzi-video-BW2.png" alt="Platzi Video" />
        <div className="header__menu">
        <div className="header__menu--profile">
        <img src="../IMG/icons8-usuario-100.png" alt="user" />
        <p>perfil</p>
        </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
    )
};

export default Header;