import React, { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";

const Favorites = () => {
  const { apiData, setApiData } = useContext(GalleryContext);

  const favoriteImages = apiData.filter((imagen) => imagen.liked);

  const handleImageClick = (id) => {
    const newData = apiData.map((imagen) => {
      if (imagen.id === id) {
        return {
          ...imagen,
          liked: false,
        };
      }
      return imagen;
    });

    setApiData(newData);
  };

  return (
    <div>
      <h1 className="favorites__title">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoriteImages.map((imagen) => (
          <div key={imagen.id} className="img__container">
            <img
              onClick={() => handleImageClick(imagen.id)}
              src={imagen.src.original}
              alt=""
              className="img"
            />
            <h5 className="img__description">{imagen.alt}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
