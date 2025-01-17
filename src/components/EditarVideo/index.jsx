import Boton from "../NuevoVideo/Boton";
import CampoTextEdit from "./CampoTextEdit";
import TextAreaEdit from "./TextAreaEdit";
import "./EditarVideo.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import CampoSelectEdit from "./CampoSelectEdit";
import { useState } from "react";

function EditarVideo({
  closeModal,
  videoSeleccionado,
  setVideoSeleccionado,
  categorias,
  actualizarVideo,
}) {
  const { id, titulo, categoria, urlImagen, urlVideo, descripcion } =
    videoSeleccionado;

  const [nuevoTitulo, setNuevoTitulo] = useState(titulo);
  const [nuevaUrlVideo, setNuevaUrlVideo] = useState(urlVideo);
  const [nuevaUrlImagen, setNuevaUrlImagen] = useState(urlImagen);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(descripcion);
  const [nuevaCategoria, setNuevaCategoria] = useState(categoria);

  const actualizarDatosVideo = (e) => {
    e.preventDefault();
    const datosVideo = {
      id,
      titulo: nuevoTitulo,
      categoria: nuevaCategoria,
      urlImagen: nuevaUrlImagen,
      urlVideo: nuevaUrlVideo,
      descripcion: nuevaDescripcion,
    };
    setVideoSeleccionado(datosVideo);
    actualizarVideo(datosVideo);
    alert("Datos del video actualizados");
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="formulario-edit-container">
          <IoMdCloseCircleOutline className="icon-close" onClick={closeModal} />

          <h3>Editar Card</h3>

          <form
            onSubmit={actualizarDatosVideo}
            className="formulario-editar-video"
          >
            <CampoTextEdit
              label="Titulo"
              placeholder="ingrese el título"
              valor={nuevoTitulo}
              setValor={setNuevoTitulo}
            />
            <CampoSelectEdit
              label="Categoria"
              opciones={categorias}
              valor={nuevaCategoria}
              setValor={setNuevaCategoria}
            />
            <CampoTextEdit
              label="URL imagen"
              placeholder="ingrese la url de la imagen"
              valor={nuevaUrlImagen}
              setValor={setNuevaUrlImagen}
            />
            <CampoTextEdit
              label="URL video"
              placeholder="ingrese la url del video"
              valor={nuevaUrlVideo}
              setValor={setNuevaUrlVideo}
            />
            <TextAreaEdit
              label="Descripcion"
              placeholder="¿De qué se trata este vídeo?"
              valor={nuevaDescripcion}
              setValor={setNuevaDescripcion}
            />

            <div className="boton-container-edit">
              <Boton texto="GUARDAR" type="submit" colorBorder="#2271d1" />
              <Boton texto="LIMPIAR" colorBorder="#fff" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditarVideo;
