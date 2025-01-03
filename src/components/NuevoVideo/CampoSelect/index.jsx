function CampoSelect({ label, opciones, required, valor, setValor }) {
  return (
    <div className="campo-select">
      <label>{label}</label>
      <select
        required={required}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      >
        <option
          value=""
          disabled
          defaultValue=""
          hidden
          style={{ color: "#757575" }}
        >
          Seleccione la categoría
        </option>
        {opciones.map((opcion) => (
          <option key={opcion.id}>{opcion.nombre}</option>
        ))}
      </select>
    </div>
  );
}

export default CampoSelect;
