import hexToRgba from "hex-to-rgba";
import { MdEdit, MdDeleteForever } from "react-icons/md";
// import EditarVideo from "../../EditarVideo";

function Videos({
  video,
  color,
  openModal,
  alSeleccionarVideo,
  eliminarVideo,
}) {
  const { id, titulo, urlImagen } = video;
  const colorBox = hexToRgba(color, 0.75);

  return (
    <div
      className="video"
      style={{
        boxShadow: `0 0px 6px 6px ${colorBox}`,
      }}
    >
      <div className="video-portada">
        <img src={urlImagen} alt={titulo} />
      </div>
      <div
        className="video-descripcion"
        style={{ borderTop: `2px solid ${colorBox}` }}
      >
        <p>{titulo}</p>
        <div className="video-acciones">
          {/* <div className="accion">
            <MdOutlineRemoveRedEye />
            <span>Ver</span>
          </div> */}
          <div
            className="accion"
            onClick={() => {
              openModal(video);
              alSeleccionarVideo(video);
            }}
          >
            <MdEdit />
            <span>Editar</span>
          </div>
          <div
            className="accion"
            onClick={() => {
              eliminarVideo(id);
            }}
          >
            <MdDeleteForever />
            <span>Eliminar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
