import Header from "../../Header";
import CampoTexto from "../CampoTexto";
import Boton from "../Boton";
import "../NuevoVideo.css";
import Footer from "../../Footer";
import { v4 as uuidv4 } from "uuid";

function NuevaCategoria({
  nombre,
  setNombre,
  color,
  setColor,
  registrarCategoria,
  limpiarFormularioCategoria,
}) {
  const enviarDatosCategoria = (e) => {
    e.preventDefault();
    const datosCategoria = {
      id: uuidv4(),
      nombre,
      color,
    };
    registrarCategoria(datosCategoria);
  };

  return (
    <>
      <Header />

      <div className="container-nuevo-video">
        <div className="titulo-nuevo-video">
          <h2>NUEVA CATEGORIA</h2>
          <p>Complete el formulario para crear una nueva categoria</p>
        </div>

        <div className="formulario-container">
          <h3>Crear categoria</h3>

          <form
            onSubmit={enviarDatosCategoria}
            className="formulario-nuevo-video"
          >
            <div className="campo-container">
              <CampoTexto
                label="nombre"
                placeholder="ingrese el nombre"
                required
                valor={nombre}
                setValor={setNombre}
              />
              <CampoTexto
                label="color"
                required
                type="color"
                valor={color}
                setValor={setColor}
              />
            </div>
            <div className="boton-container">
              <Boton texto="GUARDAR" type="submit" colorBorder="#2271d1" />
              <Boton
                texto="LIMPIAR"
                colorBorder="#fff"
                onClick={limpiarFormularioCategoria}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NuevaCategoria;
