function Boton({ texto, type = "button", colorBorder, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ border: `3px solid ${colorBorder}` }}
    >
      {texto}
    </button>
  );
}

export default Boton;
