import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import './ArtWorkUploader.css';
import axios from "axios";
import { AuthContext } from '../context/AuthContext';


function ArtWorksUploader(){
    const { register, handleSubmit } = useForm();
    const token = localStorage.getItem('token');
    const { userDetails } = useContext(AuthContext);
    const accountID = userDetails.accountID

            const onSubmit = async (data) => {
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
                alert(JSON.stringify(`${res.message}, status: ${res.status}`));
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

export default ArtWorksUploader;