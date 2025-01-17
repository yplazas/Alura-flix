import "./App.css";
import { useState } from "react";
import datosCategorias from "./data/categorias";
import datosVideos from "./data/videos";
import { BrowserRouter, Routes, Route } from "react-router";
import NuevoVideo from "./components/NuevoVideo";
import Home from "./components/Home";
import NuevaCategoria from "./components/NuevoVideo/NuevaCategoria";

function App() {
  const [categorias, setCategorias] = useState(datosCategorias);
  const [videos, setVideos] = useState(datosVideos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  // estados de los campos del formulario de crear videos
  const [titulo, setTitulo] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");

  // estados de los campos del formulario de crear categorias
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const eliminarVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const registrarCategoria = (datosCategoria) => {
    setCategorias([...categorias, datosCategoria]);
    alert("categoria registrada");
    limpiarFormularioCategoria();
  };

  const registrarVideo = (datosVideo) => {
    //verificar que existe integrante
    const videoExiste = videos.some(
      (video) => video.titulo === datosVideo.titulo
    );

    if (videoExiste) {
      alert("ya existe ese nombre en la lista de videos");
      return;
    }
    setVideos([...videos, datosVideo]);
    alert("video registrado");
    limpiarFormularioVideo();
  };

  const limpiarFormularioVideo = () => {
    setTitulo("");
    setCategoria("");
    setUrlImagen("");
    setUrlVideo("");
    setDescripcion("");
  };

  const limpiarFormularioCategoria = () => {
    setNombre("");
    setColor("");
  };

  const actualizarVideo = (datosVideo) => {
    const updatedVideo = videos.map((video) => video.id === datosVideo.id ? { ...video, ...datosVideo } : video);
    setVideos(updatedVideo)
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
                videoSeleccionado={videoSeleccionado}
                setVideoSeleccionado={setVideoSeleccionado}
                categorias={categorias}
                videos={videos}
                eliminarVideo={eliminarVideo}
                actualizarVideo={actualizarVideo}
              />
            }
          />
          <Route
            path="/nuevo-video"
            element={
              <NuevoVideo
                categorias={categorias}
                titulo={titulo}
                setTitulo={setTitulo}
                urlImagen={urlImagen}
                setUrlImagen={setUrlImagen}
                urlVideo={urlVideo}
                setUrlVideo={setUrlVideo}
                categoria={categoria}
                setCategoria={setCategoria}
                descripcion={descripcion}
                setDescripcion={setDescripcion}
                registrarVideo={registrarVideo}
                limpiarFormularioVideo={limpiarFormularioVideo}
              />
            }
          />

          <Route
            path="/nueva-categoria"
            element={
              <NuevaCategoria
                nombre={nombre}
                setNombre={setNombre}
                color={color}
                setColor={setColor}
                registrarCategoria={registrarCategoria}
                limpiarFormularioCategoria={limpiarFormularioCategoria}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
