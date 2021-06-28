import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

import '../assets/styles/components/Header.css'

const Header = props => {
    const {user, islogin, isRegister} = props;
    const hasUser = Object.keys(user).length > 0

    const handleLogout = () => {
        props.logoutRequest({})
    }

    const headerClass = classNames('header', {
        islogin,
        isRegister
    })

    return(
    <header className={headerClass}>
        <Link to="/">
        <img className="header__img" src="C:\Users\CAMILO GUERRERO\Desktop\FRONT-END-DEV\IMG\logo-platzi-video-BW2.png" alt="Platzi Video" />
        </Link>

        <div className="header__menu">
        <div className="header__menu--profile">
            {hasUser 
                ?<img src={gravatar(user.email)} alt={user.email}/> 
                :<img src="../IMG/icons8-usuario-100.png" alt="user" />
            }
        <p>perfil</p>
        </div>
            <ul>
                {hasUser ? <li><Link to="/">{user.name}</Link></li>:null

                }
                {hasUser ? <li><Link to="/" onClick={handleLogout}>Cerrar Sesion</Link></li> 
                :<li><Link to="/login">Iniciar Sesión</Link></li>
                }
            </ul>
        </div>
    </header>
    )
};

// export default Header;

const mapStateToProps = state => {
    return {
        user: state.user
    };
};
const mapDispachToProps = {
    logoutRequest
}
export default connect(mapStateToProps, mapDispachToProps)(Header)