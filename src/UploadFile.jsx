import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import './UploadFile.css';
//assets
import add1 from './assets/add.png';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


const UploadFile = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [image, setImage] = useState("");

  
  const handleChange = async (e) => {

    if (e.file.status === 'uploading') {
        setLoading(true);
        
        return;
  
      }
      console.log(e)
        
        const files = e.file.originFileObj;
        const data = new FormData();
        data.append("file", files)
        data.append("upload_preset", "ean8fs4f");
        data.append("api_key", "877551654936893");
        setLoading(true);
        const res = await fetch(
            "http://api.cloudinary.com/v1_1/pdxnm9opuh/image/upload",
            {
                method:"POST",
                body: data,
            }
        )
        const file = await res.json();
        console.log(res);
        console.log(res.status);
        console.log(res.url);
        setImage(file.secure_url)
        setLoading(false);
    

        if (res.status === 200) {
            setLoading(false);
            setImageUrl(file.secure_url);
            
            //  setImageUrl(url);
            // Get this url from response in real world.
            //getBase64(res, (url) => {
            //  setLoading(false);
            //  setImageUrl(url);
            //});
            console.log("si se subio")
        };
    
        // Get this url from response in real world.
    
    
    
}

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
        height: '135px',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
       <p className='text-in-btn-upload'> <span>Choose file</span> or drop here</p> 

      </div>
    </button>
  );
  return (
    <div className='card-upload'>
        <div className='wrapp-component-upload'>
          <div className='wrapp-head-text-component-uploiad'>
            <p className='info-text'>Fotografía intraoral</p>
            <p className='info-text-strong'>Oclusal superior</p>
          </div>
        
        <Upload.Dragger
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        //action="http://localhost:3000/"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: '100%',
                height: '136px',
                objectFit: 'cover',
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload.Dragger>
        </div>
      <div className='wrapp-img-example-car-upload'>
        <img src={add1} alt="" />
      </div>
    </div>
  );
};

export { UploadFile };