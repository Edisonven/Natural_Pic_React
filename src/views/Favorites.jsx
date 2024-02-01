import React, { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";

const Favorites = () => {
  //estado manejado desde un contexto global para cambiarlo como sea requerido
  const { apiData, setApiData } = useContext(GalleryContext);

  //variable que almacena el estado filtrado según su propiedad liked(si es igual a true)
  const favoriteImages = apiData.filter((imagen) => imagen.liked);

  //Función que se llama al hacer click en la imagen según id, y cambia la propiedad liked a false para quitarla de la sección favoritos
  const handleImageClick = (id) => {
    const newData = apiData.map((imagen) => {
      //Condicional que evalúa la propiedad id de la imagen dinámicamente según el click, y le cambia su propiedad liked a false
      if (imagen.id === id) {
        return {
          ...imagen,
          liked: false,
        };
      }
      return imagen;
    });
    //Se setea el estado con los nuevos datos mapeados
    setApiData(newData);
  };

  return (
    <div>
      <h1 className="favorites__title">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {/*Mapeo del arreglo filtrado */}
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
