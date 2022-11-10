import React, {useEffect, useState} from 'react';
import ModalImage from "react-modal-image";
import './Main.css';
import Mainnavbar from "../components/Mainnavbar";

import {AiFillHeart} from 'react-icons/ai'

import axios from "axios";

function Main() {
    const token = localStorage.getItem('token');

    const [artWorkData, setArtworkData] = useState("");

    useEffect(()=> {

            async function fetchData(){
                const customConfig = {
                    headers: {
                        Authorization:`Bearer ${token}`,
                    }
                };

            try {
                const result = await axios.get("http://localhost:8081/artworks", customConfig);
                console.log(result.data)
                setArtworkData(result.data)
            }catch (e){
                console.log(e)
            }
        }
        console.log(artWorkData)
        fetchData()
    },[])


    const [show, setShow] = useState(false);
    return (
        <>
            <Mainnavbar/>
            <section className="outer-container">
                <article className="inner-container">
                    <div className="artwork-container">
                    {artWorkData && artWorkData.map((artWork)=>{
                        console.log(artWork)
                        return<div className="single-artwork-container">
                            <ModalImage
                                small={`data:image/jpg;base64,${artWork.artWorkImage}`}
                                large={`data:image/jpg;base64,${artWork.artWorkImage}`}
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
