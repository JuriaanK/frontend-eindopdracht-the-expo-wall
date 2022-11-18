import React, {useEffect, useState, useContext} from 'react';
import ModalImage from "react-modal-image";
import './Main.css';
import Mainnavbar from "../components/Mainnavbar";
import defaultImage from '../assets/profileImageJPG.jpg'

import { GoX } from "react-icons/go";

import axios from "axios";

import {AuthContext} from "../context/AuthContext";

function Main() {
    const token = localStorage.getItem('token');
    const { userDetails } = useContext(AuthContext);
    const userRole = userDetails.rolename;

    const [artWorkData, setArtworkData] = useState("");
    const [isDeleted, setIsDeleted] = useState(false);

     async function DeleteImage(imageID) {

         const customConfig = {
             headers: {
                 Authorization: `Bearer ${token}`,
             }
         };

         try {
             const result = await axios.delete(`http://localhost:8081/artworks/${imageID}`, customConfig);
             console.log(`delete id: ${imageID}` )
             setIsDeleted(true)
            console.log(result)
         } catch (e) {
             console.log(e)
         }
         setIsDeleted(false)
     }



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


    },[isDeleted])

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
                            {userRole === 'ADMIN' &&
                            <button
                                className="delete-button"
                                type="button"
                                onClick={() => DeleteImage(artWork.artWorkID)}>
                                <GoX className="delete-cross" />
                            </button>}
                        </div>

                    }) }
                    </div>
                </article>
            </section>
        </>
    );
}

export default Main;
