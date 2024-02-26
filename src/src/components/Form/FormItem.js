import "./FormItem.css"
function FormItem({label, type, placeholder, value, onChange}) {
    return (
      <div className="FormItem mb-3">
        <label htmlFor={label} className="form-label text-primary fw-bold">{label}</label>
        <input type={type} className="form-control bg-secondary-subtle border-secondary-subtle" id={label} placeholder={placeholder} value={value} onChange={onChange} />

      </div>
    );
  }
  
  export default FormItem;
  