function CampoSelectEdit({ label, opciones, valor, setValor }) {
  return (
    <div className="campo-select-edit">
      <label>{label}</label>
      <select
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      >
        {opciones.map((opcion) => (
          <option key={opcion.id}>{opcion.nombre}</option>
        ))}
      </select>
    </div>
  );
}

export default CampoSelectEdit;
