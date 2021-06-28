import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import Header from '../components/Header';

import '../assets/styles/components/Register.css'

const Register = props => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    })
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }
    return (
        <>
        <Header isRegister/>
        <section className="signup">
            <section className="signup__container">
                <h2>Regístrate</h2>
                <form className="signup__container--form" action="" onSubmit={handleSubmit}>
                    <input name="name" className="input" type="text" placeholder="Nombre" onChange={handleInput} />
                    <input name="email" className="input" type="text" placeholder="Correo" onChange={handleInput} />
                    <input name="password" className="input" type="password" placeholder="Contraseña" onChange={handleInput} />
                    <button className="button" type="submit">Registrate</button>
                <p className="signup__container--iniciar-sesion"> <Link to="/login">Iniciar Sesión</Link></p>
                </form>
            </section>
        </section>
        </>
    );
}
const mapDispatchToProps = {
    registerRequest,
  };
export default connect(null, mapDispatchToProps)(Register);

