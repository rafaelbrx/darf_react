import React, { useState } from 'react';
import './VideoResult.css';
import result1 from '../../Assets/result1.jpg';
import result2 from '../../Assets/result2.jpg';
import result3 from '../../Assets/result3.png';
import result4 from '../../Assets/result4.png';
import result5 from '../../Assets/result5.jpg';

const VideoResult = () => {
  const imageList = [
    { src: result1 },
    { src: result2 },
    { src: result3 },
    { src: result4 },
    { src: result5 },
  ];

  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (src) => {
    setPopupImage(src);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="video-result-container">
      <h2>Resultado da Detecção</h2>
      <div className="video-result-cards">
        {imageList.map((image, index) => (
          <div key={index} className="video-result-card" onClick={() => openPopup(image.src)}>
            <img src={image.src} alt={`Imagem ${index}`} />
          </div>
        ))}
      </div>
      {popupImage && (
        <div className="image-popup">
          <div className="image-popup-content">
            <img src={popupImage} />
            <button onClick={closePopup} className="close-button">
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoResult;
