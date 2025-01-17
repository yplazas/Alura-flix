import Videos from "./Videos";

function Categorias({
  categoria,
  videos,
  openModal,
  alSeleccionarVideo,
  eliminarVideo,
}) {
  const { nombre, color } = categoria;

  let nombreMayuscula = nombre.toUpperCase();

  return (
    <>
      {videos.length > 0 ? (
        <div className="categorias">
          <h2 style={{ background: color }}>{nombreMayuscula}</h2>
          <div className="videos">
            {videos.map((video) => (
              <Videos
                key={video.id}
                video={video}
                color={color}
                openModal={openModal}
                alSeleccionarVideo={alSeleccionarVideo}
                eliminarVideo={eliminarVideo}
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Categorias;
