import React, { useState } from 'react';
import './CreateAdmin.css';
import axios from "axios";
import PasswordChecklist from "react-password-checklist";
import { Link } from "react-router-dom";
import Mainnavbar from "../components/Mainnavbar";

function CreateAdmin(props) {
    const token = localStorage.getItem('token');
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")



    async function clickHandler() {
        const userData = JSON.stringify({
            username: `${name}`,
            email:`${email}`,
            password: `${password}`,
        })
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };

        try {
            const response = await axios.post("http://localhost:8081/users/admin", userData, customConfig);
            console.log('created admin', response.data);
            await HandlerAccount()

        } catch (e) {
            console.error(e);
        }

        async function HandlerAccount() {
            const userData = JSON.stringify({
                firstName: `${firstName}`,
                lastName:`${lastName}`,
                DOB: `${dateOfBirth}`,
                user: {username : `${name}`}
            })
            const customConfig = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            try {
                const response = await axios.post("http://localhost:8081/accounts", userData, customConfig);
                console.log('created account', response.data);
            } catch (e) {
                console.error(e);
                await onSubmit(data)
            }
        }
    }

    return (
        <>
            <Mainnavbar/>

            <section className="outer-container">
                <article className="inner-container">
                    <form className="create-form" onSubmit="">
                        <h2>create a admin account</h2>
                        <label htmlFor="create-input">
                            <input
                                className="create-input"
                                type="name"
                                name="name"
                                placeholder="username"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label htmlFor="create-input">
                            <input
                                className="create-input"
                                type="email"
                                name="email"
                                placeholder="e-mail"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                className="create-input"
                                type="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                className="create-input"
                                type="password"
                                placeholder="password check"
                                onChange={(e) => setPasswordAgain(e.target.value)}
                            />
                        </label>

                        <PasswordChecklist
                            className="password-checker"
                            rules={["minLength","specialChar","number","capital","match"]}
                            minLength={5}
                            value={password}
                            valueAgain={passwordAgain}
                            onChange={(isValid) => {}}
                        />

                        <label htmlFor="create-input">
                            <input
                                className="create-input"
                                type="name"
                                name="firstname"
                                placeholder="firstname"
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </label>
                        <label htmlFor="create-input">
                            <input
                                className="create-input"
                                type="name"
                                name="lastname"
                                placeholder="lastname"
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </label>
                        <label htmlFor="create-input">
                            <input
                                className="create-input"
                                type="dob"
                                name="dateOfBirth"
                                placeholder="date of birth"
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                        </label>
                    </form>
                    <Link to="/">
                        <button
                            className="button-create-form"
                            disabled={!name || !email || !password}
                            onClick={clickHandler}>
                            next
                        </button>
                    </Link>
                </article>
            </section>
        </>
    );
}

export default CreateAdmin;
