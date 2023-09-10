/** @format */

import React, { useState } from 'react';

const Save_Image = () => {
  const [image, setImage] = useState();
  const savedata = (e) => {
    let imageFile = e.target.files[0];
    setImage(imageFile);

    const data = new FormData();
    data.append('file', imageFile);
    data.append('upload_preset', 'imageridedost');
    data.append('cloud_name', 'dlrgh9gam');

    fetch('https://api.cloudinary.com/v1_1/dlrgh9gam/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data?.secure_url))
      .catch((err) => {
        console.log(err);
      });

    console.log(imageFile); // Move this line here
  };

  return (
    <div>
      <input type="file" onChange={(e) => savedata(e)} />
    </div>
  );
};

export default Save_Image;
