import Header from "../Header";
import Footer from "../Footer";
import CampoTexto from "./CampoTexto";
import Boton from "./Boton";
import TextArea from "./TextArea";
import "./NuevoVideo.css";
import CampoSelect from "./CampoSelect";
import { v4 as uuidv4 } from "uuid";

function NuevoVideo({
  categorias,
  titulo,
  setTitulo,
  categoria,
  setCategoria,
  urlImagen,
  setUrlImagen,
  urlVideo,
  setUrlVideo,
  descripcion,
  setDescripcion,
  registrarVideo,
  limpiarFormularioVideo,
}) {
  const enviarDatosVideo = (e) => {
    e.preventDefault();
    const datosVideo = {
      id: uuidv4(),
      titulo,
      categoria,
      urlVideo,
      urlImagen,
      descripcion,
    };
    registrarVideo(datosVideo);
  };

  return (
    <>
      <Header />

      <div className="container-nuevo-video">
        <div className="titulo-nuevo-video">
          <h2>NUEVO VIDEO</h2>
          <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </div>

        <div className="formulario-container">
          <h3>Crear tarjeta</h3>

          <form onSubmit={enviarDatosVideo} className="formulario-nuevo-video">
            <div className="campo-container">
              <CampoTexto
                label="Titulo"
                placeholder="ingrese el título"
                required
                valor={titulo}
                setValor={setTitulo}
              />
              <CampoSelect
                label="Categoria"
                opciones={categorias}
                required
                valor={categoria}
                setValor={setCategoria}
              />
            </div>
            <div className="campo-container">
              <CampoTexto
                label="URL imagen"
                placeholder="ingrese la url de la imagen"
                required
                valor={urlImagen}
                setValor={setUrlImagen}
              />
              <CampoTexto
                label="URL video"
                placeholder="ingrese la url del video"
                required
                valor={urlVideo}
                setValor={setUrlVideo}
              />
            </div>
            <TextArea
              label="Descripcion"
              placeholder="¿De qué se trata este vídeo?"
              required
              valor={descripcion}
              setValor={setDescripcion}
            />
            <div className="boton-container">
              <Boton texto="GUARDAR" type="submit" colorBorder="#2271d1" />
              <Boton
                texto="LIMPIAR"
                colorBorder="#fff"
                onClick={limpiarFormularioVideo}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NuevoVideo;
