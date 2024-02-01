import { createContext, useState, useEffect } from "react";

export const GalleryContext = createContext();

const PHOTO_URL = "/photos.json";

const GalleryProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const getInfoApi = async () => {
    const respuesta = await fetch(PHOTO_URL);
    const { photos } = await respuesta.json();
    setApiData(photos);
  };

  useEffect(() => {
    getInfoApi();
  }, []);

  return (
    <GalleryContext.Provider value={{ apiData, setApiData }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
