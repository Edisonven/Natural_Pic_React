import React, { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { apiData, setApiData } = useContext(GalleryContext);

  const handleImageClick = (index) => {
    const newData = [...apiData];
    newData[index] = {
      ...newData[index],
      liked: !newData[index].liked,
    };
    setApiData(newData);
  };

  console.log(apiData);

  return (
    <div className="gallery grid-columns-5 p-3">
      {apiData.map((imagen, index) => (
        <div key={imagen.id} className="img__container">
          <img
            onClick={() => handleImageClick(index)}
            src={imagen.src.original}
            alt=""
            className="img"
          />

          <h5 className="img__description">{imagen.alt}</h5>
          <IconHeart
            liked={imagen.liked}
            onHeartClick={() => handleImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;