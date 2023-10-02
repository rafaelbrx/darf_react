import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import ReactPlayer from 'react-player';
import './SendVideo.css';

const SendVideo = () => {
  const [files, setFiles] = useState([]);
  const [popupImage, setPopupImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  };

  const openPopup = (file) => {
    setPopupImage(file);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="send-video-container">
      <h2>Enviar arquivo para detecção</h2>
      <Dropzone onDrop={handleDrop} accept="video/*,image/*" multiple>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Arraste e solte vídeos ou imagens aqui, ou clique para selecionar arquivos.</p>
          </div>
        )}
      </Dropzone>
      <div className="preview-cards">
        {files.map((file, index) => (
          <div
            key={index}
            className={`preview-card ${file.type.startsWith('image/') && isLandscape(file) ? 'landscape' : ''}`}
            onClick={() => openPopup(file)}
          >
            {file.type.startsWith('video/') ? (
              <ReactPlayer url={URL.createObjectURL(file)} controls width="100%" height="auto" />
            ) : (
              <img
                src={URL.createObjectURL(file)}
                alt={`Uploaded ${index}`}
                className="image-preview"
              />
            )}
          </div>
        ))}
      </div>
      {popupImage && (
        <div className="image-popup" onClick={closePopup}>
          <div className="image-popup-content">
            {popupImage.type.startsWith('video/') ? (
              <ReactPlayer url={URL.createObjectURL(popupImage)} controls width="100%" height="auto" />
            ) : (
              <img
                src={URL.createObjectURL(popupImage)}
                alt="Imagem em tamanho maior"
                className="popup-image"
              />
            )}
            <button onClick={closePopup} className="close-button">
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function isLandscape(file) {
  const maxWidth = 400;
  return file.width > file.height && file.width <= maxWidth;
}

export default SendVideo;
