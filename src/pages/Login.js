import React, {useEffect, useState, useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import '../App.css';
import logoBig from '../assets/EINDOPDRACHT-LOGO.png'
import axios from 'axios';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { loginFunction } = useContext(AuthContext);


    async function clickHandler() {
        const userData = JSON.stringify({
            username: `${email}`,
            password: `${password}`
        })
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.post("http://localhost:8081/auth", userData, customConfig);
            console.log('token uit de backend teruggekregen na inloggen', response.data);
            loginFunction(response.data);

        } catch (e) {
            console.error(e);
            alert('invalid username or password, please try again')
        }
    }
    return (

        <>
            <section className="outer-container">
                <header className="login-header">
                    <img src={logoBig} alt="the-expo-wall-logo" className="logo-login"/>
                </header>
            </section>
            <section className="outer-container">
                <article className="inner-container">
                    <div className="login-form" onSubmit="">
                        <label for="login-input">
                            <input
                                className="login-input"
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="username"
                            />
                        </label>
                        <label for="login-input">
                            <input
                                className="login-input"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                            />

                        </label>
                            <button type="button" className="button-login" onClick={clickHandler}> login
                            <Link to="/main"/> </button>
                    </div>
                </article>
                <article className="create-container">
                    <Link to="/create">
                        <button type="button" className="button-create">create account</button>
                    </Link>
                </article>
            </section>
        </>


        );
}

export default Login;
