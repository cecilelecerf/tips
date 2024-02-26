import "./FormItem.css"
function FormItem(props) {
    return (
      <div className="FormItem mb-3">
        <label for="itemInput" className="form-label text-primary fw-bold">{props.label}</label>
        <input type={props.type} className="form-control bg-secondary-subtle border-secondary-subtle" id="itemInput" placeholder={props.placeholder} />

      </div>
    );
  }
  
  export default FormItem;
  