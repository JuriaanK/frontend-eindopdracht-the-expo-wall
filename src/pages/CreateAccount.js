import React, {useState} from 'react';
import './CreateUser.css';
import {Link} from "react-router-dom";
import ProImgUploader from "../components/ProImgUploader";

function CreateAccount(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordSec, setPasswordSec] = useState("")

    return (
        <>
            <header className="create-header"> </header>
            <section className="outer-container">
                <article className="inner-container">
                    <form className="create-form" onSubmit="">
                        <h2>create a account</h2>
                        <label htmlFor="create-input">
                            <input
                                className="create-input"
                                type="name"
                                name="name"
                                placeholder="name"
                            />
                        </label>
                        <label htmlFor="create-input">
                            <input
                                className="create-input"
                                type="email"
                                name="email"
                                placeholder="e-mail"
                            />
                        </label>
                        <label htmlFor="create-input">
                            <input
                                className="create-input"
                                type="password"
                                name="password"
                                placeholder="password"
                            />
                        </label>
                        <label htmlFor="create-input">
                            <input
                                className="create-input"
                                type="password"
                                name="password"
                                placeholder="password check"
                            />
                        </label>

                            <button className="button-create-form"></button>
                        </Link>
                    </form>

                </article>
            </section>
        </>);
}

export default CreateAccount;

