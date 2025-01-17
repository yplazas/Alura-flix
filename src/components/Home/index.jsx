import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import Categorias from "../Categorias";
import EditarVideo from "../EditarVideo";

function Home({
  isModalOpen,
  openModal,
  closeModal,
  videoSeleccionado,
  setVideoSeleccionado,
  categorias,
  videos,
  eliminarVideo,
  actualizarVideo
}) {
  return (
    <div className="container">
      <Header />
      <Banner categorias={categorias}/>
      {isModalOpen ?
        <EditarVideo
          closeModal={closeModal}
          videoSeleccionado={videoSeleccionado}
          setVideoSeleccionado={setVideoSeleccionado}
          categorias={categorias}
          actualizarVideo={actualizarVideo}
        /> :
        <></>}
      {categorias.map((categoria) => (
        <Categorias
          key={categoria.id}
          categoria={categoria}
          videos={videos.filter((video) => video.categoria == categoria.nombre)}
          openModal={openModal}
          alSeleccionarVideo={(video) => setVideoSeleccionado(video)}
          eliminarVideo={eliminarVideo}
        />
      ))}
      <Footer />
    </div>
  );
}

export default Home;
