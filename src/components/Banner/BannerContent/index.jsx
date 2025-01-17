function BannerContent({ categorias }) {
  const frontend = categorias.filter(
    (categoria) => categoria.nombre === "frontend"
  );

  return (
    <div className="banner-content">
      <div className="content-titulo">
        <h1 style={{ backgroundColor: frontend[0].color }}>Frontend</h1>
        <h2>Challenger React</h2>
        <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div className="content-img">
        <img src="/img/player.png" alt="player" />
      </div>
    </div>
  );
}

export default BannerContent;
