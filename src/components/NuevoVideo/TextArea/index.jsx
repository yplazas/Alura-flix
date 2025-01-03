function TextArea({ label, placeholder, required, valor, setValor }) {
  return (
    <div className="text-area">
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
    </div>
  );
}

export default TextArea;
