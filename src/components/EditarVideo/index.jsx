import Boton from "../NuevoVideo/Boton";
import CampoTextEdit from "./CampoTextEdit";
import TextAreaEdit from "./TextAreaEdit";
import "./EditarVideo.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import CampoSelectEdit from "./CampoSelectEdit";

function EditarVideo({
  isOpen,
  closeModal,
  videoSeleccionado,
  categorias,
}) {
  if (!isOpen) return null;

  const { titulo, categoria, urlImagen, urlVideo, descripcion } =
    videoSeleccionado;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="formulario-edit-container">
          <IoMdCloseCircleOutline className="icon-close" onClick={closeModal} />

          <h3>Editar Card</h3>

          <form onSubmit={[]} className="formulario-editar-video">
            <CampoTextEdit
              label="Titulo"
              placeholder="ingrese el título"
              valor={titulo}
            />
            <CampoSelectEdit
              label="Categoria"
              opciones={categorias}
              valor={categoria}
            />
            <CampoTextEdit
              label="URL imagen"
              placeholder="ingrese la url de la imagen"
              valor={urlImagen}
            />
            <CampoTextEdit
              label="URL video"
              placeholder="ingrese la url del video"
              valor={urlVideo}
            />
            <TextAreaEdit
              label="Descripcion"
              placeholder="¿De qué se trata este vídeo?"
              valor={descripcion}
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
