import "./FormItem.css"
function FormItem(props) {
    return (
      <div className="FormItem">
        <label for="itemInput" className="form-label text-primary fw-bold">{props.label}</label>
        <input type="text" className="form-control bg-secondary-subtle border-secondary-subtle" id="itemInput" placeholder={props.placeholder} />

      </div>
    );
  }
  
  export default FormItem;
  