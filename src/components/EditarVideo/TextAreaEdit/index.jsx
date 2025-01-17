function TextAreaEdit({ label, placeholder, valor, setValor, color }) {
  return (
    <div className="text-area-edit">
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        color={color}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
    </div>
  );
}

export default TextAreaEdit;
