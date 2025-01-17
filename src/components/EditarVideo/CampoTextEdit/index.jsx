function CampoTextEdit({ label, valor, setValor, placeholder }) {
  return (
    <div className="campo-texto-edit">
      <label>{label}</label>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CampoTextEdit;
