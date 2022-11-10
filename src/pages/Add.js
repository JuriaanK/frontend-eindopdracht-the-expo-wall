import React, {useState} from 'react';
import './Add.css';
import Mainnavbar from "../components/Mainnavbar";
import ArtWorksUploader from "../components/ArtWorkUploader";

function Add(props) {


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
                               <ArtWorksUploader/>

                </article>
            </section>
        </>
    );
}

export default Add;
