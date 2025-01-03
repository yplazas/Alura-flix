function CampoTexto({
  label,
  placeholder,
  type = "text",
  required,
  valor,
  setValor,
}) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        type={type}
        required={required}
        value={valor}
        placeholder={placeholder}
        onChange={(e) => setValor(e.target.value)}
      />
    </div>
  );
}

export default CampoTexto;
