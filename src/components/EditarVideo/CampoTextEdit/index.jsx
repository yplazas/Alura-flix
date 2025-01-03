function CampoTextEdit({ label, valor, placeholder }) {
  return (
    <div className="campo-texto-edit">
      <label>{label}</label>
      <input
        type="text"
        defaultValue={valor}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CampoTextEdit;
