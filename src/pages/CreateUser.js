import React, {useState} from 'react';
import PasswordChecklist from "react-password-checklist"
import './CreateUser.css';
import {Link} from "react-router-dom";
import ProImgUploader from "../components/ProImgUploader";
import axios from "axios";

function CreateUser(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")


    async function clickHandler() {
        const userData = JSON.stringify({
            username: `${name}`,
            email:`${email}`,
            password: `${password}`,
        })
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post("http://localhost:8081/users", userData, customConfig);
            console.log('created user', response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
    <header className="create-header"> </header>
        <section className="outer-container">
            <article className="inner-container">
                    <form className="create-form" onSubmit="">
                        <h2>create a account | 1/3</h2>
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
                    </form>

                    <Link to="/account" disabled={!name || !email || !password}>
                    <button
                    className="button-create-form"
                    disabled={!name || !email || !password}
                    onClick={clickHandler}>
                    next
                    </button>
                    </Link>






            </article>
        </section>
        </>);
}

export default CreateUser;
