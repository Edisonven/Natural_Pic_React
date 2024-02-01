import React, { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  //estado manejado desde un contexto global para cambiarlo como sea requerido
  const { apiData, setApiData } = useContext(GalleryContext);

  //Función que se llama al hacer click en la imagen según su índice, y cambia la propiedad liked a true o false según el click
  const handleImageClick = (index) => {
    //constante que almacena una copia del arrelo original, además crea una nueva versión del objeto con sus propiedades y se cambia la propiedad liked al inverso del valor actual (true o false)
    const newData = [...apiData];
    newData[index] = { ...newData[index], liked: !newData[index].liked };
    //actualiza el estado en base a las funciones disparadas con el click
    setApiData(newData);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {/* Se hace un mapeo del estado global actual */}
      {apiData.map((imagen, index) => (
        <div key={imagen.id} className="img__container">
          <img
            //funcion llamada creada más arriba que ejecuta los cambios y actualiza el estado
            onClick={() => handleImageClick(index)}
            src={imagen.src.original}
            alt=""
            className="img"
          />

          <h5 className="img__description">{imagen.alt}</h5>
          {/* Componente que recibe la propiedad liked y la funcion handleImageClick para cambiar el ícono de color segun la propiedad liked (true, false)*/}
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
