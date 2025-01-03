function TextAreaEdit({ label, placeholder, valor, color }) {
  return (
    <div className="text-area-edit">
      <label>{label}</label>
      <textarea placeholder={placeholder} color={color} defaultValue={valor} />
    </div>
  );
}

export default TextAreaEdit;
