import React from 'react';
import './ProImgUploader.css';

function ProImgUploader(props) {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    const handleImageUpload = e => {
        const [file] = e.target.files;
        if(file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className="main-upload-container">
            <input
                type="file"
                accept="image/*"
                multiple = "false"
                onChange={handleImageUpload}
                ref={imageUploader}
                className="uploaded-image-input"/>
            <span className="name-container">{props.title}</span>
                <div className="uploaded-image-container" onClick={() => imageUploader.current.click()}>
                    <img ref={uploadedImage} className="uploaded-image"/>
                </div>

        </div>)
}

export default ProImgUploader;
