import React from 'react';

const ModalButton = ({ text, cssClass, dismiss }) => {
    return (
        <button type="button" class={`btn ${cssClass}`} data-bs-dismiss={dismiss ? "modal" : ""}>
            {text}
        </button>
    );
};

export default ModalButton;