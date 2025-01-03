function CampoSelectEdit({ label, opciones, valor }) {
  return (
    <div className="campo-select-edit">
      <label>{label}</label>
      <select defaultValue={valor}>
        {opciones.map((opcion) => (
          <option key={opcion.id}>{opcion.nombre}</option>
        ))}
      </select>
    </div>
  );
}

export default CampoSelectEdit;
