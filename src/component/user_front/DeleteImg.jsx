import React from 'react';
import './DeleteImg.scss';

function DeleteImg({ image, handleDelete }) {
  return (
    <div className="DeleteImg">
      <button className="button-delete" type="button" onClick={() => { handleDelete(image.file.name); }}>X</button>
      <img src={image.imageSrc} alt="friche" />
    </div>
  );
}

export default DeleteImg;
