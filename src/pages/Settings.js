import React, { useState, useContext }from 'react';
import './Settings.css';
import Mainnavbar from "../components/Mainnavbar";
import ProImgUploader from "../components/ProImgUploader";
import PasswordChecklist from "react-password-checklist";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

function Settings(props) {
    const token = localStorage.getItem('token');

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const { userDetails } = useContext(AuthContext);
    const user = userDetails.username;
    const [bioText, setBioText] = useState('');


    async function clickHandler() {
        const userData = JSON.stringify({
            email:`${email}`,
            password: `${password}`,
            userBio: `${bioText}`,
        })
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`,
            }
        };

        try {
            const response = await axios.put(`http://localhost:8081/users/${user}`, userData, customConfig);
            console.log(`changed ${user}`, response.data);

        } catch (e) {
            console.error(e);
        }
}

    return (<>
        <Mainnavbar/>

        <section className="outer-container">
            <article className="inner-container">
                <p className="main-title-settings">settings</p>
                <div className="setting-component-container">
                    <div className="form-container">
                <form className="create-form" onSubmit="">
                    <label htmlFor="create-input">
                        <input
                            className="create-input"
                            type="email"
                            name="email"
                            placeholder="change e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <textarea
                            className="bio-input"
                            type="text"
                            name="bio-text"
                            placeholder="write new bio"
                            onChange={(e) => setBioText(e.target.value)}
                    />
                    </label>
                    <label>
                        <input
                            className="create-input"
                            type="password"
                            placeholder="new password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            className="create-input"
                            type="password"
                            placeholder="new password check"
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
                        <ProImgUploader
                            title="click to change profile image"/>
                            <button
                                className="button-create-form"
                                onClick={clickHandler}>
                                save changes
                            </button>




                    </div>
                </div>

            </article>
        </section>

            </>);
}

export default Settings;
