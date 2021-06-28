import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';

import '../assets/styles/components/login.css'

const Login = props => {
    const [form, setValues] = useState({
        email: '',
    })

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form)
        props.history.push('/')
    }
    return(
        <>
        <Header isLogin/>
        <section className="login">
            <section className="login__container">
                <h2>Inicia Sesión</h2>
                <form className="login__container--form" action="" onSubmit={handleSubmit} >
                    <input name="email" className="input" type="email" placeholder="Correo" onChange={handleInput} />
                    <input  name="password" className="input" type="password" placeholder="Contraseña" onChange={handleInput} />
                    <button className="button" type="submit">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" name="" id="cbox1" value="checkbox" />recuerdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src="C:\Users\CAMILO GUERRERO\Desktop\FRONT-END-DEV\IMG\google-icon.png" alt="Google" />Inicia sesión con Google</div>
                    <div><img src="C:\Users\CAMILO GUERRERO\Desktop\FRONT-END-DEV\IMG\twitter-icon.png" alt="Twitter" />Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta <Link to="/register">Registrate</Link></p>
            </section>
        </section>
        </>
    );
} 

// export default Login

const mapDispatchToProps = {
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login)