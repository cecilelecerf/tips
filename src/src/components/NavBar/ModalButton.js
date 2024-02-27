
function ModalButton (props) {
    return (
        <button type="button" className={`btn ${props.cssClass}`} data-bs-dismiss={props.dismiss ? "modal" : ""}>
            {props.text}
        </button>
    );
};

export default ModalButton;