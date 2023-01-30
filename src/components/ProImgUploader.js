import React, { useContext } from 'react';
import './ProImgUploader.css';
import {useForm} from "react-hook-form";

import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function ProImgUploader(props) {
    const { register, handleSubmit } = useForm();
    const token = localStorage.getItem('token');
    const { userDetails } = useContext(AuthContext);
    const accountID = userDetails.accountID


    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("id", accountID);
        formData.append("profileImage", data.file[0]);

        const customConfig = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${token}`,
            }
        };

        try{
            const res = await axios.put("http://localhost:8081/accounts/addimage", formData, customConfig);
        }
        catch (e){
            alert('image size is too large')
        }

    };


    return (
        <>

            <form className="from-container" onSubmit={handleSubmit(onSubmit)}  >
                <input type="file" {...register("file")} />
                <input type="submit" />
            </form>
            <img  />

        </>
    )
}

export default ProImgUploader;
