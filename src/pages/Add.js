import React, {useState} from 'react';
import './Add.css';
import Mainnavbar from "../components/Mainnavbar";
import previewImage from "../assets/testImages/previewfoto.jpg"
import {Link} from "react-router-dom";
import axios from "axios";
import ArtWorksUploader from "../components/ArtWorkUploader";




function Add(props) {
    const [title, setTitle] = useState("")

    return (
        <>
        <Mainnavbar/>
            <section className="outer-container">
                <article className="inner-container">
                    <div className="tekst-art">
                    <h1 className="add">ADD</h1>
                    <p className="your">your</p>
                    <h1 className="art">art</h1>
                    </div>
                        <form className="upload-form" onSubmit="">
                            <label htmlFor="upload-input">
                                <input
                                    className="upload-input"
                                    type="title"
                                    name="title"
                                    placeholder="title"
                                />
                            </label>
                        </form>
                               <ArtWorksUploader/>



                </article>
            </section>
        </>
    );
}

export default Add;
