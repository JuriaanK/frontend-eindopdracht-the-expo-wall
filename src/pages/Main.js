import React, {useEffect, useState} from 'react';
import ModalImage from "react-modal-image";
import './Main.css';
import Mainnavbar from "../components/Mainnavbar";

import {AiFillHeart} from 'react-icons/ai'

import banksyOne from "../assets/testImages/testArt/banksy-one.jpg";
import banksyTwo from "../assets/testImages/testArt/banksy-two.jpg";
import banksyThree from "../assets/testImages/testArt/banksy-three.jpg";

import breitnerOne from "../assets/testImages/testArt/breitner-one.jpg";
import breitnerTwo from "../assets/testImages/testArt/breitner-two.jpg";
import breitnerThree from "../assets/testImages/testArt/breitner-three.jpg";

import balOne from "../assets/testImages/testArt/dirk-bal-one.jpg";
import balTwo from "../assets/testImages/testArt/dirk-bal-two.jpg";
import balThree from "../assets/testImages/testArt/dirk-bal-three.jpg";

import mondriaanOne from "../assets/testImages/testArt/mondriaan-one.jpg";
import mondriaanTwo from "../assets/testImages/testArt/mondriaan-two.jpg";
import monderiaanThree from "../assets/testImages/testArt/mondriaan-three.jpg";
import {Modal} from "react-bootstrap";

function Main() {


    const listOfArt = [

        `${banksyOne}`,
        `${banksyTwo}`,
        `${banksyThree}`,
        `${breitnerOne}`,
        `${breitnerTwo}`,
        `${breitnerThree}`,
        `${balOne}`,
        `${balTwo}`,
        `${balThree}`,
        `${mondriaanOne}`,
        `${mondriaanTwo}`,
        `${monderiaanThree}`

    ];

    const [show, setShow] = useState(false);
    return (
        <>
            <Mainnavbar/>
            <section className="outer-container">
                <article className="inner-container">
                    <div className="artwork-container">
                    {listOfArt.map((artWork)=>{
                        return<div className="single-artwork-container">
                            <ModalImage
                                small={artWork}
                                large={artWork}
                                className="main-artworks"
                            />
                            <AiFillHeart className="like-heart"/>
                        </div>

                    }) }
                    </div>
                </article>
            </section>
        </>
    );
}

export default Main;
