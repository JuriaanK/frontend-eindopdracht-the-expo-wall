import React, {useState}from 'react';
import './Settings.css';
import Mainnavbar from "../components/Mainnavbar";
import ProImgUploader from "../components/ProImgUploader";

function Settings(props) {
    const [NewPassword, setNewPassword] = useState("");
    const [NewPasswordSec, setPasswordSec] = useState("");
    const [bioText, setBioText] = useState("");
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
                            type="password"
                            name="new password"
                            value={NewPassword}
                            placeholder="new password"
                        />
                    </label>
                    <label htmlFor="create-input">
                        <input
                            className="create-input"
                            type="password"
                            name="new password"
                            value={NewPasswordSec}
                            placeholder="new password check"
                        />
                    </label>
                </form>

                <form className="bio-form">
                    <input  className="bio-input"
                            type="text"
                            name="bio-text"
                            value={bioText}
                            placeholder="write new bio"/>
                </form>
                    </div>
                <ProImgUploader
                title="click to change profile image"/>
                </div>
                <button className="button-login">save changes</button>
            </article>
        </section>

            </>);
}

export default Settings;
