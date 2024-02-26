import React, { useState } from 'react';


const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="row justify-content-end burger-menu">
            <button className="btn btn-primary" onClick={() => setOpen(!open)}>
                {open ? 'Fermer menu' : 'Ouvrir menu'}
            </button>
            {open && (
                <div className="menu">
                    <a href="#">Service </a>
                    <a href="#">Administrateur</a>

                </div>
            )}
        </div>
    );
};

export default BurgerMenu;