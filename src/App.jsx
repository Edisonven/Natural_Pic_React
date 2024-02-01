import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const PHOTO_URL = "/photos.json";

const App = () => {
  const [appiData, setApiData] = useState([]);

  const getInfoApi = async () => {
    const respuesta = await fetch(PHOTO_URL);
    const { photos } = await respuesta.json();
    setApiData(photos);
  };

  useEffect(() => {
    getInfoApi();
  }, []);

  console.log(appiData);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </div>
  );
};
export default App;
