import React from 'react';

function Switch({ leftSvg, rightSvg, onChange }) {
    return (
        <div className="d-flex align-items-center">
            <img src={leftSvg} alt="Left" />
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={onChange} />
            </div>
            <img src={rightSvg} alt="Right" />
        </div>
    );
}

export default Switch;