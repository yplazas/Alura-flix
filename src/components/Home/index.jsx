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
}) {
  return (
    <div className="container">
      <Header />
      <Banner />
      <EditarVideo
        isOpen={isModalOpen}
        closeModal={closeModal}
        videoSeleccionado={videoSeleccionado}
        categorias={categorias}
      />
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
