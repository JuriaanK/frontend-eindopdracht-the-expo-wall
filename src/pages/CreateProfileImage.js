import React from 'react';
import './CreateProfileImage.css';
import {useForm} from "react-hook-form";
import axios from "axios";

function CreateProfileImage(props) {
    const { register, handleSubmit } = useForm();

    async function onSubmit(data) {
        const formData = new FormData();
        formData.append("artWorkImage", data.file[0]);
        formData.append("owner", accountID);
        const customConfig = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${token}`,
            }
        };
        const res = await axios.post("http://localhost:8081/artworks/upload", formData, customConfig);
        if(res.status === 200){
            alert('Upload succeed')
        }
        if (res.status === 500){
            alert('Image file size is too large')
        }
    };

    return (
        <>
            <form className="from-container" onSubmit={handleSubmit(onSubmit)}  >
                <input type="file" {...register("file")} />
                <input type="submit" />
            </form>
        </>
    )
}

export default CreateProfileImage;
