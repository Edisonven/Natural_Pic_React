import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";
const Gallery = () => {
  const { appiData } = useContext(GalleryContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {appiData.map((imagen) => (
        <div key={imagen.id} className="img__container">
          <img src={imagen.src.original} alt="" className="img" />
          <h5 className="img__description">{imagen.alt}</h5>
          <IconHeart></IconHeart>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
