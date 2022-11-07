import React, {useState} from 'react';
import './CreateUser.css';
import {Link} from "react-router-dom";
import ProImgUploader from "../components/ProImgUploader";
import axios from "axios";

function CreateAccount(props) {
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")

    async function clickHandler() {
        const userData = JSON.stringify({
            firstname: `${firstName}`,
            lastname:`${lastName}`,
            dob: `${dateOfBirth}`,
        })
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post("http://localhost:8081/accounts", userData, customConfig);
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
                        <h2>we need some more information | 2/3</h2>
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

                        <Link to="/">
                            <button className="button-create-form" onClick={clickHandler}>next</button>
                        </Link>

                    </form>

                </article>
            </section>
        </>);
}

export default CreateAccount;

