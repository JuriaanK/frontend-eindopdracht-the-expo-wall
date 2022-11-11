import React, {useContext, useEffect, useState} from 'react';
import './Profile.css';
import Mainnavbar from "../components/Mainnavbar";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";


function Profile(props) {
    const token = localStorage.getItem('token');

    const { userDetails } = useContext(AuthContext);
    const accountID = userDetails.accountID;
    const username = userDetails.username;
    const [profileImage, SetProfileImage] = useState("");
    const [bioText, setBioText] = useState('');
    const [artWorkData, setArtworkData] = useState("");

    useEffect(()=> {
        async function fetchData(){
            const customConfig = {
                headers: {
                    Authorization:`Bearer ${token}`,
                }
            };

            try {
                const result = await axios.get(`http://localhost:8081/accounts/${accountID}`, customConfig);
                console.log(result.data)
                SetProfileImage(result.data.profileImage)
            }catch (e){
                console.log(e)
            }

            try {
                const result = await axios.get(`http://localhost:8081/users/${username}`, customConfig);
                console.log(result.data.userBio)
                setBioText(result.data.userBio)
            }catch (e){
                console.log(e)
            }

            try {
                const result = await axios.get("http://localhost:8081/artworks", customConfig);
                console.log(result.data)
                setArtworkData(result.data)
            }catch (e){
                console.log(e)
            }
        }
        fetchData()
    },[])
    return (
        <>
            <Mainnavbar/>
            <section className="outer-container">
                <article className="inner-container">
                    <div className="bio-container">
                        <div className="image-container">
                            <img
                                className="profile-image"
                                src={`data:image/jpg;base64,${profileImage}`}
                                alt="profile-image"/>
                        </div>
                        <span>{bioText}</span>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Profile;
